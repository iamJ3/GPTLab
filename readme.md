# GPTLab

AI-powered content creation platform. Generate articles, blog titles, images, and get resume feedback.

## Images
<img width="1920" height="877" alt="image" src="https://github.com/user-attachments/assets/42977859-ca1c-4b03-bb52-339df82b8091" />
<img width="1920" height="877" alt="image" src="https://github.com/user-attachments/assets/429d3028-ad24-40c6-a5c3-9f094ab84712" />
<img width="1920" height="877" alt="image" src="https://github.com/user-attachments/assets/9d326e73-0dbf-4e2d-80ae-fcf9d920c719" />
<img width="1920" height="877" alt="image" src="https://github.com/user-attachments/assets/8b82ed93-0989-4546-a424-dfd313310cac" />
<img width="1920" height="877" alt="image" src="https://github.com/user-attachments/assets/1880d647-eeeb-4847-9ad2-d04f80cb654f" />





## Quick Start

### Prerequisites
- Node.js v18+
- PostgreSQL
- API keys: Clerk, Gemini, Cloudinary, Clipdrop

### Setup

**1. Backend**
```bash
cd server
npm install
cp .env.example .env
```

Edit `.env` with your keys:
```env
PORT=8000
DATABASE_URL=postgresql://user:pass@localhost/gptlab
CLERK_API_KEY=your_key
GEMINI_API_KEY=your_key
CLIPDROP_API_KEY=your_key
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
FRONTEND_URL=http://localhost:5173
```

Then start:
```bash
npm start
```

**2. Frontend** (new terminal)
```bash
cd client
npm install
cp .env.example .env.local
```

Edit `.env.local`:
```env
VITE_API_URL=http://localhost:8000
VITE_CLERK_PUBLISHABLE_KEY=your_key
```

Then start:
```bash
npm run dev
```

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Clerk
- Backend: Node.js, Express, PostgreSQL
- AI: Google Gemini, Cloudinary

## API Endpoints

- `POST /api/ai/generate-article` - Generate article
- `POST /api/ai/generate-blog-title` - Generate blog titles
- `POST /api/ai/generate-image` - Generate image (Premium)
- `POST /api/ai/remove-background` - Remove background (Premium)
- `POST /api/ai/remove-object` - Remove object (Premium)
- `POST /api/ai/resume-review` - Review resume (Premium)

## Features

- Article & blog title generation with Gemini API
- Image generation and manipulation with Cloudinary
- AI-powered resume analysis
- Free tier (10 calls/month) and Premium tier
- Clerk authentication

## Deployment

**Frontend:** Vercel  
**Backend:** Render or Railway  
**Database:** Neon PostgreSQL

