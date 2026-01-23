# Beck-Dev Portfolio - Project Roadmap

## Completed Features

### January 20, 2026 - Initial Build

Created the developer portfolio with retro-futuristic NASA-punk aesthetic.

**Pages Created:**

1. **index.html** - Landing Page
   - Hero section with avatar, name, title
   - Social links (GitHub, LinkedIn, Google Scholar) in hero with skill-tag styling
   - Tutorial cards with difficulty tags
   - Featured projects grid (Offline RAG LLM, Apollo Hub, Pi-NAS, Community Mesh, ECE Capstone)
   - Skills/technologies section (AI/ML focus: Python, TensorFlow, PyTorch, LangChain, etc.)
   - Contact card with email and social links
   - Sticky navigation

2. **tutorials/raspberry-pi-nas.html** - Raspberry Pi NAS Tutorial
   - Complete guide to building a NAS with OpenMediaVault
   - Materials list, step-by-step instructions
   - Troubleshooting section
   - Code blocks and info boxes

3. **tutorials/community-hub.html** - Off-Grid Community Hub Tutorial
   - Guide to building local-network information portals
   - HTML/CSS best practices for offline-first design
   - Deployment options for local networks
   - Tips for solar-powered hosting

4. **tutorials/meshtastic-mesh.html** - Meshtastic Mesh Network Tutorial
   - Complete Meshtastic setup guide
   - Network topology and node roles
   - Channel configuration and security
   - Community deployment strategies

**Styling (styles.css):**
- Retro-futuristic NASA-punk aesthetic (shared with Apollo Hub)
- Animated starfield background
- Tutorial cards with hover effects
- Difficulty level color coding (beginner/intermediate/advanced)
- Article page styling with code blocks
- Step-by-step instruction formatting
- Info/warning/tip boxes
- Mobile-responsive design
- Print-friendly styles

---

## Upcoming Features

### Content
- [ ] Add more tutorials:
  - [ ] Running Local LLMs on Raspberry Pi
  - [ ] Building an Offline AI Assistant with LlamaIndex
  - [ ] Introduction to Machine Learning for Makers
  - [ ] Self-Hosted Jupyter Notebooks for Research
  - [ ] Docker for Researchers: Reproducible Environments
  - [ ] Setting up Pi-hole for network-wide ad blocking
  - [ ] Building a solar-powered Raspberry Pi
  - [ ] Introduction to Ham Radio for beginners
- [ ] Add a blog/articles section for shorter posts
- [ ] Create dedicated workshop detail pages
- [ ] Add workshop booking/scheduling system
- [x] Create "About Me" expanded page with background/journey (about.html)
- [x] Add Research & Publications section (on index.html)
- [x] Create project detail pages (projects/ folder):
  - [x] projects/offline-rag-llm.html - Full description, tech stack, features
  - [x] projects/prompt-template-manager.html - Description, GitHub link
  - [x] projects/apollo-community-hub.html - Description, repo link, related tutorials
  - [ ] projects/ece-capstone.html - Description, highlights, student outcomes (future)

### Design
- [ ] Add tutorial thumbnail images
- [ ] Add screenshots/images to project detail pages
- [ ] Create custom icons to replace emoji
- [ ] Add dark/light theme toggle (CSS only)
- [ ] Improve print styles for tutorials

### Technical
- [ ] Add RSS feed for tutorials
- [ ] Create sitemap.xml for SEO
- [ ] Add Open Graph meta tags for social sharing
- [ ] Consider adding search functionality (lunr.js or similar)

