const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const projects = [
  { id: 'lumine', url: 'https://lumineai.vercel.app/' },
  { id: 'current-capital', url: 'https://finance-manager-zeta.vercel.app/' },
  { id: 'health-assistant', url: 'https://health-assistant-azure.vercel.app/' },
  { id: 'hand-tracking', url: 'https://jujutsu-kaisen-rho.vercel.app/' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  
  const publicProjectsDir = path.join(process.cwd(), 'public', 'projects');
  if (!fs.existsSync(publicProjectsDir)) {
    fs.mkdirSync(publicProjectsDir, { recursive: true });
  }

  for (const project of projects) {
    console.log(`Capturing ${project.id}...`);
    try {
      await page.goto(project.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);
      const screenshotPath = path.join(publicProjectsDir, `${project.id}-hero.jpg`);
      await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 80 });
      console.log(`Saved ${screenshotPath}`);
    } catch (e) {
      console.error(`Failed to capture ${project.id}:`, e);
    }
  }
  await browser.close();
})();
