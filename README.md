# EPUB Translator Reader

A desktop EPUB reader with built-in translation capabilities for Japanese, Spanish, and Malayalam to English. Built with Electron and inspired by the Freda EPUB reader interface.

## Features

- **EPUB Reading**: Clean, responsive EPUB file reading with proper formatting
- **Multi-language Translation**: Click-to-translate support for:
  - Japanese (日本語) → English
  - Spanish (Español) → English  
  - Malayalam (മലയാളം) → English
- **Table of Contents**: Easy navigation through book chapters
- **Customizable Reading Experience**:
  - Adjustable font size (12px - 24px)
  - Variable line height (1.2 - 2.0)
  - Multiple themes (Light, Dark, Sepia)
- **Keyboard Shortcuts**:
  - `Ctrl/Cmd + O`: Open EPUB file
  - `Ctrl/Cmd + ,`: Open settings
  - `←/→`: Navigate chapters
  - `Esc`: Close popups/modals

## Installation

1. **Prerequisites**: Make sure you have Node.js installed (version 14 or higher)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Development mode** (with DevTools):
   ```bash
   npm run dev
   ```

5. **Build for distribution**:
   ```bash
   npm run build
   ```

## Usage

1. **Open an EPUB file**: Click "Open EPUB" button or use `Ctrl/Cmd + O`
2. **Navigate**: Use the table of contents sidebar or navigation buttons
3. **Translate text**: 
   - Select translation language from dropdown
   - Click on any text to see translation in popup
4. **Customize reading**: Click "Settings" to adjust font size, line height, and theme

## Translation Features

The app includes a built-in translation system with:
- **Instant translation**: Click any text for immediate translation
- **Language detection**: Automatic detection of Japanese, Spanish, and Malayalam text
- **Translation caching**: Reduces repeated translation requests
- **Fallback system**: Mock translations for demonstration (can be extended with real APIs)

## Extending Translation

To add real translation API support:

1. Get API key from translation service (Google Translate, DeepL, etc.)
2. Update `translator.js` with your API implementation
3. Set API key using `translator.setAPIKey(yourKey)`

## File Structure

```
src/
├── main.js              # Electron main process
├── renderer/
│   ├── index.html       # Main UI
│   ├── styles.css       # Styling
│   ├── app.js          # Main application logic
│   ├── epub-parser.js   # EPUB file parsing
│   └── translator.js    # Translation functionality
└── assets/             # Icons and resources
```

## Supported EPUB Features

- EPUB 2.0 and 3.0 format support
- NCX and Navigation Document table of contents
- XHTML content rendering
- Metadata extraction (title, author, language, etc.)
- Spine-based chapter navigation

## Known Limitations

- Images in EPUB files are currently hidden (can be extended)
- Translation uses mock data (requires API integration for production)
- No DRM-protected EPUB support
- Limited CSS styling preservation

## Contributing

Feel free to contribute by:
- Adding more translation languages
- Implementing real translation APIs
- Improving EPUB parsing
- Enhancing the UI/UX
- Adding more reading features

## License

MIT License - feel free to use and modify as needed.