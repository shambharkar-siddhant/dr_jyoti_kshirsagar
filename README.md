# React + TypeScript + Vite Project

A modern React application built with TypeScript and Vite, featuring a complete UI toolkit setup.

## Tech Stack

### Core Technologies
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router DOM** - Client-side routing

### UI & Components
- **shadcn/ui** - Reusable component library (Radix UI primitives)
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Data & State
- **TanStack Query** - Server state management
- **Next Themes** - Dark/light mode support

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Other components
├── lib/              # Utility functions
│   └── utils.ts      # Helper utilities (cn function)
├── hooks/            # Custom React hooks
└── ...
```

## Path Aliases

The project uses `@/` as an alias for the `src/` directory:

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

## Adding shadcn/ui Components

This project is configured for shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

## Features

- ✅ TypeScript configured with strict mode
- ✅ Tailwind CSS with custom theme variables
- ✅ Dark mode support via next-themes
- ✅ React Router for navigation
- ✅ TanStack Query for server state
- ✅ Toast notifications ready
- ✅ Form validation setup (React Hook Form + Zod)
- ✅ Path aliases configured
- ✅ ESLint configured

## Next Steps

1. Add your routes in `src/App.tsx`
2. Create your components in `src/components/`
3. Add shadcn/ui components as needed
4. Set up your API integration with TanStack Query
5. Create forms with React Hook Form and Zod validation

## License

MIT
