import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 }
];

test.describe('Visual QA', () => {
  for (const vp of VIEWPORTS) {
    test(`Screenshot at ${vp.width}x${vp.height}`, async ({ page }) => {
      await page.setViewportSize(vp);
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      // Wait for initial hero animations
      await page.waitForTimeout(3000);
      
      // Scroll down the page smoothly to trigger all whileInView animations
      await page.evaluate(async () => {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        for (let i = 0; i < document.body.scrollHeight; i += 500) {
          window.scrollTo(0, i);
          await delay(200);
        }
        window.scrollTo(0, 0);
      });
      
      // Wait for the scroll up and any final animations to settle
      await page.waitForTimeout(2000);
      
      // Take a full page screenshot
      await page.screenshot({ 
        path: `screenshots/portfolio-${vp.width}.png`, 
        fullPage: true 
      });
    });
  }
});
