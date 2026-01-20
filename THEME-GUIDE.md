# NASA-Punk / Retro-Futuristic Theme Guide

This document captures the design system for the beck-dev portfolio and related projects. Use this as a reference when starting new projects or continuing development in a new conversation.

---

## Design Philosophy

**Aesthetic:** Retro-Futuristic / NASA-Punk / Solarpunk

Inspired by:
- 1960s-70s NASA mission control aesthetics
- Vintage space program optimism
- Solarpunk's hopeful, sustainable future vision
- Analog instrument panels and CRT displays

**Key Principles:**
- Warm, inviting despite dark backgrounds
- Technical but approachable
- Functional beauty — form follows function
- Low-power friendly (dark theme, minimal animations)

---

## Color Palette

### Primary Colors (Warm Retro Space)
```css
--apollo-gold: #F4A020;      /* Primary accent, headers, highlights */
--apollo-orange: #E85D04;    /* Secondary accent, gradients */
--apollo-cream: #FDF6E3;     /* Light text, highlights */
--apollo-tan: #EDE0D4;       /* Subtle backgrounds */
```

### Background Colors (Deep Space)
```css
--space-black: #0D1117;      /* Darkest background */
--space-navy: #161B22;       /* Card backgrounds */
--space-blue: #1C2536;       /* Gradient mid-tone */
--space-purple: #21162A;     /* Gradient accent */
```

### Accent Colors
```css
--retro-teal: #2DD4BF;       /* Links, code, secondary highlights */
--retro-red: #EF4444;        /* Errors, warnings, emergency */
--signal-green: #22C55E;     /* Success, operational status */
```

### Text Colors
```css
--text-primary: #FDF6E3;     /* Main text (cream) */
--text-secondary: #A8A29E;   /* Secondary text (warm gray) */
--text-muted: #6B7280;       /* Tertiary text (cool gray) */
```

### Functional Colors
```css
--border-color: rgba(244, 160, 32, 0.3);  /* Subtle gold borders */
--card-bg: rgba(22, 27, 34, 0.85);        /* Semi-transparent cards */
--glow: 0 0 20px rgba(244, 160, 32, 0.3); /* Gold glow effect */
```

---

## Typography

### Font Stack
```css
--font-display: 'Courier New', Courier, monospace;  /* Headers, labels, UI */
--font-body: Georgia, 'Times New Roman', serif;      /* Body text, paragraphs */
```

### Usage
- **Display font (monospace):** Navigation, headers, labels, tags, code, timestamps
- **Body font (serif):** Paragraphs, descriptions, long-form content

### Styling Conventions
- Headers: UPPERCASE, letter-spacing: 0.1-0.2em
- Labels/Tags: UPPERCASE, smaller font size (0.75-0.85rem)
- Body: Normal case, line-height: 1.6-1.8

---

## Spacing Scale

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
```

---

## Key Visual Elements

### Starfield Background
Animated CSS-only starfield using radial gradients:
```css
.stars {
    position: fixed;
    background-image: 
        radial-gradient(1px 1px at 20px 30px, white, transparent),
        radial-gradient(1px 1px at 90px 40px, white, transparent),
        /* ... more stars ... */
        radial-gradient(2px 2px at 160px 120px, var(--apollo-gold), transparent);
    background-size: 400px 250px;
    animation: twinkle 8s ease-in-out infinite alternate;
}
```

### Glowing Ring Logo
Circular logo with pulsing glow animation:
```css
.logo-ring {
    border: 3px solid var(--apollo-gold);
    border-radius: 50%;
    box-shadow: var(--glow), inset 0 0 15px rgba(244, 160, 32, 0.2);
    animation: pulse-ring 4s ease-in-out infinite;
}
```

### Cards
Semi-transparent with gold border accents:
```css
.card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.card:hover {
    border-color: rgba(244, 160, 32, 0.5);
    box-shadow: var(--glow);
}
```

### Card Headers
Gradient background with icon:
```css
.card-header {
    background: linear-gradient(90deg, rgba(244, 160, 32, 0.15), transparent);
    border-bottom: 1px solid var(--border-color);
}
```

### Tags/Badges
```css
.tag {
    font-family: var(--font-display);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    border: 1px solid;
}

