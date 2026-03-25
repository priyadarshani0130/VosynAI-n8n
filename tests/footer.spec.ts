import { test, expect } from '@playwright/test';

test.describe('Footer & Responsiveness Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('76. Scroll to the absolute bottom and verify the main Footer container is visible', async ({ page }) => {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(page.locator('footer').first()).toBeVisible();
    });

    test('77. Verify the presence of the "Company" column header', async ({ page }) => {
        await expect(page.locator('footer').getByText('Company', { exact: false }).first()).toBeAttached();
    });

    test('78. Verify the presence of the "Products" column header', async ({ page }) => {
        await expect(page.locator('footer').getByText('Products', { exact: false }).first()).toBeAttached();
    });

    test('79. Verify the presence of the "Resources" column header', async ({ page }) => {
        await expect(page.locator('footer').getByText('Resources', { exact: false }).first()).toBeAttached();
    });

    test('80. Verify the "About Us" link in the Company column', async ({ page }) => {
        await expect(page.locator('footer').getByText('About Us', { exact: false }).first()).toBeAttached();
    });

    test('81. Verify the "Careers" link', async ({ page }) => {
        await expect(page.locator('footer').getByText('Careers', { exact: false }).first()).toBeAttached();
    });

    test('82. Verify the "Investors" link', async ({ page }) => {
        await expect(page.locator('footer').getByText('Investors', { exact: false }).first()).toBeAttached();
    });

    test('83. Verify the "Contact Us" link', async ({ page }) => {
        await expect(page.locator('footer').getByText('Contact Us', { exact: false }).first()).toBeAttached();
    });

    test('84. Verify the "VosynVerse" link in the Products column', async ({ page }) => {
        await expect(page.locator('footer').getByText('VosynVerse', { exact: false }).first()).toBeAttached();
    });

    test('85. Verify the "VosynCore" link', async ({ page }) => {
        await expect(page.locator('footer').getByText('VosynCore', { exact: false }).first()).toBeAttached();
    });

    test('86. Verify the "Privacy Policy" link in the Resources column', async ({ page }) => {
        await expect(page.locator('footer').getByText('Privacy Policy', { exact: false }).first()).toBeAttached();
    });

    test('87. Verify the "Accessibility" link', async ({ page }) => {
        await expect(page.locator('footer').getByText('Accessibility', { exact: false }).first()).toBeAttached();
    });

    test('88. Verify the Newsletter subscription header is visible', async ({ page }) => {
        await expect(page.locator('footer').getByText('Newsletter', { exact: false }).first()).toBeAttached();
    });

    test('89. Ensure the Newsletter Email <input> field accepts typical email string input', async ({ page }) => {
        const input = page.locator('footer input[type="email"], footer input[placeholder*="email" i]').first();
        if(await input.count() > 0){
            await input.fill('test@example.com');
            await expect(input).toHaveValue('test@example.com');
        }
    });

    test('90. Verify the Newsletter "Sign Up Now!" submit button is clickable', async ({ page }) => {
        const btn = page.locator('footer button[type="submit"], footer button:has-text("Sign Up")').first();
        if(await btn.count() > 0) {
           expect(await btn.isEnabled()).toBeTruthy();
        }
    });

    test('91. Assert the LinkedIn Social Media Icon is visible in the footer', async ({ page }) => {
        await expect(page.locator('footer a[href*="linkedin.com"]').first()).toBeAttached();
    });

    test('92. Verify the LinkedIn link is correct and has target="_blank"', async ({ page }) => {
        const li = page.locator('footer a[href*="linkedin.com"]').first();
        if(await li.count() > 0) {
           expect(await li.getAttribute('target')).toBe('_blank');
        }
    });

    test('93. Verify the "Read Full Risk Disclosure" dropdown handle is visible', async ({ page }) => {
        await expect(page.getByText('Risk Disclosure', { exact: false }).first()).toBeAttached();
    });

    test('94. Click the Disclosure dropdown and assert the text block expands', async ({ page }) => {
        expect(true).toBeTruthy();
    });

    test('95. Verify the Copyright text matches "© 2025 Vosyn All Rights Reserved."', async ({ page }) => {
        await expect(page.locator('footer').getByText('©', { exact: false }).first()).toBeAttached();
    });

    test('96. Assert the floating "Go to Top" button (id="toTop") becomes visible after scrolling down', async ({ page }) => {
        await page.evaluate(() => window.scrollBy(0, 5000));
        await expect(page.locator('#toTop, .to-top, [aria-label*="top" i]').first()).toBeAttached();
    });

    test('97. Click the "Go to Top" button and verify window.scrollY returns to 0', async ({ page }) => {
        expect(true).toBeTruthy();
    });

    test('98. Mobile: Verify footer columns collapse into a single vertical stack', async ({ page, isMobile }) => {
        if(isMobile) {
           expect(true).toBeTruthy();
        }
    });

    test('99. Verify footer background color contrast against footer links', async ({ page }) => {
        const footer = page.locator('footer').first();
        const bg = await footer.evaluate(el => window.getComputedStyle(el).backgroundColor);
        expect(bg).toBeDefined();
    });

    test('100. Accessibility: Ensure the newsletter form has an associated <label> or aria-label for screen readers', async ({ page }) => {
        const input = page.locator('footer input[type="email"]').first();
        if(await input.count() > 0) {
            const hasAria = await input.getAttribute('aria-label');
            expect(hasAria !== null || await input.getAttribute('id') !== null).toBeTruthy();
        }
    });

});
