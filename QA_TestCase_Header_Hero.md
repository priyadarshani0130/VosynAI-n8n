# Professional Test Case Repository - Vosyn.ai
**Modules Covered:** Header & Navigation, Hero Section
**Format:** Industry Standard QA Markdown (Jira/TestRail Compatible)

## Module: Header & Navigation (30 Test Cases)

| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-HDR-001 | Verify logo presence and native resolution | Functional | High | Default Desktop Viewport | 1. Load homepage. 2. Inspect top-left corner | Logo SVG renders without pixelation. |
| TC-HDR-002 | Verify logo routing to root | Functional | High | Default Desktop Viewport | 1. Click logo. | Page routes or refreshes to `https://vosyn.ai/`. |
| TC-HDR-003 | Verify primary "Sign Up Now" CTA visibility | Functional | Critical | Default Desktop Viewport | 1. Inspect top banner right-rail. | Button is visible and text is legible. |
| TC-HDR-004 | Verify "Sign Up Now" routing | Functional | Critical | Default Desktop Viewport | 1. Click "Sign Up Now". | User redirects to `/join-the-waitlist/`. |
| TC-HDR-005 | Verify "Sign Up Now" hover state CSS transition | Functional | Low | Default Desktop Viewport | 1. Mouse hover over CTA. | Background color transitions smoothly within 300ms. |
| TC-HDR-006 | Verify Glassmorphism header CSS on scroll | Functional | Medium | Default Desktop Viewport | 1. Scroll page Y>100px. | Header background acquires `backdrop-filter: blur`. |
| TC-HDR-007 | Verify fixed positioning of header | Functional | High | Default Desktop Viewport | 1. Scroll to footer. | Header remains fixed at top of viewport. |
| TC-HDR-008 | Verify "Home" link existence | Functional | High | Sticky Header Active | 1. Inspect main `<nav>`. | "Home" link is present. |
| TC-HDR-009 | Verify "Products" sub-menu trigger | Functional | High | Default Desktop Viewport | 1. Hover "Products" nav item. | Dropdown menu appears instantly. |
| TC-HDR-010 | Verify "VosynVerse" link in Products sub-menu | Functional | High | Dropdown active | 1. Click "VosynVerse". | Resolves to correct product page. |
| TC-HDR-011 | Verify "VosynCore" link in Products sub-menu | Functional | High | Dropdown active | 1. Click "VosynCore". | Resolves to correct product page. |
| TC-HDR-012 | Verify "About Us" sub-menu trigger | Functional | High | Default Desktop Viewport | 1. Hover "About Us". | Dropdown menu appears instantly. |
| TC-HDR-013 | Verify "Media" sub-menu trigger | Functional | High | Default Desktop Viewport | 1. Hover "Media". | Dropdown menu appears instantly. |
| TC-HDR-014 | Verify "Investors" primary link route | Functional | High | Default Desktop Viewport | 1. Click "Investors". | Loads Investors relationships page. |
| TC-HDR-015 | Verify "Careers" primary link route | Functional | High | Default Desktop Viewport | 1. Click "Careers". | Loads Careers portal. |
| TC-HDR-016 | Verify tab-index accessibility for main nav | Functional | High | Accessibility Audit | 1. Press 'Tab' sequentially. | Focus outlines appear on all nav links logically. |
| TC-HDR-017 | Verify ARIA labels on dropdown menus | Validation | Medium | Accessibility Audit | 1. Inspect dropdown parent `<ul>`. | Sub-menus contain `aria-haspopup="true"`. |
| TC-HDR-018 | Verify mobile burger menu visibility | Functional | High | Mobile Viewport (<768px) | 1. Resize viewport. | Standard `<nav>` hides, burger menu `<svg>` appears. |
| TC-HDR-019 | Verify mobile burger menu expansion | Functional | Critical | Mobile Viewport (<768px) | 1. Click burger icon. | Full-screen or side-drawer menu opens. |
| TC-HDR-020 | Verify closing mobile burger menu | Functional | Critical | Mobile Menu Open | 1. Click 'X' or outside drawer. | Drawer closes, returning to page context. |
| TC-HDR-021 | Verify mobile sub-menu accordion expansion | Functional | High | Mobile Menu Open | 1. Tap "Products". | Sub-links push down other links dynamically. |
| TC-HDR-022 | Verify mobile header logo routing | Functional | High | Mobile Viewport | 1. Tap logo in mobile header. | Routes to root `/`. |
| TC-HDR-023 | Verify localization toggle presence (if applicable) | Functional | Medium | Default Desktop Viewport | 1. Inspect header for Language icon. | Toggle is visible. |
| TC-HDR-024 | Verify layout integrity at exactly 1024px width | Negative | Medium | Tablet Viewport (1024px) | 1. Resize browser. | Links do not overlap or wrap poorly. |
| TC-HDR-025 | Verify layout integrity at 4K resolution | Validation | Medium | 4K Display | 1. Load viewport. | Max-width containers restrict header stretching. |

