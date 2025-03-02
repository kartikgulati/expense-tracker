/** @type {import('next').NextConfig} */
const nextConfig = {
  // This helps prevent warnings from browser extensions adding attributes
  reactStrictMode: true,
  // Suppress specific HTML validation warnings
  experimental: {
    // This will help with the specific warning about extra attributes
    skipTrailingSlashRedirect: true,
    // Ignore specific attributes added by browser extensions
    outputFileTracingIgnores: ['**/*.map'],
  }
};

module.exports = nextConfig;