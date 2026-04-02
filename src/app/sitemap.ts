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
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      path: "/aboutus",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/projects",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/blog",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/contact-us",
      priority: 0.7,
      changeFrequency: "yearly",
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
