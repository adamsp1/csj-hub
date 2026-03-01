/**
 * Build script to fetch data from Google Sheets and generate JSON files
 * 
 * SETUP INSTRUCTIONS:
 * 1. Make your Google Sheet publicly readable (Share > Anyone with the link)
 * 2. Find the GID for each sheet:
 *    - Click on each sheet tab
 *    - Look at the URL: #gid=XXXXX
 *    - Copy the number after "gid="
 * 3. Update the SHEET_GIDS object below with the correct GIDs
 * 4. Run this script: node scripts/fetchSheetData.js
 * 
 * RUN BEFORE BUILDING:
 * - Manual: node scripts/fetchSheetData.js && npm run build
 * - Auto: Update package.json build script to include this
 */

const fs = require('fs');
const path = require('path');

const SPREADSHEET_ID = '1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms';

// UPDATE THESE with the correct GIDs from your Google Sheet
// Find GIDs by clicking each sheet tab and looking at the URL #gid=XXXXX
const SHEET_GIDS = {
  sources: '0',
  ideologies: '747893450',
  glossary: '1816209216',
};

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  if (lines.length === 0) return [];

  const headers = parseCSVLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;
    const values = parseCSVLine(lines[i]);
    const row = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx] || '';
    });
    rows.push(row);
  }

  return rows;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

async function fetchAndSave(sheetName, gid, transformer) {
  try {
    console.log(`Fetching ${sheetName} from Google Sheets...`);
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?gid=${gid}&format=csv`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const csv = await response.text();
    const rows = parseCSV(csv);
    const data = transformer(rows);

    const outputPath = path.join(__dirname, '../src/lib/data', `${sheetName}.json`);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✓ Saved ${sheetName} to ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error fetching ${sheetName}:`, error.message);
  }
}

async function main() {
  console.log('Starting Google Sheets data fetch...\n');

  // Fetch Sources
  await fetchAndSave('sources', SHEET_GIDS.sources, (rows) => {
    return rows
      .filter(row => row.id && row.id !== 'id')
      .map(row => ({
        id: row.id,
        title: row.title,
        author: row.author,
        type: row.type,
        url: row.url,
        description: row.description,
        ideologyIds: row.ideologyIds ? row.ideologyIds.split(';').map(s => s.trim()) : [],
        thumbnailUrl: row.thumbnailUrl,
        topicIds: row.topicIds ? row.topicIds.split(';').map(s => s.trim()) : [],
      }));
  });

  // Fetch Ideologies
  await fetchAndSave('ideologies', SHEET_GIDS.ideologies, (rows) => {
    return rows
      .filter(row => row.id && row.id !== 'id')
      .map(row => ({
        id: row.id,
        title: row.title,
        description: row.description,
        ideologyName: row.ideologyName,
        ideologyImage: row.ideologyImage,
        mainConcepts: row.mainConcepts,
        coreTheoriesDescription: row.coreTheoriesDescription,
        politicalAgendas: row.politicalAgendas,
      }));
  });

  // Fetch Glossary
  await fetchAndSave('glossary', SHEET_GIDS.glossary, (rows) => {
    return rows
      .filter(row => row.term && row.term !== 'term')
      .map(row => ({
        term: row.term,
        definition: row.definition,
      }));
  });

  console.log('\n✓ Data fetch complete!');
}

main();