/* Difficulty levels */
.difficulty-beginner { color: var(--signal-green); }
.difficulty-intermediate { color: var(--apollo-gold); }
.difficulty-advanced { color: var(--apollo-orange); }
```

### Info Boxes
```css
.info-box {
    background: rgba(45, 212, 191, 0.1);
    border: 1px solid rgba(45, 212, 191, 0.3);
    border-radius: 8px;
    padding: 1rem;
}

.info-box.warning {
    background: rgba(244, 160, 32, 0.1);
    border-color: rgba(244, 160, 32, 0.3);
}

.info-box.danger {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
}
```

### Step Numbers
Circular numbered steps:
```css
.step-number {
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: var(--apollo-gold);
    background: rgba(244, 160, 32, 0.15);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

---

## Icons

Use Unicode symbols instead of icon libraries for offline compatibility:

```
Navigation:
⌂  Home
◈  Resources
◐  Events/Schedule
⚙  Settings/Guides
☉  About/Sun
✉  Contact/Mail

Status:
✦  Star/Important
◉  Logo/Target
⊕  Location/Add
◇  Quick links

Decorative:
→  Arrow right
←  Arrow left
```

---

## Responsive Breakpoints

```css
/* Mobile-first approach */
/* Base styles for mobile */

@media (max-width: 600px) {
    /* Small mobile adjustments */
    body { font-size: 16px; }
    .nav-link { font-size: 0.65rem; }
}

/* Tablet and up use base styles */
/* Desktop enhancements as needed */
```

---

## Animation Guidelines

Keep animations subtle and purposeful:

1. **Starfield twinkle** — Slow (8s), subtle opacity change
2. **Logo pulse** — Slow (4s), gentle glow intensity change
3. **Hover transitions** — Fast (0.3s), ease timing
4. **Card lifts** — translateY(-2px to -3px) on hover

Avoid:
- Fast, jarring animations
- Constant motion that distracts
- Animations that increase power consumption significantly

---

## Code Block Styling

```css
pre {
    background: var(--space-black);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
}

code {
    font-family: var(--font-display);
    color: var(--retro-teal);
    background: rgba(45, 212, 191, 0.1);
    padding: 0.1em 0.4em;
    border-radius: 4px;
}

pre code {
    background: none;
    color: var(--apollo-cream);
}
```

---

## File Naming Conventions

- HTML pages: `kebab-case.html` (e.g., `raspberry-pi-nas.html`)
- CSS files: `styles.css` (single shared stylesheet)
- Folders: `kebab-case/` (e.g., `tutorials/`)
- Images (if added): `descriptive-name.png`

---

## Quick Start for New Pages

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Dr. Phyllis J. Beck</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="stars"></div>
    <div class="stars stars-2"></div>
    
    <nav class="main-nav">
        <!-- Navigation links -->
    </nav>
    
    <main class="content">
        <!-- Page content -->
    </main>
    
    <footer class="main-footer">
        <div class="footer-content">
            <p class="footer-motto">"Where the light gathers"</p>
            <p class="footer-info">Dr. Phyllis J. Beck • Building for Resilience</p>
        </div>
        <div class="footer-decoration">
            <span>◉</span>
        </div>
    </footer>
</body>
</html>
```

---

## Summary for AI Assistants

When continuing this project:

1. **Theme:** Retro-futuristic NASA-punk with solarpunk values
2. **Colors:** Gold (#F4A020) on dark navy (#0D1117), teal accents (#2DD4BF)
3. **Fonts:** Courier New for UI, Georgia for body text
4. **Style:** Uppercase headers, glowing borders, animated starfield
5. **Tech:** Pure HTML/CSS only, no JavaScript frameworks
6. **Motto:** "Where the light gathers"
7. **Purpose:** Developer portfolio showcasing off-grid/resilient tech tutorials

Maintain consistency with existing `styles.css` — all visual patterns are defined there.