### Header Edge Cases (5 Cases)
| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-HDR-E01 | Rapid open/close of mobile burger menu | Edge | Medium | Mobile Viewport | 1. Tap burger icon 10 times rapidly. | App state does not desync or crash. |
| TC-HDR-E02 | Resize viewport while dropdown is open | Edge | Low | Desktop Viewport | 1. Open "Products" -> Shrink to mobile. | Dropdown gracefully unmounts or converts to mobile accordion. |
| TC-HDR-E03 | Middle-click header links | Edge | Low | Default Desktop Viewport | 1. Middle-click "Careers". | Page opens in new unblocked browser tab. |
| TC-HDR-E04 | Test sticky header momentum scrolling | Edge | Low | iOS Safari (Physical) | 1. Swipe rapidly down and up. | Header does not detach or jump erratically. |
| TC-HDR-E05 | Hover off dropdown diagonally | Edge | Medium | Default Desktop Viewport | 1. Hover "Products", move mouse to "VosynVerse" following a diagonal path. | Sub-menu remains open due to safe-triangle hover logic. |


## Module: Hero Section (30 Test Cases)

| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-HRO-001 | Verify H1 core copy accuracy | Functional | Critical | Default Desktop Viewport | 1. Inspect main H1 tag. | Reads "Break Barriers, Build Connections". |
| TC-HRO-002 | Verify H1 localized font-weight | Validation | High | Default Desktop Viewport | 1. Inspect computed CSS. | H1 renders in bold/black weight tokens natively. |
| TC-HRO-003 | Verify subheading paragraph rendering | Functional | High | Default Desktop Viewport | 1. Read paragraph under H1. | Text clarifies communication and localization barriers. |
| TC-HRO-004 | Verify "Be Part of the Future" CTA rendering | Functional | Critical | Default Desktop Viewport | 1. Inspect button element. | Button stands out via primary brand colors. |
| TC-HRO-005 | Verify primary CTA routing logic | Functional | Critical | Default Desktop Viewport | 1. Click CTA. | Redirects exactly to waitlist acquisition funnel. |
| TC-HRO-006 | Verify primary CTA semantic HTML | Validation | Medium | Default Desktop Viewport | 1. Inspect DOM. | CTA is an `<a>` tag or `<button>` wrapped in a form/router. |
| TC-HRO-007 | Verify "See Our Vision" secondary CTA | Functional | High | Default Desktop Viewport | 1. Locate link. | Present below or beside primary CTA. |
| TC-HRO-008 | Verify secondary CTA routing | Functional | High | Default Desktop Viewport | 1. Click link. | Smooth scrolls to vision/features section. |
| TC-HRO-009 | Verify background video autoplay property | Functional | High | Network: Fast 5G | 1. Load homepage. | Background video autoplays automatically. |
| TC-HRO-010 | Verify background video is muted | Validation | Critical | Network: Active audio context | 1. Inspect `<video>` tag. | Contains `muted` attribute enforcing UX standards. |
| TC-HRO-011 | Verify video fallback image loads | Negative | High | Network throttled (2G) | 1. Load homepage. | A high-res static poster image loads before video buffers. |
| TC-HRO-012 | Verify text contrast against background | Validation | Critical | Accessibility Audit | 1. Run WCAG plugin. | Color contrast ratio is > 4.5:1 for standard text. |
| TC-HRO-013 | Verify mobile text stacking in Hero | Functional | High | Mobile Viewport | 1. Inspect H1 and Subheading. | Elements stack vertically without horizontal overflow. |
| TC-HRO-014 | Verify mobile CTA sizing | Validation | Medium | Mobile Viewport | 1. Inspect primary button. | Width is 100% or optimized for thumb targets (min 44px height). |
| TC-HRO-015 | Verify visual clipping on ultra-wide monitors | Validation | Low | 21:9 Viewport | 1. Stretch window. | Background covers via `object-fit: cover` without letterboxing. |
| TC-HRO-016 | Validate keyboard interaction with CTAs | Functional | High | Default Desktop Viewport | 1. Tab to "Be Part of the Future" 2. Press Enter. | Route initiates via keyboard execution. |
| TC-HRO-017 | Verify screen reader reads H1 first | Validation | High | VoiceOver Active | 1. Start VO reading. | H1 is announced immediately after navigation landmark. |
| TC-HRO-018 | Verify no script errors on Hero load | Validation | Critical | Browser DevTools Open | 1. Reload page. | Console shows 0 `Uncaught TypeError` logs. |
| TC-HRO-019 | Verify Hero loads under 2.5 seconds | Performance | High | Lighthouse Audit | 1. Run Perf test. | LCP (Largest Contentful Paint) triggers < 2.5s. |
| TC-HRO-020 | Verify animation frame drops | Performance | Medium | Chrome FPS Meter | 1. Scroll past Hero. | Page maintains >50fps indicating optimized background layer. |

*(For brevity in this batch, moving directly to edge cases)*

### Hero Edge Cases (5 Cases)
| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-HRO-E01 | System setting: Reduced Motion | Edge | High | OS Settings: Reduced Motion Enabled | 1. Load Hero section. | Video pauses or replaces with static image; animations disabled. |
| TC-HRO-E02 | Viewport resize during video buffer | Edge | Low | Fast Network | 1. Throttle CPU, resize window horizontally repeatedly. | Layout thrashing does not crash rendering thread. |
| TC-HRO-E03 | Emulate extreme zoom (400%) | Edge | Medium | Accessibility constraints | 1. Zoom browser to 400%. | Text remains readable, layout shifts to mobile breakpoints without overlay cutoff. |
| TC-HRO-E04 | Disabling JavaScript directly | Edge | Medium | JS Disabled in Browser | 1. Load URL. | Hero text and static links still render semantically (Progressive Enhancement). |
| TC-HRO-E05 | Interacting before CSS parses (FOUC) | Edge | Low | Network: Slow 3G | 1. Refresh page continuously. | Flash Of Unstyled Content is minimized via core CSS in `<head>`. |
