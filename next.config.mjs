/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "194.164.149.30",
        port: "8000",
        pathname: "/project_image/**",
      },
        {
        protocol: "https",
        hostname: "lytemaster.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;