# Module federation microfrontend

This repo demonstrates such webpack feature as [Module Federation](https://webpack.js.org/concepts/module-federation/) in specific case.

See a lot of useful examples at https://github.com/module-federation/module-federation-examples.

## How to run

1. Go to old-frontend, run:

```
npm install
npm run build
npm run serve
```

App should be served on localhost:3000.

2. Go to next-frontend, run:

```
npm install
```

To run Next.js provided Node.js server and serve pages with SSR:

```
npm run build
npm start
```

Open http://localhost:3001.

To generate static sources and serve them using simple static server:

```
npm run build-static
npm run serve-static
```

Open URL which is shown in terminal.

On the page you see Header and Footer from Old Frontend and Content rendered by Next.js.

## Details

There are two applications:

1. Old frontend - pure JavaScript project which are built by Webpack. Two webpack entries of this app are **exposed** using ModuleFederationPlugin Webpack Plugin. These modules render Header and Footer on a page where they used.

2. Next frontend - [Next.js](https://nextjs.org/) project which uses modules exposed from Old Frontend app. In this app we implement content of web page which is rendered by SSR.

Next frontend app uses client-side dynamic imports to get modules from Old Frontend. So it works like this:

1. When you request a page, Next.js makes SSR only for page Content. There are just empty blocks on place of Header and Footer at this moment. If you use static sites generation, page is rendered once on build stage, not on every request.

2. When HTML page is processing on client side, Webpack provided code makes an HTTP request to `localhost:3000` to get exposed from Old Frontend modules. When the request is completed - Header and Footer are rendered.
