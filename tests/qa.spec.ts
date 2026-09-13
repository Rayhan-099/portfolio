import { test, expect } from '@playwright/test';

test('Portfolio Visual QA', async ({ page }) => {
  // Navigate to the local server
  const response = await page.goto('http://localhost:3000');
  
  // Ensure the server is returning a successful response
  expect(response?.status()).toBe(200);

  // Take a screenshot of the Hero section
  await page.waitForTimeout(1000); // Wait for initial animations
  await page.screenshot({ path: 'tests/screenshots/hero.png' });

  // Scroll to Projects section
  await page.evaluate(() => {
    document.getElementById('projects')?.scrollIntoView();
  });
  
  // Wait a bit for scrolling and animations to settle
  await page.waitForTimeout(1500);
  
  // Take a screenshot of the Projects section
  await page.screenshot({ path: 'tests/screenshots/projects.png' });
  
  // Check that core sections exist
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#skills')).toBeVisible();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#experience')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
  
  // Check for any console errors during the test
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  expect(errors.length, `Expected 0 console errors, but found: ${errors.join(', ')}`).toBe(0);
});
