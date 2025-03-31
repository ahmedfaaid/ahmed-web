/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer2');

const nextConfig = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
});

module.exports = nextConfig;
