import { Ideology } from '@/lib/types';
import ideologiesData from '@/lib/data/ideologies.json';

/**
 * Ideologies dataset - synced from Google Sheets
 * 
 * To update ideologies:
 * 1. Edit the "Ideologies" tab in: https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/
 * 2. Run: node scripts/fetchSheetData.js
 * 3. Rebuild: npm run build
 * 4. Add images to public/images/ if needed
 */

export const ideologies: Ideology[] = ideologiesData as Ideology[];

