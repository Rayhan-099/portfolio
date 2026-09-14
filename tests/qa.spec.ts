import { test, expect } from '@playwright/test';

// Extremely long timeout due to heavy Framer Motion animations
test.describe.configure({ timeout: 120000 });

const viewports = [
  { name: 'iPhone 13', width: 390, height: 844 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
  { name: 'MacBook Air', width: 1280, height: 800 },
  { name: 'MacBook Pro', width: 1440, height: 900 },
];

test('Portfolio Visual QA Loop', async ({ page }) => {
  // Navigate to local server
  const response = await page.goto('http://localhost:3000');
  expect(response?.status()).toBe(200);

  // Check for any console errors during the test
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.waitForTimeout(3000); // Allow layout/animations to adjust

    // Hero Section
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `tests/screenshots/hero_${viewport.width}.png` });

    // About Section
    await page.evaluate(() => {
      document.getElementById('about')?.scrollIntoView();
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `tests/screenshots/about_${viewport.width}.png` });

    // Projects Section
    await page.evaluate(() => {
      document.getElementById('projects')?.scrollIntoView();
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `tests/screenshots/projects_${viewport.width}.png` });
  }

  expect(errors.length, `Expected 0 console errors, but found: ${errors.join(', ')}`).toBe(0);
});
