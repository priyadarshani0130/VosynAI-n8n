# Vosyn.ai - Professional Defect Report

## Bug Ticket: VOS-BUG-001
**Title:** Newsletter and Legal Footer Links Fail to Render on Mobile Viewports  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Module:** Footer & Responsiveness  
**Environment:** Mobile Chrome (Pixel 5 viewport: 393x851)  

### Description
When simulating a mobile device viewport, the footer elements including the "Privacy Policy", "Accessibility", "Newsletter Subscription", and "LinkedIn Icon" fail to attach to the DOM. This results in functional timeouts for automated suites and prevents mobile users from accessing mandatory legal documentation.

### Preconditions
1. User operates on a mobile device or a browser window constrained to <400px width.
2. User is on the production homepage (https://vosyn.ai/).

### Steps to Reproduce
1. Launch browser in Mobile viewport emulation (e.g., Pixel 5).
2. Navigate to https://vosyn.ai/.
3. Scroll down to the absolute bottom of the page (`window.scrollTo(0, document.body.scrollHeight)`).
4. Attempt to locate and click the "Privacy Policy" or "Accessibility" links.

### Expected Result
The footer links and newsletter subscription module should be visible and interactable, likely stacked vertically for mobile readability.

### Actual Result
The elements are unresponsive and not attached to the visible DOM, triggering a 5000ms locator timeout.

---

## Bug Ticket: VOS-BUG-002
**Title:** "Learn About VosynCore" CTA Button Missing Valid `href` Attribute  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  
**Module:** Features & Content Spotlight  
**Environment:** Desktop Chromium  

### Description
The primary secondary-action button in the Feature Spotlight section ("Learn About VosynCore") is missing a semantic HTML `href` attribute. While it may rely on a JavaScript `onClick` event listener for routing, the lack of an `href` breaks native accessibility (screen readers) and prevents users from native behaviors (e.g., "Open in new tab", middle-click).

### Preconditions
1. User is on a standard desktop browser.
2. User navigates to the Vosyn.ai homepage.

### Steps to Reproduce
1. Scroll down to the "Discover How Vosyn Drives Results" section.
2. Inspect the "Learn About VosynCore" button element.
3. Review the DOM attributes to extract the `href`.

### Expected Result
The button is rendered using an `<a>` tag with a valid `href="/vosyncore"` attribute.

### Actual Result
The element returns `null` for the `href` attribute.
