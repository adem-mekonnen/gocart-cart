/** @type {import('next').NextConfig} */
const nextConfig = {
  // Try moving the flag here if 'experimental' doesn't work
  turbopack: {
    useSystemTlsCerts: true, 
  },
  // Keep the experimental one as a backup for now
  experimental: {
    turbopackUseSystemTlsCerts: true,
  }
};

export default nextConfig;