/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/shared/config/loader.ts",
  },
};

module.exports = nextConfig;
