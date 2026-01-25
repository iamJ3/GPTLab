# GPTLab

A comprehensive AI-powered toolkit designed to help you with content creation, image manipulation, and productivity tasks. GPTLab combines the power of AI with an intuitive user interface to make creative and professional work easier and faster.

## 🎯 Features

- **📝 Write Article** - Generate high-quality articles with AI assistance
- **🏷️ Blog Title Generator** - Create compelling blog titles automatically
- **🖼️ Generate Images** - Create images using AI image generation
- **🎨 Remove Background** - Remove backgrounds from images effortlessly
- **✂️ Remove Objects** - Remove unwanted objects from photos
- **👥 Community Reviews** - Share and review content with the community
- **📄 Resume Review** - Get AI-powered feedback on your resume
- **📊 Dashboard** - Centralized hub for all AI tools

## 🏗️ Project Structure

```
GPTLab/
├── client/                          # React + Vite frontend
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── AiTool.jsx
│   │   │   ├── CreationItem.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Plans.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Testimonial.jsx
│   │   ├── pages/                  # Application pages
│   │   │   ├── BlogTitle.jsx
│   │   │   ├── Community.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── RemoveBg.jsx
│   │   │   ├── RemoveObj.jsx
│   │   │   ├── ResumeReview.jsx
│   │   │   └── WriteArticle.jsx
│   │   ├── routes/                 # Route configuration
│   │   │   └── AppRoutes.jsx
│   │   ├── assets/                 # Static assets
│   │   │   └── assets.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── server/                          # Backend server
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── ai.controller.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── routes/
│   │   └── ai.routes.js
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GPTLab
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Configuration

Create a `.env` file in the `client` directory with:
```env
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```

Create a `.env` file in the `server` directory with:
```env
PORT=5000
DATABASE_URL=your_database_url
CLERK_API_KEY=your_clerk_api_key
```

### Development

#### Start the frontend development server
```bash
cd client
npm run dev
```
The app will be available at `http://localhost:5173`

#### Start the backend server (in a new terminal)
```bash
cd server
npm start
```
The backend will run on `http://localhost:5000`

### Building for Production

#### Build the frontend
```bash
cd client
npm run build
```

The compiled files will be in the `client/dist` directory.

## 📦 Tech Stack

### Frontend
- **React** (v19.1.1) - UI library
- **Vite** (v7.1.2) - Build tool and dev server
- **React Router** (v7.8.2) - Client-side routing
- **Tailwind CSS** (v4.1.12) - Utility-first CSS framework
- **Clerk** (v5.43.1) - Authentication and user management
- **React Markdown** (v10.1.0) - Markdown rendering
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database (if applicable)
- **Clerk SDK** - Authentication

### Development Tools
- **ESLint** - Code linting
- **Vite React Plugin** - React HMR support

## 📝 Available Scripts

### Frontend (client/)
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

### Backend (server/)
```bash
npm start          # Start backend server
npm run dev        # Start with nodemon (if configured)
```

## 🔐 Authentication

This project uses **Clerk** for authentication and user management. 

**Setup Instructions:**
1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key to the frontend `.env`
4. Copy your API key to the backend `.env`

## 📖 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Home/landing page with features overview |
| `/dashboard` | Dashboard | Main dashboard with all AI tools |
| `/ai/write-article` | WriteArticle | AI-powered article generation |
| `/ai/blog-title` | BlogTitle | Blog title generator |
| `/ai/generate-images` | GenerateImages | Image generation with AI |
| `/ai/remove-bg` | RemoveBg | Background removal tool |
| `/ai/remove-object` | RemoveObj | Object removal from images |
| `/ai/review-resume` | ResumeReview | Resume analysis and feedback |
| `/community` | Community | Community submissions and reviews |

## 🎨 Components

### Layout Components
- **Navbar** - Navigation header with logo and user menu
- **Sidebar** - Collapsible side navigation for AI tools
- **Footer** - Footer with links and information

### Feature Components
- **Hero** - Hero section on landing page
- **Plans** - Pricing/subscription plans section
- **Testimonial** - User testimonials showcase
- **AiTool** - AI tool card component
- **CreationItem** - Item component for user creations

## 🛠️ Configuration Files

- `vite.config.js` - Vite bundler configuration
- `eslint.config.js` - ESLint rules and settings
- `tailwind.config.js` - Tailwind CSS customization (if present)

## 📦 Dependency Management

### Update Dependencies
```bash
npm update
```

### Add New Dependency
```bash
npm install <package-name>
```

### Check for Vulnerabilities
```bash
npm audit
npm audit fix
```

## 🚢 Deployment

### Frontend (Vercel, Netlify, etc.)
```bash
npm run build
# Deploy the dist folder
```

### Backend (Heroku, Railway, etc.)
```bash
# Push to your hosting platform
npm start
```

## 🤝 Contributing

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "Add feature description"
   ```

3. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request with a description of your changes

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support & Contact

For issues, questions, or feature requests:
- Create an issue in the repository
- Contact the development team
- Check the documentation in the wiki

## 🗺️ Roadmap

- [ ] Mobile app version
- [ ] Advanced image editing features
- [ ] AI model customization
- [ ] Batch processing capabilities
- [ ] API for third-party integrations
- [ ] Team collaboration features

## 📊 Project Status

- **Status**: Under Active Development
- **Version**: 1.0.0-beta
- **Last Updated**: January 2026
- **Maintainers**: Development Team

---

**Made with ❤️ by the GPTLab Team**
