# Abdullah Aal Amin — Portfolio

Full Stack Laravel Developer portfolio showcasing 8+ years of experience building scalable web applications, enterprise ERPs, and AI-powered systems.

## 🌐 Live Demo

[View Portfolio](https://yourusername.github.io/Portfolio/) (Replace with your actual GitHub Pages URL)

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styles with proper formatting
├── js/
│   └── script.js       # All JavaScript functionality
├── assets/             # Future assets (images, fonts, etc.)
├── plans/              # Architecture and planning documents
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with dark theme
- **Custom Animations**:
  - Custom cursor with smooth following effect
  - Canvas particle background with connecting lines
  - Typewriter effect for job titles
  - Counter animations for statistics
  - Scroll reveal animations
  - 3D tilt effects on cards
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Functional Contact Form**: Integrated with Formspree for email submissions
- **Smooth Navigation**: Smooth scrolling between sections
- **Performance Optimized**: Lightweight and fast loading

## 🚀 Quick Start

### Prerequisites

- A GitHub account
- A Formspree account (free tier available)

### Local Development

1. **Clone or download this repository**

2. **Open `index.html` in your browser**

   Simply double-click `index.html` or drag it into your browser to view the portfolio locally.

3. **Optional: Start a local server**

   For a better development experience, you can use a simple HTTP server:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (with http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

   Then navigate to `http://localhost:8000` in your browser.

## 📧 Setting Up the Contact Form

The contact form uses **Formspree** to send emails directly to your Gmail without needing a backend server.

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### Step 2: Get Your Form ID

After creating a form, you'll get a form endpoint URL like:
```
https://formspree.io/f/your-form-id
```

Copy the `your-form-id` part.

### Step 3: Update the Contact Form

Open `index.html` and find the contact form section (around line 358). Replace `YOUR_FORM_ID` with your actual Formspree form ID:

```html
<form 
  id="contact-form"
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
>
```

### Step 4: Configure Formspree Settings

In your Formspree dashboard:

1. Go to your form settings
2. Set the email address where you want to receive submissions (e.g., `abd.aalamin@gmail.com`)
3. Configure any additional settings as needed (redirects, spam filters, etc.)

### Form Features

- ✅ Form validation (required fields)
- ✅ Loading state during submission
- ✅ Success message on successful submission
- ✅ Error handling with retry option
- ✅ Automatic form reset after success

## 🌍 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., `Portfolio`)
4. Make it public (recommended for portfolios)
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. On your repository page, click "uploading an existing file"
2. Drag and drop all files and folders:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `assets/` folder (if you have any)
3. Add a commit message like "Initial commit"
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Source", select the `main` branch
5. Click "Save"

### Step 4: Access Your Portfolio

After a few minutes, your portfolio will be live at:
```
https://yourusername.github.io/Portfolio/
```

## 🎨 Customization

### Updating Personal Information

Edit the following in `index.html`:

- **Name**: Update the `<title>` tag and any text references
- **Email**: Update the `mailto:` link and contact form email
- **Phone**: Update the phone number
- **Location**: Update the address
- **Social Links**: Update LinkedIn and other social media URLs

### Modifying Colors

Edit CSS variables in `css/styles.css` (line 12-18):

```css
:root {
  --bg: #080a0b;        /* Background color */
  --sur: #101315;       /* Surface color */
  --ac: #c8f56a;        /* Accent color */
  --tx: #eceae3;        /* Text color */
  /* ... and more */
}
```

### Adding/Removing Projects

Find the projects section in `index.html` (around line 305) and add or remove project cards following the existing structure.

### Updating Experience

Find the experience section in `index.html` (around line 255) and update your work history.

### Modifying Skills

Find the skills section in `index.html` (around line 323) and update your technical skills.

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript (ES6+)**: Interactive features and animations
- **Formspree**: Contact form handling
- **Google Fonts**: DM Serif Display, DM Mono, Plus Jakarta Sans

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 🖥️ Desktop (1200px+)
- 💻 Laptop (992px - 1199px)
- 📱 Tablet (768px - 991px)
- 📱 Mobile (< 768px)

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 License

This portfolio is open source and available for personal and commercial use.

## 👤 Author

**Abdullah Aal Amin**
- Email: abd.aalamin@gmail.com
- LinkedIn: [linkedin.com/in/abdullah-aal-amin](https://linkedin.com/in/abdullah-aal-amin)
- Location: Dhaka, Bangladesh

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and use it as a template for your own portfolio!

## 📞 Support

If you have any questions or need help setting up your portfolio, feel free to:

1. Open an issue on GitHub
2. Send an email to abd.aalamin@gmail.com
3. Reach out on LinkedIn

---

Made with ❤️ by Abdullah Aal Amin
