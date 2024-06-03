/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.arsalanalikhattak.me', // Your domain name
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 7000, // Split the sitemap if you have more than 7000 URLs
    changefreq: 'weekly', // Default change frequency for all pages
    priority: 0.5, // Default priority for all pages
    exclude: ['/admin/*', '/api/*'], // Exclude specific paths
    additionalPaths: async (config) => [
      await config.transform(config, '/additional-page')
    ],
    transform: async (config, path) => {
      return {
        loc: path, // The path of the page
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    },
  };
  