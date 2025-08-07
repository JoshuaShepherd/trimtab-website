# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Next.js project built with:
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components
- App Router for routing

## Component Guidelines

- Use shadcn/ui components from `@/components/ui` whenever possible
- Follow Tailwind CSS utility-first approach
- Use TypeScript with proper type definitions
- Implement responsive designs with Tailwind's responsive utilities
- Use the `@/` import alias for internal modules

## Available shadcn/ui Components

- Button (`@/components/ui/button`)
- Card (`@/components/ui/card`)
- Input (`@/components/ui/input`)
- Label (`@/components/ui/label`)
- Textarea (`@/components/ui/textarea`)

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets

## Best Practices

- Use server components by default, add 'use client' only when needed
- Implement proper error boundaries and loading states
- Follow Next.js 15 best practices for performance
- Use semantic HTML and proper accessibility attributes
