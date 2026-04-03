import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aboutus.html",
        destination: "/aboutus",
        permanent: true,
      },
      {
        source: "/projects.html",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/reviews.html",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/masonry-services-brooklyn-ny.html",
        destination: "/masonry-services-brooklyn-ny",
        permanent: true,
      },
      {
        source: "/roofing-contractors-brooklyn.html",
        destination: "/roofing-contractors-brooklyn",
        permanent: true,
      },
      {
        source: "/waterproofing-contractors-NY.html",
        destination: "/waterproofing-contractors-NY",
        permanent: true,
      },

      // ✅ ADD THESE TWO
      {
        source: "/clean-roof",
        destination: "/",
        permanent: true,
      },
      {
        source: "/metal-roof-paint",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
