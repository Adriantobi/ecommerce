/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopswaywear.ca",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
