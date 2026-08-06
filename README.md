# 🚀 Ashish Kumar — Personal Portfolio Website

A modern, responsive, and feature-rich personal developer portfolio built with **HTML5**, **CSS3**, **JavaScript (ES6+)**, **Bootstrap 5**, and **EmailJS**. 

This portfolio showcases my web development and software engineering projects, technical skill set, educational background, personal journey, and direct contact options.

---

## ✨ Features

- **⚡ Dynamic Typing Animation**: Interactive header showcasing developer roles dynamically.
- **✨ Scroll Animations (AOS)**: Smooth entrance animations (`fade-up`, `fade-left`, `fade-right`, `zoom-in`) triggered on scrolling.
- **🎨 Glassmorphism & Modern Dark Theme**: Designed with custom CSS variables, glassmorphism cards (`backdrop-filter`), gradient borders, and floating avatar animations.
- **📊 Interactive Skill Bars**: Visual skill proficiency bars with smooth animated fill triggers on scroll.
- **📐 Responsive Proficiency Grid**: Dual-column responsive layout preventing label collisions or text overlaps across all modes and viewports.
- **📂 Filterable Project Showcase**: Category filtering (All, Full Stack, Frontend, Games) with direct links to GitHub repositories and hover animations.
- **✉️ Real-Time EmailJS Integration**: Working contact form with input validation, submit loading spinners, button state management, and toast notifications.
- **🎓 Timeline & Journey Section**: Clean vertical timeline highlighting academic milestones at Poornima University and self-taught software accomplishments.
- **🔝 Scroll-to-Top Button & Smooth Navigation**: Bootstrap ScrollSpy integration for active navbar link highlighting and smooth scroll navigation.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: HTML5, CSS3 (Custom Design System, Glassmorphism, CSS Variables), JavaScript (ES6+)
- **UI & Animations**: Bootstrap v5.3.3, AOS (Animate On Scroll v2.3.1)
- **Icons & Typography**: Bootstrap Icons v1.11.3, Google Fonts (*Poppins*)
- **Email Backend Service**: EmailJS SDK v3

---

## 📁 Project Structure

```
portofolio/
├── index.html          # Main HTML structure and semantic sections
├── style.css           # Custom styles, responsive grid fixes, animations, & design tokens
├── script.js          # Typing effect, scroll triggers, project filtering, & EmailJS handler
├── images/             # Project screenshots, resume PDF, profile photos, and icons
└── README.md           # Documentation file
```

---

## 🚀 Quick Start & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ashish-Malviya710/My-portfolio.git
   cd My-portfolio
   ```

2. **Open locally**:
   - Double click `index.html` or open it with Live Server in VS Code.

3. **Deploying**:
   - Easily deploy to **GitHub Pages**, **Vercel**, or **Netlify** by pointing to the root directory.

---

## 📧 EmailJS Setup (Optional customization)

If you're using this template and want to configure your own EmailJS account:
1. Register at [EmailJS](https://www.emailjs.com/).
2. Replace the **Public Key** in `index.html`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
3. Update the **Service ID** and **Template ID** in `script.js`:
   ```javascript
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
   ```

---

## 👨‍💻 Connect with Me

- **Email**: [ashishmalvi0116@gmail.com](mailto:ashishmalvi0116@gmail.com)
- **Phone**: [+91 70144 61430](tel:+917014461430)
- **LinkedIn**: [Ashish Kumar](https://www.linkedin.com/in/ashish-kumar-019649351)
- **GitHub**: [@Ashish-Malviya710](https://github.com/Ashish-Malviya710)
- **Instagram**: [@ashish_lohar098](https://www.instagram.com/ashish_lohar098)
- **Education**: B.Tech CSE (2023–2027), Poornima University, Jaipur
