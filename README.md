# React Feature-Driven Movie App

A modern React application for browsing movies, built with a feature-driven architecture and styled-components.

## Features

- Browse popular movies
- Search movies by keyword
- View movie details
- View similar movies
- Responsive design
- Loading states with skeleton UI
- Type-safe with TypeScript

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key (https://developer.themoviedb.org/docs/getting-started)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-feature-driven.git
cd react-feature-driven
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── App.tsx               # Root component
├── app                   # App layer
│   └── pages             # All pages inside application
│
├── features              # Feature modules
│   ├── movies            # Movie listing and search
│   │   ├── containers
│   │   ├── components
│   │   ├── hooks
│   │   ├── services
│   │   └── types
│   │
│   ├── movie-details     # Movie detail view
│   │   ├── containers
│   │   ├── components
│   │   ├── hooks
│   │   ├── services
│   │   └── types
│   │
│   └── similar-movies    # Similar movies
│       ├── containers
│       ├── components
│       ├── hooks
│       ├── services
│       └── types
│
└──shared                 # Shared components and utilities
   ├── api                # API clients
   ├── components         # Reusable UI components
   ├── styles             # Theme and global styles
   ├── types              # TypeScript type definitions
   └── hooks              # Custom hooks
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## Tech Stack

- React
- TypeScript
- Vite
- styled-components
- React Query
- React Router
- TMDB API (https://developer.themoviedb.org/docs/getting-started)
