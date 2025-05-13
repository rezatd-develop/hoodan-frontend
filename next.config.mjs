/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['img.freepik.com', "", "i.ibb.co", "ibb.co", "localhost", "156.253.5.235", "hoodan.ir"],
  },
};

export default nextConfig;
