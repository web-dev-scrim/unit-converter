# Unit Converter

A simple and elegant web application for converting between metric and imperial units. Built with vanilla JavaScript and styled with modern CSS.

## Features

- **Length Conversion**: Convert between meters and feet
- **Volume Conversion**: Convert between liters and gallons  
- **Mass Conversion**: Convert between kilograms and pounds
- **Bidirectional Conversion**: Each conversion shows both directions simultaneously
- **Clean UI**: Modern, responsive design with intuitive interface
- **Real-time Updates**: Instant conversion results as you type

## Demo

🔗 **Live Demo**: [View on Netlify](https://your-site-name.netlify.app) *(Replace with your actual Netlify URL)*

## Screenshots

![Unit Converter Interface](https://via.placeholder.com/600x400/6943FF/ffffff?text=Unit+Converter+Screenshot)

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite
- **Deployment**: Netlify (via GitHub Actions)
- **Version Control**: Git & GitHub

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/web-dev-scrim/unit-converter.git
   cd unit-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Usage

1. Enter a numeric value in the input field
2. Click the "Convert" button
3. View the conversion results for all three unit types:
   - Length (meters ↔ feet)
   - Volume (liters ↔ gallons)
   - Mass (kilograms ↔ pounds)

Each result shows both conversion directions, making it easy to see equivalent values in both metric and imperial systems.

## Project Structure

```
unit-converter/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling
├── package.json        # npm configuration
├── vite.config.js      # Vite build configuration
├── .gitignore          # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions for Netlify deployment
└── dist/               # Build output (generated)
```

## Conversion Formulas

The application uses the following conversion factors:

### Length
- **Meters to Feet**: `meters × 3.28084 = feet`
- **Feet to Meters**: `feet × 0.3048 = meters`

### Volume
- **Liters to Gallons**: `liters × 0.264172 = gallons`
- **Gallons to Liters**: `gallons × 3.78541 = liters`

### Mass
- **Kilograms to Pounds**: `kilograms × 2.20462 = pounds`
- **Pounds to Kilograms**: `pounds × 0.453592 = kilograms`

## Deployment

This project is configured for automatic deployment to Netlify using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers:
1. Dependency installation
2. Production build generation
3. Automatic deployment to Netlify

### Manual Deployment

To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting platform

### Netlify Setup

To set up Netlify deployment:

1. Create a new site on [Netlify](https://netlify.com)
2. Add these secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**web-dev-scrim** - [GitHub Profile](https://github.com/web-dev-scrim)

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
