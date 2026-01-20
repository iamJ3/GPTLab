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
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── routes/        # Route configuration
│   │   └── assets/        # Static assets
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend server
│   └── server.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd GPTLab
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies** (if applicable)
   ```bash
   cd ../server
   npm install
   ```

### Development

#### Start the frontend development server
```bash
cd client
npm run dev
```
The app will be available at `http://localhost:5173`

#### Start the backend server
```bash
cd server
npm start
```

### Building for Production

#### Build the frontend
```bash
cd client
npm run build
npm run preview
```

## 📦 Tech Stack

### Frontend
- **React** (v19.1.1) - UI library
- **Vite** (v7.1.2) - Build tool
- **React Router** (v7.8.2) - Client-side routing
## 📸 Screenshots

- **Dashboard** - Overview of all AI tools
   ![Dashboard](https://via.placeholder.com/800x600?text=Dashboard)

- **Write Article** - Article generation interface
   ![Write Article](https://via.placeholder.com/800x600?text=Write+Article)

- **Generate Images** - Image creation tool
   ![Generate Images](https://via.placeholder.com/800x600?text=Generate+Images)

- **Remove Background** - Background removal in action
   ![Remove Background](https://via.placeholder.com/800x600?text=Remove+Background)

- **Community Reviews** - User submissions and feedback
   ![Community Reviews](https://via.placeholder.com/800x600?text=Community+Reviews)


[Add screenshots of key features here]

- **Dashboard** - Overview of all AI tools
- **Write Article** - Article generation interface
- **Generate Images** - Image creation tool
- **Remove Background** - Background removal in action
- **Community Reviews** - User submissions and feedback

- **Tailwind CSS** (v4.1.12) - Styling
- **Clerk** (v5.43.1) - Authentication
- **React Markdown** (v10.1.0) - Markdown rendering
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Vite React Plugin** - React HMR support

## 📝 Available Scripts

### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

This project uses **Clerk** for authentication. Make sure to set up your Clerk credentials in your environment variables.

## 📖 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Home/landing page |
| `/ai` | Layout | AI tools layout (dashboard) |
| `/ai/write-article` | WriteArticle | Article writing tool |
| `/ai/blog-title` | BlogTitle | Blog title generator |
| `/ai/generate-images` | GenerateImages | Image generation tool |
| `/ai/remove-bg` | RemoveBg | Background removal tool |
| `/ai/remove-object` | RemoveObject | Object removal tool |
| `/ai/review-community` | Community | Community review section |
| `/ai/review-resume` | ResumeReview | Resume review tool |

## 🎨 Components

- **Navbar** - Navigation header
- **Sidebar** - Side navigation for AI tools
- **Hero** - Hero section on landing page
- **AiTool** - AI tool card component
- **CreationItem** - Item component for creations
- **Footer** - Footer component
- **Plans** - Pricing/plans section
- **Testimonial** - Testimonials section

## 🛠️ Configuration Files

- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration
- `tailwind.config.js` - Tailwind CSS configuration (if present)

## 📦 Dependencies Management

All dependencies are locked in `package.json`. To update:

```bash
npm update
```

To add a new dependency:

```bash
npm install <package-name>
```

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test your changes locally
4. Commit with clear messages
5. Push and create a pull request

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Support

For issues and questions, please create an issue in the repository or contact the development team.

---

**Status**: Currently in development (WIP)
**Last Updated**: January 2026
