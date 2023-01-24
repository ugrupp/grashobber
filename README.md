# grashobber Website 🌱

**Website for grashobber GmbH & Co. KG. https://grashobber.de**

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e506b0b-b6b3-41f1-a94f-fe205bf442c2/deploy-status)](https://app.netlify.com/sites/grashobber/deploys)

This website is based on [Hugo](https://gohugo.io/) as a static site generator and [Vite](https://vitejs.dev/) as the build tool. Originally it was based on [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) and was a heavily modified fork of [victor-hugo](https://github.com/netlify/victor-hugo).

## Usage

### Prerequisites

You need to have [Node](https://nodejs.org/en/download/) 16 and [npm](https://www.npmjs.com/get-npm) installed in order to build this site.

Next step, clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary.

### Development

While developing your website, use:

```bash
npm run dev
```

A new browser should pop up to preview the site.

### Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

### Deployment

Pushes to the `staging` branch are automatically deployed to [staging--grashobber.netlify.app](https://staging--grashobber.netlify.app/). Pushed to `master` will update the live site.

## Environment variables

To separate the development and production *- aka build -* stages, all gulp tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

All tasks starting with *build* set the environment variable to `production` - the other will set it to `development`.

## SVG Prepare Task

Prepares SVGs for use within SVG sprite:

```
svgo ./logo-farbig.svg -o ../../grashobber/src/images/svg/logo-farbig.svg --config '{ "plugins": [ { "inlineStyles": { "onlyMatchedOnce": false } }] }'
```

## Enjoy!! 😸
