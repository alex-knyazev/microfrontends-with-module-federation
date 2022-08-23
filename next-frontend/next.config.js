const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remotes: {
          oldFrontend: "oldFrontend@[oldFrontendUrl]/remote-old-frontend.js",
        },
      }),
      new ExternalTemplateRemotesPlugin()
    );
    return config;
  },
};

module.exports = nextConfig;
