import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('capture project screenshots', async ({ page }) => {
  test.setTimeout(120000); // Allow time for external sites to load

  const projects = [
    { id: 'lumine', url: 'https://lumineai.vercel.app/' },
    { id: 'current-capital', url: 'https://finance-manager-zeta.vercel.app/' },
    { id: 'health-assistant', url: 'https://health-assistant-azure.vercel.app/' },
    { id: 'hand-tracking', url: 'https://jujutsu-kaisen-rho.vercel.app/' },
  ];

  const outDir = path.join(process.cwd(), 'public', 'media', 'projects');
  fs.mkdirSync(outDir, { recursive: true });

  // 1440x900
  await page.setViewportSize({ width: 1440, height: 900 });

  for (const project of projects) {
    console.log(`Capturing ${project.id}...`);
    try {
      await page.goto(project.url, { waitUntil: 'networkidle', timeout: 30000 });
      // Give a little extra time for client side rendering
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(outDir, `${project.id}.webp`), type: 'webp', quality: 90 });
      console.log(`Captured ${project.id}`);
    } catch (e) {
      console.error(`Failed to capture ${project.id}:`, e);
    }
  }
});
