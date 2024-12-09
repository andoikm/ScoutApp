module.exports = {
  printWidth: 120,                      // Limit line length to 120 characters
  tabWidth: 2,                          // Indent using 2 spaces
  trailingComma: 'es5',                 // Include trailing commas in ES5 (objects, arrays, etc.)
  singleQuote: true,                    // Use single quotes wherever possible
  arrowParens: 'avoid',                 // Avoid parentheses for single-parameter arrow functions
  semi: true,                           // Enforce semicolons at the end of statements
  jsxSingleQuote: false,                // Use double quotes in JSX attributes
  bracketSpacing: true,                 // Add spaces between brackets in object literals
  endOfLine: 'auto',                    // Maintain existing line endings (useful for cross-platform projects)
  proseWrap: 'preserve',                // Do not force wrapping of markdown text
  useTabs: false,                       // Use spaces instead of tabs for indentation
  quoteProps: 'consistent',             // Only quote object properties if necessary, or consistently if one requires it
  jsxBracketSameLine: false,            // Put the closing bracket of JSX elements on a new line
  embeddedLanguageFormatting: 'auto',   // Automatically format embedded code (like HTML or CSS in JS)
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',                // Ensure JavaScript files use Babel for parsing
      },
    },
    {
      files: '*.jsx',
      options: {
        parser: 'babel',                // Ensure JSX files use Babel for parsing
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',           // Ensure TypeScript files use the TypeScript parser
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',           // Ensure TSX files use the TypeScript parser
      },
    },
  ],
  plugins: ['prettier-plugin-react'],   // Use React-specific plugin for better JSX formatting
  htmlWhitespaceSensitivity: 'ignore',  // Ignore whitespace sensitivity in HTML-like files (useful for React Native)
  importOrder: ['^react$', '^react-native$', '^[./]'], // Organize imports: React, React Native, then relative imports
  importOrderSeparation: true,          // Add a blank line between import groups
};
