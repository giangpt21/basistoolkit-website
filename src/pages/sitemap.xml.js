const site = 'https://basistoolkit.com';

// priority: homepage highest, guides high (SEO targets), others medium
const pages = [
  { url: '/', priority: '1.0', freq: 'weekly' },
  { url: '/download/', priority: '0.9', freq: 'weekly' },
  { url: '/guides/', priority: '0.8', freq: 'weekly' },
  { url: '/guides/move-sap-gui-new-machine/', priority: '0.8', freq: 'monthly' },
  { url: '/guides/install-sap-gui-windows/', priority: '0.8', freq: 'monthly' },
  { url: '/guides/install-sap-gui-mac/', priority: '0.8', freq: 'monthly' },
  { url: '/guides/backup-sap-gui-settings/', priority: '0.8', freq: 'monthly' },
  { url: '/guides/add-system-to-sap-logon/', priority: '0.7', freq: 'monthly' },
  { url: '/guides/configure-sap-router/', priority: '0.7', freq: 'monthly' },
  { url: '/guides/sap-logon-vs-sap-logon-pad/', priority: '0.7', freq: 'monthly' },
  { url: '/guides/what-is-sapuilandscape-xml/', priority: '0.8', freq: 'monthly' },
  { url: '/guides/install-sap-logon-transfer/', priority: '0.7', freq: 'monthly' },
  { url: '/about/', priority: '0.4', freq: 'monthly' },
  { url: '/privacy/', priority: '0.3', freq: 'yearly' },
  { url: '/terms/', priority: '0.3', freq: 'yearly' },
];

export async function GET() {
  const now = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${site}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
