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

#### Push to GitHub

1. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:josephburris9999-lang/violetsfrenchies.git
   ```

2. **Handle "non-fast-forward" errors:**
   If your push is rejected, use this command to pull the remote changes first:
   ```bash
   git pull origin main --allow-unrelated-histories
   ```
   *Note: If a text editor opens for a merge message, simply save and exit (usually `Ctrl+X` then `Y` then `Enter`, or `:wq` in Vim).*

3. **Push again:**
   ```bash
   git push -u origin main
   ```

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + ShadCN UI
- **AI:** Genkit (Google Gemini)
- **Icons:** Lucide React
