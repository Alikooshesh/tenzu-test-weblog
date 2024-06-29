# Simple Blog with Next.js

A simple blog web application built using Next.js, featuring a home page listing blog posts and individual post pages.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Testing](#testing)
- [Linting](#linting)
- [Folder Structure](#folder-structure)

## Introduction

This project is a basic blog application developed with Next.js. It includes a home page that displays a list of blog posts fetched from a mock API, and individual pages for each blog post.

## Installation

To get started, clone the repository and install the dependencies:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```
   yarn
   ```

## Usage

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

This project uses environment variables to configure the base API URL. Make sure to create a `.env` file in the root of your project based on the provided `.env.example`:

```
NEXT_PUBLIC_BASE_API_URL = "https://jsonplaceholder.typicode.com"
```

Ensure you replace `"https://jsonplaceholder.typicode.com"` with your actual API base URL.

## Scripts

- `npm run dev`: Runs the Next.js development server.
- `npm run build`: Builds the production-ready application.
- `npm run build:test`: Runs tests and then builds the application.
- `npm start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint for code linting.
- `npm test`: Runs Jest for testing.
- `npm run cypress:open`: Opens Cypress for end-to-end testing.

## Testing

This project uses Jest for unit testing. You can run the tests using:

```
npm test
```

This project uses Cypress for e2e testing. You can run the tests using:

```
npm run cypress:open 
```

## Linting

ESLint is used for linting. You can run linting using:

```
npm run lint
```

## Folder Structure

The project structure is organized as follows:

- `___tests___/`: Jest unit tests
- `cypress/`: Cypress e2e tests
- `public/`: Static assets
- `src/`: Next.js application source
  - `app/`: Routing and pages
    - `[post]/`: Blog post page
    - `styles/`: Styles and sass files
    - `facicon.ico/`: Project fav icon
    - `global.scss/`: Global styles
    - `layout.tsx/`: Main project layout
    - `page.tsx/`: Blog home page
  - `components/`: React components
    - `homePage/`: Components of home page
    - `layoutController/`: Layout creator and theme controller
    - `reduxWrapper/`: Redux and redux-persist provider
  - `interface/`: Data interfaces
  - `redux/`: Redux main folder
  - `services/`: Includes services and fetches for each page
  - `utils/`: Global functions and utils
- `.env`: Environment variables
- `.env.example`: Example environment variables
- `jest.config.ts`: Jest configuration
- `next.config.mjs`: Next.js configuration
- `package.json`: NPM package configuration
- `postcss.config.mjs`: Postcss configuration (needed for tailwind)
- `tailwind.config.ts`: Tailwind configuration
- `tsconfig.json`: Typescript configuration
