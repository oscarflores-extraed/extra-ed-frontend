# Extra Ed Frontend Prototype - Mission Plan

Here is the comprehensive, step-by-step Mission Plan designed specifically for Google Antigravity agents. You can copy and paste the provided prompts into the Agent Manager, executing them in sequence to build the complete, dynamic prototype.

## 1. Antigravity Scaffolding Tasks

**Instructions for Human/Initial Agent:**
Copy and paste this prompt to your first Antigravity agent to scaffold the foundation:

> **Agent Prompt: Initialize Project**
> "Please set up a new React application in the current directory using Vite. Run `npx -y create-vite@latest . --template react`. 
> Next, install the necessary dependencies by running: 
> `npm install`
> `npm install -D tailwindcss postcss autoprefixer`
> `npx tailwindcss init -p`
> `npm install framer-motion react-router-dom lucide-react clsx tailwind-merge`
> Once installed, configure `tailwind.config.js` to support typical content paths and set up the base Tailwind directives in `src/index.css`."

---

## 2. Agent Mission Plan (Step-by-Step Tasks)

Once the project is scaffolded, feed these tasks sequentially to your agents. 

### Task 1: Design System & Core Layout Components
**Goal:** Establish the foundational look and feel, including navigation and footer.

> **Agent Prompt:**
> "Focus on creating a modern, premium design system for the Extra Ed website. 
> 1. Set up global CSS in `index.css` with a modern font (e.g., Inter or Outfit) and define brand colors (use generic modern vibrant colors for now until I provide the exact hex codes). 
> 2. Create a fully responsive, floating `Navbar.jsx` with smooth hover states and a mobile hamburger menu. The login/register button should be styled prominently but only redirect to a `#` for now.
> 3. Create a comprehensive `Footer.jsx` with categorized links and social icons (use `lucide-react`).
> 4. Set up `react-router-dom` in `App.jsx` with an overarching Layout component that includes the Navbar and Footer.
> **Verification:** Start the Vite dev server (`npm run dev`) and use your browser tool to capture a screenshot of the responsive navbar and footer. Provide the screenshot in your artifact."

### Task 2: Data Architecture & Routing Setup
**Goal:** Prepare the JSON architecture to handle 48 dynamic pages without hardcoding.

> **Agent Prompt:**
> "Set up the data architecture and routing framework:
> 1. Create a file at `src/data/programs.json`. Populate it with an array of at least 5 dummy program objects representing Extra Ed services (e.g., Chess, Coding, Robotics). Each object should have keys for `id`, `title`, `shortDescription`, `fullDescription`, `headerVideoUrl`, `galleryImages`, and `features`.
> 2. Update `App.jsx` routes to include: `/` (Home), `/contact` (Contact Us), `/about` (About/Initiatives), `/programs` (Repository), `/programs/:id` (Dynamic Page), and `/media` (Press/Blogs).
> 3. Create basic placeholder components for each of these routes.
> **Verification:** Use the browser tool to navigate to `/` and `/programs/chess` to confirm the router successfully renders the placeholders."

### Task 3: Reusable Dynamic Program Page Template
**Goal:** Build the dynamic template that will power all 48 program pages.

> **Agent Prompt:**
> "Build the `ProgramTemplate.jsx` page (mapped to `/programs/:id`). This page MUST be highly dynamic and visually stunning, reflecting an 'anti-gravity' feel.
> 1. Fetch the corresponding program data from `src/data/programs.json` using the URL parameter.
> 2. **Hero Section:** Implement a full-width header supporting a video background backdrop. Overlay the title using `framer-motion` for a smooth fade-and-slide up animation on load.
> 3. **Content Section:** Create a scroll-triggered text section using Framer Motion's `useInView`. Text should gently float into position as the user scrolls.
> 4. **Gallery/Features:** Build a dynamic masonry-style picture gallery and a feature graphics section utilizing smooth hover scaling effects.
> **Verification:** Render localhost in your browser tool, navigate to a dynamic program page, and verify the animations and layout. Capture a video recording or screenshot of the layout."

### Task 4: Main Landing Page Development
**Goal:** Create a high-impact, premium homepage.

> **Agent Prompt:**
> "Develop the `Home.jsx` page to act as a modern Single Page Application entry point.
> 1. Build a high-impact Hero section with a video background, an animated 'Welcome to Extra Ed' message, and a clear Call-to-Action.
> 2. Under the Hero, implement 'floating' animated photo cards highlighting Top Programs using `framer-motion`. These should react interactively to mouse movement or hover.
> 3. Create a modern scrolling experience down to a summary section about Extra Ed's mission.
> 4. Ensure perfect responsiveness (Mobile, Tablet, Desktop).
> **Verification:** Use your browser testing tool to interact with the homepage and capture a video of the Framer Motion floating card effects."

### Task 5: Programs Repository Page
**Goal:** Build the master list page containing all services.

> **Agent Prompt:**
> "Build the `Programs.jsx` repository page.
> 1. Import `programs.json` and map through the array to display a master list of all services.
> 2. Design this as a responsive CSS Grid of interactive, glassmorphism-styled cards.
> 3. Each card should show an image thumbnail, a short description, and feature Framer Motion hover animations (e.g., slight lift and shadow expansion). Clicking the card routes to `/programs/:id`.
> 4. Add a simple search/filter input at the top to filter the grid dynamically.
> **Verification:** Test the search functionality via the browser tool and provide a screenshot of the grid."

### Task 6: About, Media, & Contact Pages
**Goal:** Flesh out the remaining standard pages with the matching dynamic theme.

> **Agent Prompt:**
> "Implement `About.jsx`, `Media.jsx`, and `Contact.jsx` maintaining the premium aesthetic.
> 1. **About Page:** Include styled sections for 'Our Story', 'Economic Inclusivity', and 'Sustainability'. Add a visually distinct 'Donate' placeholder section.
> 2. **Contact Page:** Create categorized contact methods (General, Help, etc.) and social links using `lucide-react` icons. Use subtle entry animations for the contact cards.
> 3. **Media Page:** Create a simple grid layout for placeholder Blogs and Press releases.
> **Verification:** Navigate to all three pages in the browser tool, ensure responsive design holds up, and take screenshots for final review."

---

## 3. GoDaddy Export Guide (Human Instructions)

Because agents are restricted to local development, follow these steps to manually deploy your Vite React app to GoDaddy once the prototype is finished.

1. **Build the Application:**
   Open your terminal in Antigravity (or locally) and run:
   ```bash
   npm run build
   ```
2. **Locate the Output:**
   Vite will generate a `dist` folder inside your project directory. This folder contains the compiled, minified static HTML, CSS, and JS files.
3. **Zip the Files:**
   Compress the **contents** of the `dist` folder into a `.zip` file (do not zip the folder itself, but the files inside it).
4. **Upload to GoDaddy:**
   - Log into your GoDaddy account and open **cPanel**.
   - Open the **File Manager** and navigate to your `public_html` directory (or the specific add-on domain folder).
   - Click **Upload**, select your zip file, and extract it directly into the directory.
5. **CRITICAL - Fix React Router for cPanel:**
   Because React is a Single Page Application, navigating directly to a sub-page (like `extraed.ca/about`) on an Apache server (GoDaddy) will throw a 404 error if not configured properly.
   - In your `public_html` folder, ensure you have settings turned on to view hidden files.
   - Create a new file named exactly `.htaccess`.
   - Edit the file and paste the following snippet to force the server to route all traffic to `index.html`:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
6. **Save and Test:**
   Visit your live domain. The React prototype should now be live!
