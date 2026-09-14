import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const projects = [
  { id: 'lumine', url: 'https://lumineai.vercel.app/' },
  { id: 'current-capital', url: 'https://finance-manager-zeta.vercel.app/' },
  { id: 'health-assistant', url: 'https://health-assistant-azure.vercel.app/' },
  { id: 'hand-tracking', url: 'https://jujutsu-kaisen-rho.vercel.app/' },
];

test('Capture project screenshots', async ({ page }) => {
  const publicProjectsDir = path.join(process.cwd(), 'public', 'projects');
  
  if (!fs.existsSync(publicProjectsDir)) {
    fs.mkdirSync(publicProjectsDir, { recursive: true });
  }

  await page.setViewportSize({ width: 1440, height: 900 });

  for (const project of projects) {
    console.log(`Capturing ${project.id}...`);
    try {
      await page.goto(project.url, { waitUntil: 'networkidle', timeout: 30000 });
      // Wait for any initial animations
      await page.waitForTimeout(3000);
      
      const screenshotPath = path.join(publicProjectsDir, `${project.id}-hero.jpg`);
      await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 80 }); // Playwright doesn't natively output webp via screenshot easily, we use jpeg as proxy and can convert or just serve jpeg
      // Actually, playwright supports 'jpeg' or 'png'. Let's stick to 'jpeg'.
      console.log(`Saved ${screenshotPath}`);
    } catch (e) {
      console.error(`Failed to capture ${project.id}:`, e);
    }
  }
});
