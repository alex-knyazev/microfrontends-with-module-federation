const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    header: "./src/header.js",
    footer: "./src/footer.js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "oldFrontend",
      filename: "remote-old-frontend.js",
      exposes: {
        "./header": "./src/header",
        "./footer": "./src/footer",
      },
    }),
  ],
};
