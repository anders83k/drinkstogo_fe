# DrinksToGo - Cocktail Recipe Frontend

![DrinksToGo Logo](https://via.placeholder.com/150)

DrinksToGo is a Next.js frontend application for browsing and managing cocktail recipes. This application requires a compatible backend service and database to function properly.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun
- Running backend API service
- Database connection

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anders83k/drinkstogo_fe.git
   cd drinkstogo



Install dependencies:
bash
Copy

npm install
# or
yarn install
# or
pnpm install
# or
bun install


Run the development server:
bash
Copy

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


📂 Project Structure
The project follows a standard Next.js 13+ structure with the following key components:
Copy

.
├── app/                # App Router directory
│   ├── page.js         # Main page with cocktail list
│   └── layout.js       # Root layout component
├── components/         # Reusable components
│   └── drink-card.js   # Cocktail card component
├── public/             # Static assets
│   ├── images/         # Cocktail images
│   │   ├── Chrocodile.png
│   │   ├── Cosmopolitan.png
│   │   ├── Dry-Martini.png
│   │   ├── Margarita.png
│   │   ├── Vodka-Martini.png
│   │   └── Whiskey-Sour.png
│   └── ...             # Other static assets
├── package.json        # Project dependencies
├── next.config.mjs     # Next.js configuration
├── eslint.config.mjs   # ESLint configuration
├── jsconfig.json       # JavaScript configuration
└── README.md           # Project documentation

✨ Features

Cocktail Browser: Explore a curated collection of cocktail recipes
Search Functionality: Find drinks by name, ingredients, or categories
Responsive Design: Works on desktop, tablet, and mobile devices
Interactive Cards: Detailed view of each cocktail with ingredients and instructions
Performance Optimized: Fast loading with Next.js and optimized images
🛠 Built With

Next.js - React framework for production
React - JavaScript library for building UIs

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
