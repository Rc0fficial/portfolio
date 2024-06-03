const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const sitemap = new SitemapStream({ hostname: 'https://www.arsalanalikhattak.me' });

// Add URLs to the sitemap
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/projects/note-assist', changefreq: 'weekly', priority: 0.8 });
// Add more URLs as needed

sitemap.end();

streamToPromise(sitemap)
  .then(data => createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml')).write(data))
  .catch(console.error);