### Integration
- [x] Link to Apollo Community Hub repo (https://github.com/wfmonster/ApolloCommunityHub)
- [ ] Add links to live demos where applicable
- [x] Connect GitHub profile (https://github.com/wfmonster/)
- [x] Add Google Scholar link (https://scholar.google.com/citations?user=NC5qb5oAAAAJ&hl=en)
- [x] Add ORCID link (https://orcid.org/0009-0000-8699-5771)
- [x] Add LinkedIn link (https://www.linkedin.com/in/phyllisbeck/)
- [x] Add contact email (beck@beckbishop.com)

---

## Version History

### v1.0.0 (January 20, 2026)
- Initial release
- Landing page with profile
- Three complete tutorials
- NASA-punk theme implementation

### v1.1.0 (January 20, 2026)
- Updated hero section: removed bio, added social links with skill-tag styling
- Updated title to "Full-Stack AI Engineer • Researcher • Educator • Creative Technologist"
- Added featured projects: Offline RAG LLM System, ECE Capstone Design
- Expanded skills section with AI/ML technologies
- Fixed navigation icons for consistency
- Added Google Scholar link
- Updated contact email to beck@beckbishop.com

### v1.2.0 (January 20, 2026)
- Added Workshops & Training section
  - Past workshops: LLMs/Prompt Engineering (CAVS), ChatGPT Security & Privacy
  - Available for booking card with email CTA
- Added workshops navigation link
- Custom workshop card styling with "past" and "available" variants

### v1.3.0 (January 20, 2026)
- Added "Vibecoding with Claude Code" available workshop
- Added Prompt Template Manager to featured projects (https://github.com/wfmonster/prompt-template-manager)
- Linked Apollo Community Hub project to GitHub repo
- Linked Pi-NAS and Community Mesh projects to their tutorials
- Added tutorials/github-netlify-guide.html - Git & deployment guide
- Expanded skills section with JS/TS, C#, Unity, SQL, Kubernetes, Arduino, etc.
- Added ORCID link (https://orcid.org/0009-0000-8699-5771)
- Fixed link colors for readability (teal default, gold hover)
- Added global link styling to styles.css

### v1.4.0 (January 20, 2026)
- Created project detail pages (projects/ folder):
  - projects/offline-rag-llm.html - Comprehensive RAG system documentation
  - projects/prompt-template-manager.html - Project overview with GitHub link
  - projects/apollo-community-hub.html - Full description with related tutorials
- Created about.html - "About Me" page with art→AI journey narrative
- Added Research & Publications section to index.html
  - Dissertation and 4 key conference papers
  - Best Presentation Award highlight
  - Link to Google Scholar
- Updated navigation with Research and About links
- Added publications CSS styling

### v1.5.0 (January 20, 2026)
- **Radio Visualizer Feature** - Interactive analog radio tuner aesthetic element
  - Animated frequency bars (85 bars) with teal→gold→orange color gradient
  - Mouse-reactive: bars respond to cursor proximity with height/opacity changes
  - Ghost/echo layer for phosphor persistence effect (blurred offset copy)
  - Static/noise overlay with flickering animation
  - CRT-style scan lines overlay
  - Sweeping tuning line that moves across the visualizer
  - Random interference burst spikes
  - Rotating tuning knob decoration
  - Dynamic frequency display (88.1-108.9 MHz) that changes on hover
- **Code Organization**
  - Extracted JavaScript to separate file: radio-visualizer.js
  - Clean IIFE pattern with configuration object
  - Well-documented functions and event handlers
- **Styling Updates**
  - Hero section padding adjustments
  - Visualizer positioned between hero and navigation
  - Bottom-aligned tuning elements

### v1.6.0 (January 20, 2026)
- **Interactive Effects** - New micro-animations and enhancements (effects.js)
  - **Typing Effect**: Hero title cycles through roles with blinking cursor
    - "Full-Stack AI Engineer" → "Researcher" → "Educator" → "Creative Technologist"
    - Configurable type/delete speeds and pause durations
  - **3D Card Tilt**: Cards respond to mouse position with subtle 3D rotation
    - Applied to tutorial, project, workshop, and publication cards
    - 8° max tilt with 1.02x scale on hover
  - **Parallax Starfield**: Two star layers move at different speeds on scroll
    - Creates depth with distant/close star layers
    - Performance-optimized with requestAnimationFrame
  - **Scroll Progress Indicator**: Gradient bar at top of page
    - Teal→gold→orange gradient matching theme
    - Glowing effect, fills as user scrolls
- **File Structure**
  - New file: effects.js (typing, tilt, parallax, scroll progress)
  - radio-visualizer.js (radio tuner interactions)
  - Clean separation of concerns

### v1.7.0 (January 23, 2026)
- **New Tutorial**: tutorials/meshtastic-heltec-v2.html
  - Step-by-step guide for flashing Meshtastic v2.5.6 to Heltec LoRa 32 V2
  - Command-line approach using esptool
  - Explains complete vs update firmware files
  - Troubleshooting section for common issues
  - Links to main Meshtastic mesh tutorial
- **Integration**
  - Added LinkedIn profile link (https://www.linkedin.com/in/phyllisbeck/)
