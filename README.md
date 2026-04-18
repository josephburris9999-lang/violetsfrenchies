# Violet's Frenchies

An ethical French Bulldog breeding application built with Next.js, React, Tailwind CSS, and Genkit AI.

## Features
- **Puppy Gallery**: View available and past litters.
- **AI Name Generator**: Get creative name suggestions using Gemini AI.
- **Adoption Guide**: Information on health, care, and the adoption process.
- **Contact System**: Inquire about puppies or join the waitlist.

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Setup Environment**:
   Create a `.env` file and add your `GOOGLE_GENAI_API_KEY`.
3. **Run the App**:
   ```bash
   npm run dev
   ```

## Git Setup & Troubleshooting

### Initial Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:josephburris9999-lang/violetsfrenchies.git
git push -u origin main
```

### Fixing "Rejected" or "Non-fast-forward" errors
If your push is rejected, run:
```bash
git pull origin main --allow-unrelated-histories
```

### Fixing "Unmerged files" or "Unresolved conflict"
If `git pull` fails with an unresolved conflict:
1. **Stage all files:** `git add .`
2. **Commit the merge:** `git commit -m "Resolve merge conflicts"`
3. **Push again:** `git push -u origin main`

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **AI**: Genkit + Google Gemini
- **Icons**: Lucide React
