import glossaryData from '@/lib/data/glossary.json';

/**
 * Glossary dataset - synced from Google Sheets
 * 
 * To update glossary terms:
 * 1. Edit the "Glossary" tab in: https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/
 * 2. Run: node scripts/fetchSheetData.js
 * 3. Rebuild: npm run build
 */

export const glossary = glossaryData as Array<{ term: string; definition: string }>;

