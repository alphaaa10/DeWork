/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          },
        ],
      },
      experimental: {
        ppr: "incremental",
      },
      devIndicators: {
        position: "bottom-right",
      },
    };

export default nextConfig;
