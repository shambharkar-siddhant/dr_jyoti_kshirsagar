# Dental Clinic Website

A mobile-first, casual-friendly website for a single-doctor dental clinic built with React and TypeScript. This is a static website that uses WhatsApp for booking appointments.

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5000 (or the port specified in your `PORT` environment variable)

The dev server runs the React frontend with hot module replacement (HMR).

**Note:** The development server includes an Express backend for local development, but the production build is a static site with no backend required.

## Available Scripts

- `npm run dev` - Start the development server (includes Express server for local dev)
- `npm run build` - Build the application for production (static site)
- `npm run build:vercel` - Build for Vercel deployment (static site only)
- `npm run start` - Start the production server (requires building first)
- `npm run check` - Run TypeScript type checking

## Project Structure

```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── ...
│   └── index.html
├── server/          # Express backend (for local development only)
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes (currently unused)
│   └── storage.ts   # Data storage layer (currently unused)
├── shared/          # Shared code
│   └── schema.ts    # Database schema (currently unused)
└── attached_assets/ # Static assets (images, etc.)
```

## Development

- The frontend is served by Vite in development mode with hot module replacement
- The Express backend is only used for local development
- In production, this is a completely static site with no backend required

## Production Build

To build for production:

```bash
npm run build:vercel
```

This builds a static site that can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

The build process:
1. Builds the React frontend using Vite
2. Outputs static files to the `dist/public/` directory

## Deployment to Vercel

This site is ready to deploy to Vercel as a static site:

1. **Push your code to GitHub**

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect the settings from `vercel.json`

3. **Deploy**:
   - Vercel will automatically build and deploy your site
   - No environment variables needed!
   - No database setup required!

The `vercel.json` file is already configured for static site deployment.

## Troubleshooting

### Port Already in Use

If port 5000 is already in use:
1. Set the `PORT` environment variable: `PORT=3000 npm run dev`
2. Or kill the process using port 5000

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Radix UI
- **Build Tools**: Vite
- **Routing**: Wouter (frontend)
- **Booking**: WhatsApp integration (no backend required)

