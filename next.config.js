/** @type {import('next').NextConfig} */

import { withContentlayer } from 'next-contentlayer';

const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true
});

module.exports = nextConfig;
