const { generateSitemap } = require('next-sitemap');

generateSitemap({
  siteUrl: 'https://www.arsalanalikhattak.me',
}).then(() => {
  console.log('Sitemap generated successfully.');
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});
