# Violet's Frenchies

Ethically bred, healthy, and happy French Bulldog puppies.

## Getting Started

This is a Next.js application built with React, Tailwind CSS, ShadCN UI, and Genkit for AI features.

### Development

To start the development server:

```bash
npm run dev
```

### Git & Deployment

#### Push to GitHub via SSH

1. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:USERNAME/REPO.git
   ```

2. **Handle "non-fast-forward" errors:**
   If your push is rejected, use this command to pull the remote changes first:
   ```bash
   git pull origin main --allow-unrelated-histories
   ```

3. **Handle "unmerged files" or "conflicts":**
   If `git pull` fails with a conflict:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   git push -u origin main
   ```

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + ShadCN UI
- **AI:** Genkit (Google Gemini)
- **Icons:** Lucide React

## Project Structure
- `src/ai`: Genkit flows and configuration
- `src/app`: Next.js pages and layouts
- `src/components`: Reusable UI components (ShadCN)
- `src/lib`: Utility functions and placeholder data
