# First Doge Agent ($FDA) Website

A modern, interactive React website for the First Doge Agent ($FDA) token project. This website features sleek animations, dynamic elements, and a chatbot integration that provides information based on DOGE API data.

## Features

- 🌟 Modern UI with sleek animations powered by Framer Motion
- 🔄 Dynamic elements and interactive components
- 🤖 AI-powered chatbot that answers questions based on DOGE API data
- 📊 Real-time data visualization from DOGE API
- 🪙 Tokenomics information for the $FDA token
- 📱 Fully responsive design for all devices

## Technology Stack

- React 18
- Styled Components
- Framer Motion
- React Particles
- React Icons
- Axios for API integration

## Project Structure

```
fda-website/
├── public/              # Public assets
│   └── index.html       # HTML template
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── Header.js    # Navigation header
│   │   ├── Hero.js      # Hero section
│   │   ├── DataSection.js # DOGE API data visualization
│   │   ├── TokenSection.js # $FDA token information
│   │   ├── Chatbot.js   # AI chatbot component
│   │   ├── Footer.js    # Page footer
│   │   └── ParticleBackground.js # Particle animation background
│   ├── services/        # Services for API calls
│   │   └── api.js       # API integration with DOGE API
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## API Integration

The website connects to the DOGE API (`https://api.doge.gov`) to fetch grant data:

- Endpoint: `/savings/grants`
- Parameters:
  - `sort_by`: 'value'
  - `sort_order`: 'desc'
  - `page`: 1
  - `per_page`: 10

The retrieved data is used to populate the data visualization section and to inform the AI chatbot's responses.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/fda-website.git
   cd fda-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

## Deploy on GitHub

1. Create a new repository on GitHub
2. Initialize git in your local project
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect and push to your GitHub repository
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/fda-website.git
   git branch -M main
   git push -u origin main
   ```

## Deploy on Vercel

1. Push your code to GitHub (follow steps above)
2. Visit [Vercel](https://vercel.com) and sign in with GitHub
3. Import your repository
4. Configure the build settings:
   - Project Name: `fda-website` (or your preferred name)
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Click "Deploy"

For more detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- DOGE API for providing the data
- Create React App for the initial project structure
- All the amazing open-source libraries used in this project
