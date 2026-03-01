/**
 * Utility to fetch and parse data from the Google Sheets CSV exports
 * 
 * The spreadsheet tabs are exported as CSVs:
 * - Sources: https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/export?gid=0&format=csv (gid=0)
 * - Ideologies: https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/export?gid=1999992690&format=csv
 * - Glossary: https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/export?gid=2000000000&format=csv
 */

import { Source, Ideology } from './types';

const SPREADSHEET_ID = '1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms';

// GID values for each tab (Sources=0, others need to be determined from the sheet)
const SHEET_GIDS = {
  sources: '0',
  ideologies: '1999992690',  // Replace with actual GID
  glossary: '2000000000',    // Replace with actual GID
};

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split('\n');
  if (lines.length === 0) return [];

  const headers = parseCSVLine(lines[0]);
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx] || '';
    });
    rows.push(row);
  }

  return rows;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
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

export async function fetchSources(): Promise<Source[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?gid=${SHEET_GIDS.sources}&format=csv`;
    const response = await fetch(url);
    const csv = await response.text();
    const rows = parseCSV(csv);

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      author: row.author,
      type: row.type as any,
      url: row.url,
      description: row.description,
      ideologyIds: row.ideologyIds ? row.ideologyIds.split(';').map(s => s.trim()) : [],
      thumbnailUrl: row.thumbnailUrl,
      topicIds: row.topicIds ? row.topicIds.split(';').map(s => s.trim()) : [],
    })).filter(s => s.id && s.id !== 'id'); // Filter out headers
  } catch (error) {
    console.error('Error fetching sources from Google Sheets:', error);
    return [];
  }
}

export async function fetchIdeologies(): Promise<Ideology[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?gid=${SHEET_GIDS.ideologies}&format=csv`;
    const response = await fetch(url);
    const csv = await response.text();
    const rows = parseCSV(csv);

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      ideologyName: row.ideologyName,
      ideologyImage: row.ideologyImage,
      mainConcepts: row.mainConcepts,
      coreTheoriesDescription: row.coreTheoriesDescription,
      politicalAgendas: row.politicalAgendas,
    })).filter(i => i.id && i.id !== 'id'); // Filter out headers
  } catch (error) {
    console.error('Error fetching ideologies from Google Sheets:', error);
    return [];
  }
}

export async function fetchGlossary(): Promise<Array<{ term: string; definition: string }>> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?gid=${SHEET_GIDS.glossary}&format=csv`;
    const response = await fetch(url);
    const csv = await response.text();
    const rows = parseCSV(csv);

    return rows.map((row) => ({
      term: row.term,
      definition: row.definition,
    })).filter(g => g.term && g.term !== 'term'); // Filter out headers
  } catch (error) {
    console.error('Error fetching glossary from Google Sheets:', error);
    return [];
  }
}
