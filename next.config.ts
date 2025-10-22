/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generates static HTML
  images: {
    unoptimized: true, // disables image optimization (needed for GitHub Pages)
  },
};

module.exports = nextConfig;
