/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/graphql/",
          destination: "http://localhost:4000/graphql", // Proxy to Backend
        },
      ];
    }

    return [];
  },
}

module.exports = nextConfig;
