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
  - [ ] Self-hosting Nextcloud
  - [ ] Introduction to Ham Radio for beginners
  - [ ] Home automation with Home Assistant
- [ ] Add a blog/articles section for shorter posts
- [ ] Create dedicated workshop detail pages
- [ ] Add workshop booking/scheduling system
- [ ] Create "About Me" expanded page with background/journey
- [ ] Add Research & Publications section
- [ ] Create project detail pages (projects/ folder):
  - [ ] projects/offline-rag-llm.html - Full description, GitHub link, tech stack, related tutorials
  - [ ] projects/apollo-community-hub.html - Description, repo link, related tutorials
  - [ ] projects/pi-nas.html - Description, link to NAS tutorial
  - [ ] projects/community-mesh.html - Description, link to Meshtastic tutorial
  - [ ] projects/ece-capstone.html - Description, highlights, student outcomes
  - Each page should include: project overview, tech stack tags, GitHub repo link, screenshots (if available), related tutorials section

### Design
- [ ] Add tutorial thumbnail images
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
- [ ] Add ORCID link
- [ ] Add LinkedIn link (URL needed)
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
