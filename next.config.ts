/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generates static HTML
  basePath: "/Porfolio", // replace with your repo name
  images: {
    unoptimized: true, // disables image optimization (needed for GitHub Pages)
  },
};

module.exports = nextConfig;
