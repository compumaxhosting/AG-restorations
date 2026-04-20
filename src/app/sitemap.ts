import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agrestorations.com";

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly",
    },

    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/roofing-services-linden-nj",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/siding-installation-linden-nj",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/gutter-installation-linden-nj",
      priority: 0.9,
      changeFrequency: "monthly",
    },

    {
      path: "/aboutus",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/projects",
      priority: 0.7,
      changeFrequency: "monthly",
    },

    {
      path: "/contact-us",
      priority: 0.6,
      changeFrequency: "yearly",
    },

    {
      path: "/blog",
      priority: 0.6,
      changeFrequency: "weekly",
    },

    {
      path: "/blog/best-roofing-contractor-linden-nj",
      priority: 0.4,
      changeFrequency: "monthly",
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(), // 🔥 you can later replace with real dates
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
