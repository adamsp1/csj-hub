# Google Sheets Integration Setup

This project is configured to sync content from a Google Spreadsheet. All site data (Sources, Ideologies, and Glossary terms) is fetched from your Google Sheet and automatically updated when you rebuild.

## Your Spreadsheet
**Link:** https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/

## Sheet Structure

Your spreadsheet has 3 tabs with the following columns:

### Tab 1: Sources
- `id` - Unique identifier
- `title` - Source title
- `author` - Author name
- `type` - Type (book, article, video)
- `url` - Source URL
- `description` - Brief description
- `ideologyIds` - Related ideology IDs (comma or semicolon separated)
- `thumbnailUrl` - Image URL

### Tab 2: Ideologies
- `id` - Unique identifier
- `title` - Short title for cards
- `description` - Brief summary
- `ideologyName` - Full name for detail page
- `ideologyImage` - Path to image in public/images/
- `mainConcepts` - Key concepts (comma-separated)
- `coreTheoriesDescription` - Detailed explanation
- `politicalAgendas` - Political implications

### Tab 3: Glossary
- `term` - Glossary term
- `definition` - Term definition

## How to Update Data

### Step 1: Edit Your Spreadsheet
1. Open: https://docs.google.com/spreadsheets/d/1xJ-4NyHiyaAuN1Dqu1cWLK_o2Ezf7FgPnHcda0HrRms/
2. Make your changes to any of the 3 tabs
3. The spreadsheet must be set to "Viewer access for anyone with the link"

### Step 2: Find Sheet GIDs (One-time setup)
1. Click on each sheet tab in Google Sheets
2. Look at the URL format: `#gid=XXXXX`
3. Note the numbers for each sheet:
   - **Sources**: Usually `0` (first sheet)
   - **Ideologies**: Usually `1` (second sheet)
   - **Glossary**: Usually `2` (third sheet)

If your sheets have different numbers, update them in `scripts/fetchSheetData.js`:

```javascript
const SHEET_GIDS = {
  sources: '0',        // Update if needed
  ideologies: '1',     // Update if needed
  glossary: '2',       // Update if needed
};
```

### Step 3: Fetch Latest Data
Run this command in your terminal:

```bash
node scripts/fetchSheetData.js
```

This will:
- Fetch data from your Google Sheet
- Convert it to JSON format
- Save to `src/lib/data/` directory

### Step 4: Rebuild and Deploy
```bash
npm run build
```

Then deploy as usual. The website will now display the updated data from your spreadsheet.

## Automated Updates (Optional)

If you want this to run automatically before every build, update `package.json`:

```json
{
  "scripts": {
    "prebuild": "node scripts/fetchSheetData.js",
    "build": "next build"
  }
}
```

Now running `npm run build` will automatically fetch the latest data from Google Sheets first.

## Tips

- **Ideologies Images**: When you add new ideologies, create an SVG file and save it to `public/images/` (e.g., `marxism.svg`), then reference it in the spreadsheet as `/images/marxism.svg`
- **ID Arrays**: For `ideologyIds` in Sources, use semicolons to separate multiple IDs: `1;2;3`
- **Make it Public**: Ensure the spreadsheet is shared "Anyone with the link can view" so the script can access it
- **Column Order**: The column order doesn't matter in Google Sheets - the script looks for column names

## Troubleshooting

**Script says "HTTP 404":**
- Make sure the spreadsheet is set to public sharing
- Verify the SHEET_GIDS are correct

**Build says data is missing after fetching:**
- Check that `src/lib/data/*.json` files were created
- Verify Google Sheet has data (not just headers)

**Changes not showing on site:**
- Remember to run `npm run build` after fetching new data
- Static export requires a rebuild to update content
