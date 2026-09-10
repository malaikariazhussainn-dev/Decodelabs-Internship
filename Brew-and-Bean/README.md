☕ Brew & Bean — Specialty Coffee Shop Microsite

«Specialty coffee, thoughtfully crafted.»

Brew & Bean is a modern, premium, and fully responsive specialty coffee shop microsite designed with a cinematic dark aesthetic and an editorial approach to web design.

The project focuses on creating an immersive digital experience through large-scale typography, high-quality imagery, smooth animations, responsive layouts, interactive elements, accessibility, and SEO-friendly implementation.

---


## 🌐 Live Demo

🚀 **Live Website:**  
[https://malaikariazhussainn-dev.github.io/Decodelabs-Internship/Brew-and-Bean/]

### 📌 Repository

🔗 **GitHub Repository:**  
https://github.com/malaikariazhussainn-dev/Decodelabs-Internship


🌐 Project Overview

Brew & Bean was developed as the 2nd Task of my internship at DecodeLabs, with the goal of demonstrating practical frontend development skills through a complete, polished, real-world style website.

Rather than following a conventional card-based café layout, the project uses a full-screen visual experience inspired by modern editorial and premium lifestyle websites.

Design Goals

- Premium and sophisticated visual identity
- Cinematic coffee photography
- Full-screen section layouts
- Strong typography hierarchy
- Smooth and meaningful animations
- Responsive experience across devices
- Accessible interactions
- Clean and maintainable code
- SEO-friendly structure

---

✨ Key Features

🎬 Cinematic Hero Section

- Full-screen hero experience
- Immersive coffee imagery
- Dark cinematic overlays
- Smooth image entrance animation
- Responsive image positioning
- Minimal and distraction-free composition

---

🧭 Responsive Navigation

The navigation system includes:

- Fixed navigation bar
- Smooth anchor scrolling
- Active section indicator
- Scroll-based header transformation
- Glassmorphism-style background on scroll
- Animated navigation links
- Responsive mobile navigation
- Accessible menu controls

---

☕ Signature Coffee Showcase

A dedicated section introduces Brew & Bean's signature beverages.

Featured Coffee

- Velvet Espresso
- Honey Latte
- Origin Pour Over

Each presentation includes:

- Product imagery
- Coffee description
- Flavor profile
- Roast information
- Pricing
- Interactive hover effects

---

📖 Our Philosophy

A typography-focused section communicating the brand's philosophy around coffee.

The section uses:

- Large editorial typography
- Minimal visual composition
- Supporting brand copy
- Responsive layout
- Scroll reveal animation

---

📚 Our Story

The story section introduces the Brew & Bean brand through visual storytelling.

Includes

- Full-screen photography
- Cinematic overlays
- Brand-focused typography
- Animated content reveal
- Call-to-action interaction
- Responsive design

---

📋 Interactive Menu

The menu uses an editorial list-based layout instead of traditional product cards.

Menu Items

#| Coffee| Price
01| Velvet Espresso| PKR 420
02| Honey Latte| PKR 520
03| Origin Pour Over| PKR 580
04| Cold Brew| PKR 480
05| Mocha Noir| PKR 560

Menu Interactions

- Scroll reveal animations
- Hover transitions
- Animated arrows
- Responsive layout
- Clear pricing hierarchy

---

📍 Visit Section

The Visit section provides essential café information.

Location

University Road
Peshawar, Pakistan

Opening Hours

Monday — Sunday
08:00 AM — 11:00 PM

Features

- Full-screen café photography
- Location information
- Opening hours
- Directions CTA
- Responsive information layout

---

🎨 Design System

The visual identity is built around a sophisticated coffee-inspired dark palette.

Color Palette

:root {
    --black: #090807;
    --black-soft: #0f0d0b;
    --white: #f3eee7;
    --muted: #a79d91;
    --coffee: #b8875a;
    --coffee-light: #d4b08a;
    --line: rgba(243, 238, 231, 0.16);
}

Typography

Primary Heading Font

Playfair Display

Body Font

DM Sans

The typography pairing creates a balance between:

- Editorial elegance
- Modern readability
- Premium branding
- Strong visual hierarchy

---

🛠️ Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript

CSS Techniques

- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries
- "clamp()"
- CSS Transitions
- CSS Animations
- Responsive layouts

JavaScript APIs

- DOM API
- Intersection Observer API
- Scroll API
- "matchMedia()"
- Event Listeners

Development Tools

- Git
- GitHub
- Termux
- Web Browser

---

📂 Project Structure

Brew-and-Bean/
│
├── index.html
├── README.md
│
├── CSS/
│   └── style.css
│
├── JS/
│   └── script.js
│
└── images/
    │
    ├── hero/
    │   └── coffee-hero.jpg
    │
    ├── coffee/
    │   ├── espresso.jpg
    │   ├── latte.jpg
    │   ├── pour-over.jpg
    │   ├── story.jpg
    │   └── cafe.jpg

---

🎞️ Animation & Interaction

The project uses subtle motion to improve the user experience without overwhelming the interface.

Page Loader

A branded loading screen creates a smooth transition into the website.

Hero Animation

The hero image uses a cinematic:

- Fade-in
- Scale transition

Scroll Reveal

Major content sections are revealed using the Intersection Observer API.

Menu Animation

Individual menu items appear progressively as they enter the viewport.

Image Interaction

Coffee imagery uses subtle zoom effects during interaction.

Navigation Animation

Navigation links use animated underline transitions.

Header Scroll Effect

The header changes appearance when the user scrolls:

Transparent Header
       ↓
     Scroll
       ↓
Dark + Blurred Header

Scroll Progress

A thin progress indicator at the top of the page displays the user's scroll progress.

Custom Cursor

Desktop users receive a minimal custom cursor that responds to interactive elements.

Back to Top

A smooth Back-to-Top interaction allows users to quickly return to the beginning of the website.

---

📱 Responsive Design

The website is designed to provide a consistent experience across different screen sizes.

Supported Devices

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop
- 🖥️ Large displays

Responsive Techniques

- CSS Grid
- Flexbox
- Media Queries
- "clamp()"
- "min-height: 100svh"
- Responsive typography
- Adaptive image positioning
- Mobile navigation
- Touch-friendly interactions

---

♿ Accessibility

Accessibility was considered throughout the development process.

Implemented Features

- Semantic HTML structure
- Descriptive image "alt" attributes
- Accessible navigation button
- "aria-expanded"
- Dynamic "aria-label"
- Keyboard focus indicators
- Reduced-motion support
- Responsive typography
- Improved color contrast

The project supports:

@media (prefers-reduced-motion: reduce)

to reduce animations for users who prefer less motion.

---

🔍 SEO Optimization

The website includes foundational SEO implementation.

Included

- SEO-friendly page title
- Meta description
- Keywords
- Author metadata
- Robots directive
- Theme color
- Open Graph metadata
- Twitter Card metadata
- Social sharing image
- Semantic HTML structure

Example:

<meta
    name="description"
    content="Brew & Bean — specialty coffee thoughtfully crafted. Discover exceptional coffee, slow moments, and a warm café experience."
>

---

⚡ Performance

The project uses a lightweight frontend architecture without unnecessary frameworks or dependencies.

Performance Considerations

- Vanilla JavaScript
- CSS-based animations
- Lazy loading for non-hero images
- Intersection Observer for scroll animations
- Passive scroll listeners
- Responsive image handling
- Minimal DOM manipulation
- No unnecessary frontend libraries

---

🚀 Getting Started

Clone the Repository

git clone https://github.com/malaikariazhussainn-dev/Decodelabs-Internship.git

Navigate to the Project

cd Decodelabs-Internship/Brew-and-Bean

Open the Website

Open:

index.html

in a modern web browser.

The project is a static frontend website and does not require a backend server.

---

💻 Local Development

Brew & Bean does not require:

- PHP
- MySQL
- Node.js
- npm
- Backend configuration

It can be opened directly in a browser or served using any static development server.

---

⚠️ Important Path Structure

GitHub and other hosting environments can be case-sensitive.

Make sure the following paths match the actual folder names:

CSS/style.css
JS/script.js
images/hero/coffee-hero.jpg
images/coffee/espresso.jpg
images/coffee/latte.jpg
images/coffee/pour-over.jpg
images/coffee/story.jpg
images/coffee/cafe.jpg
images/favicon/favicon.png

For example:

<link rel="stylesheet" href="CSS/style.css">

must not accidentally become:

<link rel="stylesheet" href="css/style.css">

---

🧪 Testing Checklist

Desktop

- [x] Hero section
- [x] Fixed navigation
- [x] Smooth scrolling
- [x] Active navigation state
- [x] Scroll animations
- [x] Coffee showcase
- [x] Interactive menu
- [x] Story section
- [x] Visit section
- [x] Footer
- [x] Scroll progress
- [x] Custom cursor
- [x] Back-to-top interaction

Mobile

- [x] Responsive hero
- [x] Mobile navigation
- [x] Touch-friendly interactions
- [x] Responsive typography
- [x] Responsive images
- [x] No horizontal overflow
- [x] Responsive menu
- [x] Responsive footer
- [x] Accessibility controls

---

🎯 Project Objectives

This project was developed to demonstrate practical skills in:

1. Frontend Web Development
2. Responsive Web Design
3. UI/UX Design
4. Modern CSS Layouts
5. JavaScript Interactivity
6. Animation & Micro-interactions
7. Accessibility
8. SEO Fundamentals
9. Visual Storytelling
10. Professional Project Organization
11. Git & GitHub Workflow

---

💡 Design Philosophy

Brew & Bean intentionally avoids a generic template-style design.

Instead of relying heavily on small cards and repetitive components, the website focuses on:

«Typography + Photography + Space + Motion + Interaction»

The goal was to create a digital experience that feels like a premium coffee and lifestyle brand rather than a basic café landing page.

---

👩‍💻 Developer

Malaika Riaz Hussain

BS Computer Science Student | Web Developer | AI Content Creator | Prompt Engineer

I am a Computer Science student passionate about building modern digital experiences and continuously developing my skills in Web Development, Artificial Intelligence, UI/UX, and emerging technologies.

Technical Interests

- 🌐 Frontend Web Development
- 🤖 Artificial Intelligence
- ✨ AI Content Creation
- 🧠 Prompt Engineering
- 🎨 UI/UX Design
- 💻 Software Development
- 📱 Responsive Web Design
- 🔧 Git & GitHub

Technologies & Skills

HTML5
CSS3
JavaScript
Python
Git
GitHub
Responsive Web Design
UI/UX
AI
Prompt Engineering

---

💼 Internship

DecodeLabs

Role: Frontend Web Development Intern

Project: Brew & Bean — Specialty Coffee Shop Microsite

Task: 02

This project was developed as part of my practical internship experience at DecodeLabs, focusing on applying frontend development concepts to a complete, polished web project.

---

🔗 Connect With Me

GitHub

https://github.com/malaikariazhussainn-dev

LinkedIn

[https://www.linkedin.com/in/malaika-riaz-hussain1]

Email; 
[malaikariazhussainn@gmail.com]

---

📌 Project Details

Category| Details
Project Name| Brew & Bean
Project Type| Specialty Coffee Shop Microsite
Internship| DecodeLabs
Task| 02
Year| 2026
Category| Frontend Web Development
Technologies| HTML5, CSS3, JavaScript
Design Style| Cinematic / Editorial / Premium
Responsive| Yes
Accessibility| Yes
SEO| Yes
Backend| None
Status| Completed

---

📜 License

This project was created as part of my internship and personal development portfolio.

The project may be viewed for educational and portfolio purposes.

Please do not claim the complete project as your own work.

---

🙌 Acknowledgement

Special thanks to DecodeLabs for providing the opportunity to work on practical frontend development tasks and strengthen my skills through real-world project experience.

---

☕ Brew & Bean

«Specialty coffee, thoughtfully crafted.»

Designed with intention.
Built with code.
Crafted for the web.
