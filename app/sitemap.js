export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: "https://diteacademy.in/",
      lastModified,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: "https://diteacademy.in/courses",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://diteacademy.in/tutorials",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://diteacademy.in/online-tests",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://diteacademy.in/academic-subjects",
      lastModified,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: "https://diteacademy.in/about",
      lastModified,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: "https://diteacademy.in/contact",
      lastModified,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: "https://diteacademy.in/legal/privacy-policy",
      lastModified,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: "https://diteacademy.in/legal/refund-policy",
      lastModified,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: "https://diteacademy.in/legal/terms-of-use",
      lastModified,
      changefreq: "monthly",
      priority: 0.6,
    },
  ];
}
