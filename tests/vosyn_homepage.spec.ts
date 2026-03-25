import { test, expect } from '@playwright/test';

test.describe('Vosyn.ai QA Agent', () => {

  test('should load the homepage and check title and elements', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check that the title does not throw and is a string
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    expect(typeof title).toBe('string');
    
    // Check if body is visible
    await expect(page.locator('body')).toBeVisible();
    
    // Look for basic elements, wait for a natural loaded state
    await page.waitForLoadState('networkidle');

    // Attempt to take a screenshot for visual report
    await page.screenshot({ path: 'test-results/homepage-screenshot.png', fullPage: true });

    // Ensure we don't have a 503 error anymore since we are using a real browser
    const contentText = await page.locator('body').innerText();
    expect(contentText).not.toContain('503 Service Temporarily Unavailable');
  });

});
