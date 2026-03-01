import { Source } from '@/lib/types';
import sourcesData from '@/lib/data/sources.json';

// Data is fetched from Google Sheets at build time
// To update from your spreadsheet:
// 1. Run: node scripts/fetchSheetData.js
// 2. Rebuild: npm run build

export const sources: Source[] = sourcesData as Source[];

