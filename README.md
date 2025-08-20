# Nandini's Portfolio Website

A modern, responsive portfolio website built with React.js and Bootstrap, featuring smooth animations, dark/light mode, and interactive components.

## https://nandini-shinde-portfolio.vercel.app

## 🚀 Features

### Core Features
- Responsive design that works on all devices
- Dark/Light mode toggle with persistent theme preference
- Smooth scrolling and animations using Framer Motion
- Typewriter effect in the navbar and hero section
- Interactive project showcase
- Contact form with EmailJS integration
- Social media integration
- Decorative elements and custom styling

### Sections
1. **Navbar**
   - Dynamic typewriter effect with brand name
   - Responsive navigation menu
   - Theme toggle button
   - Social media links

2. **Hero Section**
   - Animated introduction
   - Typewriter effect for role description
   - Call-to-action buttons
   - Animated illustration

3. **About Section**
   - Professional summary
   - Animated tech stack icons
   - Skills showcase

4. **Projects Section**
   - Project cards with images
   - Technology stack indicators
   - Live demo and GitHub links
   - Project descriptions and dates

5. **Contact Section**
   - EmailJS integration for form submission
   - Social media links
   - Professional profile picture
   - Contact information

6. **Footer**
   - Copyright information
   - Social media links
   - Back to top button
   - Dynamic tagline based on theme

## 🎨 Technologies Used

### Frontend
- React.js
- React Bootstrap
- Framer Motion (animations)
- React Icons
- React Simple Typewriter
- EmailJS (contact form)

### Styling
- Bootstrap 5
- Custom CSS
- Google Fonts (Inter, Dancing Script)

### Development Tools
- Create React App
- npm
- Git
- Vercel (deployment)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:

REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key


## Available Scripts

- `npm i` - Installs the necessary dependencies
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Customization

### Theme Colors
The website uses CSS variables for theming. You can customize the colors in `src/App.css`:
- Light theme variables
- Dark theme variables
- Primary and secondary colors

### Content
- Update project information in `src/components/Projects.jsx`
- Modify personal information in respective component files
- Replace images in the `public/assets/images` directory

## Deployment
The website is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!


