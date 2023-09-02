# Pixelias Landing Page

In this repository, you'll find the codebase for our agency's Landing Page, which you can access [here](https://pixelias.io/). We've made this repository public to demonstrate the high quality of our agency's code and to showcase the technology stack we employ.

This project is built with [Next.js](https://nextjs.org/) using the [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) template. It leverages TailwindCSS for styling, Jest and React Testing Library for testing purposes, and [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to efficiently optimize and load Archivo, a customized Google Font.

## Getting Started

First, install the dependencies:

```bash
npm ci
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

To begin contributing, simply edit the `pages/index.tsx` file. The page will automatically update as you make changes.

### Color Scheme Additions

If you'd like to introduce a new color to our color scheme, please add it to the `tailwind.config.js` file.

### Commit Messages

We follow a semantic commit message [convention](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716). In the future, we may enforce this using a tool like `semantic-release`.

### Continuous Deployment

We have continuous deployment in place, which means that any commits pushed to the `main` branch will automatically be reflected on the production website.
