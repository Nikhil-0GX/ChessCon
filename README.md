# ChessCon - Your Path to Chess Mastery

ChessCon is a comprehensive web platform designed for aspiring chess professionals and enthusiasts. It provides curated learning tracks, information on major tournaments, live chess news, interactive puzzles, community links, and resources to help players improve their game and navigate the world of competitive chess. This project features a dynamic user interface with smooth animations, theme switching capabilities (Scholarly Parchment Light & Glassmorphic Aurora Night Dark), and live data integration.

## Features

*   **Responsive Design:** Adapts to all screen sizes (desktop, tablet, mobile).
*   **Dual Theming:**
    *   **Scholarly Parchment (Light):** Warm, classic, and inviting.
    *   **Glassmorphic Aurora Night (Dark):** Modern, immersive, with translucent effects and vibrant accents.
*   **Learning Tracks:** Structured paths from beginner to expert with curated resources and icons.
*   **Tournament Information:** Details on major OTB and online chess events with links and tags.
*   **Live Chess News:** Latest articles powered by the Lichess Blog API, with loading and error states.
*   **Interactive Puzzles:** Daily chess puzzles via Lichess embed, themed according to the site's active theme.
*   **Live Streams:** Embedded Twitch streams featuring popular chess channels, with dynamic parent domain for deployment.
*   **Community Hub:** Links to major chess communities, forums, and platforms with descriptive cards and tags.
*   **FAQ Section:** Answers to common questions with an accordion interface and tags.
*   **Smooth Animations & Transitions:** Enhanced user experience with `framer-motion` for page transitions and element animations.
*   **SEO Friendly:** Dynamic page titles and meta descriptions for each page using `react-helmet-async`.
*   **Robust Error Handling:** For API requests and component rendering.
*   **Styled Components:** For maintainable and dynamic CSS.

## Tech Stack

*   **Frontend:** React (v18+), React Router (v6)
*   **Styling:** Styled Components
*   **State Management:** React Context (for Theme)
*   **Animations:** Framer Motion
*   **Icons:** React Icons
*   **API Client:** Axios (for fetching Lichess Blog data)
*   **SEO:** React Helmet Async
*   **Build Tool:** Create React App (react-scripts)
*   **Deployment (Example):** Vercel, Netlify, GitHub Pages

## Project Structure

chesscon/
├── public/ # Static assets, index.html
├── src/
│ ├── api/ # API fetching logic
│ ├── assets/ # Images, logos
│ ├── components/ # Reusable UI components & page components
│ ├── data/ # Static data arrays (learning tracks, FAQs, etc.)
│ ├── App.js # Main application component, routing
│ ├── index.js # Entry point of the React app
│ ├── index.css # Global styles & theme variables
│ └── ThemeContext.js # Context for theme management
├── .env # Environment variables (if any, e.g., API keys)
├── package.json # Project dependencies and scripts
└── README.md # This file




## Getting Started

### Prerequisites

*   Node.js (v16 or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/chesscon.git 
    cd chesscon
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

```bash
npm start
# or
# yarn start


This will open the app at localhost:3000.