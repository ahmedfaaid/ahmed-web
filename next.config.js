/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer2');

const nextConfig = withContentlayer({
  reactStrictMode: true
});

module.exports = nextConfig;
