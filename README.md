# React Development Environment

A modern React development environment built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Package Manager:** npm
- **Linting:** ESLint

## 🏗️ Project Structure

```
src/
├── app/                  # App Router pages and layouts
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
└── lib/                 # Utility functions
    └── utils.ts         # Component utility functions
```

## 🛠️ Available shadcn/ui Components

The project comes with these pre-installed components:

- Button (`@/components/ui/button`)
- Card (`@/components/ui/card`)
- Input (`@/components/ui/input`)
- Label (`@/components/ui/label`)
- Textarea (`@/components/ui/textarea`)

To add more components, use:
```bash
npx shadcn@latest add [component-name]
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the demo

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Leverage shadcn/ui components for consistent design
- Follow responsive design principles with Tailwind's breakpoints
- Use the dark mode utilities for theme support

## 📁 Adding New Components

1. **shadcn/ui components:**
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Custom components:**
   Create in `src/components/` and use the `@/` import alias

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
