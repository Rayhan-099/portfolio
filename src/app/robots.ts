import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow any private routes if you have them, e.g., '/admin'
    },
    sitemap: 'https://rayhank.vercel.app/sitemap.xml',
  };
}
