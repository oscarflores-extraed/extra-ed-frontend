# Extra Ed - Front End Prototype

This repository contains the local React prototype for the **Extra Ed** website redesign, constructed as a modern, high-performance Single Page Application (SPA).

## Technology Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (Strict brand color variables mapped dynamically)
- **Animations:** Framer Motion (Scroll interceptions, CSS 3D perspectives)
- **Routing:** React Router DOM
- **Icons:** Lucide React

## Project Architecture
The prototype has been engineered across three foundational phases so far:
1. **Foundation & Assets:** The `src/assets` directory mirrors the exact structural paths of the redesign sections. Color schemes (`#2EA218`, `#FF8400`, `#FFD301`, `#149BDD`) are securely locked in `src/index.css`.
2. **Data Mocking:** The `src/data` folder holds the JSON structures mapping dynamic subcategories (STEM, Visual Arts, etc.), mock Team data, and Press publication links.
3. **Core Layouts:** 
   - `Home.jsx`: Dual-responsive video backgrounds, scroll-fading Welcome layouts, structured summary hover cards, and interactive Google Reviews carousels controlled by Chevron navigation.
   - `About.jsx`: Scrolling vertical history timeline and 3D flip-card Core Value props.
   - `OurTeam.jsx`: Interactive Flip-Card team grid highlighting the `team.json` database.
   - `Navbar.jsx`: Scroll-reactive navigation with transparent-to-opaque thresholds checking window Y-axis and dynamically adjusting brand font colors to ensure maximum contrast.

## Installation & Setup
To properly render this build locally, install Node.js on your machine, then run the exact package script in your terminal from the root folder:

```bash
npm install
npm run dev
```
Navigate to the provided `localhost` URL to visualize all dynamic animations natively!

## Deployment Notes
Since this utilizes `react-router-dom`, ensure the target production server (e.g., GoDaddy cPanel) properly handles SPA rewrites via a standard `.htaccess` configuration to prevent 404 tracking on sub-directories on direct load.
