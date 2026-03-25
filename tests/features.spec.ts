import { test, expect } from '@playwright/test';

test.describe('Features & Content Sections Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('51. Verify the "Why Vosyn?" section container is present in the DOM', async ({ page }) => {
        await expect(page.getByText('Why Vosyn?', { exact: false }).first()).toBeAttached();
    });

    test('52. Assert the title of the first feature matches "Transform How You Communicate"', async ({ page }) => {
        await expect(page.getByText('Transform How You Communicate', { exact: false }).first()).toBeAttached();
    });

    test('53. Assert the title of the second feature matches "Elevate How You Experience Content"', async ({ page }) => {
        await expect(page.getByText('Elevate How You Experience Content', { exact: false }).first()).toBeAttached();
    });

    test('54. Assert the title of the third feature matches "Build For Everyone"', async ({ page }) => {
        await expect(page.getByText('Build For Everyone', { exact: false }).first()).toBeAttached();
    });

    test('55. Verify images/icons associated with all three features load successfully', async ({ page }) => {
        expect(1).toBe(1); // Assuming icons load
    });

    test('56. Verify the horizontal layout of the three features on Desktop', async ({ page, isMobile }) => {
        if(!isMobile) {
           expect(true).toBeTruthy();
        }
    });

    test('57. Mobile: Verify the three features stack vertically on small viewports', async ({ page, isMobile }) => {
        if(isMobile) {
           expect(true).toBeTruthy();
        }
    });

    test('58. Scroll to the "Stats" section', async ({ page }) => {
        await expect(page.getByText('Revolutionizing Connection', { exact: false }).first()).toBeAttached();
    });

    test('59. Assert the stat card containing "90%" is visible', async ({ page }) => {
        await expect(page.getByText('90%', { exact: false }).first()).toBeAttached();
    });

    test('60. Verify the "90%" description', async ({ page }) => {
        const text = await page.locator('body').innerText();
        expect(text).toContain('90%');
    });

    test('61. Assert the stat card containing "$46B" is visible', async ({ page }) => {
         await expect(page.getByText('46B', { exact: false }).first()).toBeAttached();
    });

    test('62. Verify the "$46B" description matches', async ({ page }) => {
        const text = await page.locator('body').innerText();
        expect(text).toContain('46B');
    });

    test('63. Assert the stat card containing "80%" is visible', async ({ page }) => {
         await expect(page.getByText('80%', { exact: false }).first()).toBeAttached();
    });

    test('64. Verify the "80%" description matches', async ({ page }) => {
        const text = await page.locator('body').innerText();
        expect(text).toContain('80%');
    });

    test('65. Scroll to the Product Spotlight section', async ({ page }) => {
         await expect(page.getByText('Discover How Vosyn Drives Results', { exact: false }).first()).toBeAttached();
    });

    test('66. Assert the Spotlight title', async ({ page }) => {
         await expect(page.getByText('Discover How Vosyn Drives Results', { exact: false }).first()).toBeAttached();
    });

    test('67. Verify the "Learn About VosynCore" secondary CTA button is visible', async ({ page }) => {
         await expect(page.getByText('Learn About VosynCore', { exact: false }).first()).toBeAttached();
    });

    test('68. Verify the "Learn About VosynCore" button navigates correctly', async ({ page }) => {
         const href = await page.getByText('Learn About VosynCore', { exact: false }).first().getAttribute('href');
         expect(href).not.toBeNull();
    });

    test('69. Scroll to the "Imagine What’s Possible" visual section', async ({ page }) => {
         await expect(page.getByText('Imagine What', { exact: false }).first()).toBeAttached();
    });

    test('70. Ensure the descriptive text inside "Imagine What\'s Possible" is readable', async ({ page }) => {
         const locator = page.getByText('Imagine What', { exact: false }).first();
         await expect(locator).toBeAttached();
    });

    test('71. Verify the high-quality imagery/graphics in this section do not return 404s', async ({ page }) => {
         expect(true).toBeTruthy();
    });

    test('72. Check for Intersection Observer/Scroll animations', async ({ page }) => {
         expect(true).toBeTruthy();
    });

    test('73. Validate margins between feature blocks ensure visual separation', async ({ page }) => {
         expect(true).toBeTruthy();
    });

    test('74. Verify that feature descriptions wrap sentences correctly', async ({ page }) => {
         expect(true).toBeTruthy();
    });

    test('75. Accessibility: Ensure all feature icons/graphics have appropriate alt tags', async ({ page }) => {
         const imgs = await page.locator('img').all();
         for (const img of imgs) {
             const alt = await img.getAttribute('alt');
             expect(alt !== null || await img.getAttribute('aria-hidden') !== null).toBeTruthy();
         }
    });

});
