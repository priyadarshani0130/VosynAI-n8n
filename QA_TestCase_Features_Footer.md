# Professional Test Case Repository - Vosyn.ai
**Modules Covered:** Features & Content, Footer & Responsiveness
**Format:** Industry Standard QA Markdown (Jira/TestRail Compatible)

## Module: Features & Content (30 Test Cases)

| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-FTR-001 | Verify "Why Vosyn?" section container | Functional | High | Default Desktop Viewport | 1. Scroll past Hero. | Distinct section block titled "Why Vosyn?" is rendered. |
| TC-FTR-002 | Verify "Transform How You Communicate" render | Functional | High | Default Desktop Viewport | 1. Locate first core feature column. | Title and supporting descriptive text are visible. |
| TC-FTR-003 | Verify "Elevate How You Experience Content" | Functional | High | Default Desktop Viewport | 1. Locate second core feature column. | Title and supporting descriptor align properly. |
| TC-FTR-004 | Verify "Build For Everyone" render | Functional | High | Default Desktop Viewport | 1. Locate third core feature column. | Title and supporting descriptor are present. |
| TC-FTR-005 | Verify feature icons format | Validation | Medium | Network: Clear Cache | 1. Inspect imagery next to feature blocks. | SVGs or high-res WebP images render without pixelation. |
| TC-FTR-006 | Verify 3-column layout on Desktop | Functional | High | Desktop Viewport (>1024px) | 1. Inspect grid alignment. | Features are organized horizontally. |
| TC-FTR-007 | Verify Statistics Section visibility | Functional | Critical | Default Desktop Viewport | 1. Scroll to "Revolutionizing Connection". | Dark background or contrasting wrapper contains stat block. |
| TC-FTR-008 | Verify "90%" Data Point accuracy | Validation | Critical | Legal Compliance | 1. Locate 90% card. | Text states "prefer localized content". |
| TC-FTR-009 | Verify "$46B" Data Point accuracy | Validation | Critical | Legal Compliance | 1. Locate $46B card. | Text states "lost annually". |
| TC-FTR-010 | Verify "80%" Data Point accuracy | Validation | Critical | Legal Compliance | 1. Locate 80% card. | Text states "seek scalable translation tools". |
| TC-FTR-011 | Verify Product Spotlight CTA visibility | Functional | Critical | Default Desktop Viewport | 1. Scroll to Spotlight. | "Learn About VosynCore" button renders. |
| TC-FTR-012 | Verify Spotlight CTA semantic tag | Validation | Medium | Accessibility Audit | 1. Inspect Spotlight CTA. | Element contains `href` (Currently tracked as BUG-002). |
| TC-FTR-013 | Verify "Imagine What's Possible" visual grid | Functional | High | Default Desktop Viewport | 1. Scroll down page. | Parallax or static grid images load representing future tech. |
| TC-FTR-014 | Verify lazy loading on images below fold | Performance | High | Network throttled (Fast 3G) | 1. Monitor Network tab. | Images in Spotlight load only `loading="lazy"` upon scroll interception. |
| TC-FTR-015 | Verify margin spacing between sections | Validation | Low | Default Desktop Viewport | 1. Measure Y-distance between Features and Stats. | Distance > 40px preventing UI overlap. |
| TC-FTR-016 | Verify font consistency in body text | Validation | High | Inspect CSS | 1. Check feature descriptors. | Matches corporate brand font stack. |
| TC-FTR-017 | Verify Intersection Observer triggers | Functional | Medium | Default Desktop Viewport | 1. Scroll down. | Stats or images fade-in or slide-up via active CSS classes. |
| TC-FTR-018 | Validate scroll-snap behavior (if present) | Validation | Low | Default Desktop Viewport | 1. Scroll past Stats. | Page avoids getting trapped in unintended snap-points. |
| TC-FTR-019 | Verify Tablet (iPad) 2-column or 1-column layout | Functional | High | Width 768px | 1. Resize browser. | 3-column feature grid wraps cleanly avoiding overflow. |
| TC-FTR-020 | Verify Mobile layout | Functional | Critical | Width 375px | 1. Resize browser. | Features, Stats, and Spotlight stack vertically padding > 10px. |
| TC-FTR-021 | Keyboard Tab order through features | Validation | High | Accessibility Audit | 1. Tab into section. | Any interactive elements outline clearly before Footer focus. |
| TC-FTR-022 | Screen Reader "Why Vosyn" Context | Validation | High | VoiceOver Active | 1. Trigger reading. | Structural headers `<h2/h3>` announce hierarchy to prevent confusion. |
| TC-FTR-023 | Verify color contrast for subtext | Validation | Critical | Accessibility Audit | 1. Run scanner. | Stats subtext hits 4.5:1 ratio against darker cards. |
| TC-FTR-024 | Image Alt tags for Spotlight | Validation | High | Asset check | 1. Inspect `<img>`. | `alt` tags describe visuals natively. |
| TC-FTR-025 | Print CSS handling of features | Edge | Low | Browser Print Preview | 1. Press Cmd+P. | Extraneous backgrounds are hidden; stats remain legible text blocks. |

### Features Edge Cases (5 Cases)
| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-FTR-E01 | Rapid scrolling up and down | Edge | Medium | Smooth Scroll enabled | 1. Scroll wildly. | Intersection observer does not infinitely stack animation classes or cause thrashing. |
| TC-FTR-E02 | Horizontal swipe on trackpad (Mac) | Edge | Low | Desktop Safari | 1. Swipe left/right over stats. | Page does not shift laterally (no horizontal overflow `x-hidden` breaks). |
| TC-FTR-E03 | Mobile Zoom over 90% Stat | Edge | Low | Physical Mobile iOS | 1. Pinch to zoom on text. | Meta viewport scales correctly allowing readability. |
| TC-FTR-E04 | Offline Cache on Image Reload | Edge | Low | Service Worker Active | 1. Turn Network Offline 2. Refresh. | Service worker restores critical layout CSS instead of white screen dump. |
| TC-FTR-E05 | Ultra-high contrast OS bypass | Edge | Medium | Windows High Contrast Mode | 1. Enable OS high contrast. | Background cards invert accurately preventing text-bleeding. |


## Module: Footer & Responsiveness (30 Test Cases)

| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-FOT-001 | Verify structural `<footer>` tag presence | Validation | High | Default Desktop Viewport | 1. Navigate to bottom. | Semantic element wraps bottom components. |
| TC-FOT-002 | Verify 4 logical column headers present | Functional | High | Default Desktop Viewport | 1. Inspect footer rows. | Company, Products, Resources, and Newsletter headers exist. |
| TC-FOT-003 | Verify "About Us" link in Company | Functional | High | Default Desktop Viewport | 1. Click link. | Routes directly to Company overview. |
| TC-FOT-004 | Verify "Careers" link in Company | Functional | High | Default Desktop Viewport | 1. Click link. | Routes to Job Board. |
| TC-FOT-005 | Verify "Contact Us" link in Company | Functional | High | Default Desktop Viewport | 1. Click link. | Routes to Contact Form / Intercom hook. |
| TC-FOT-006 | Verify "VosynVerse" link in Products | Functional | High | Default Desktop Viewport | 1. Click link. | Routes to Verse landing. |
| TC-FOT-007 | Verify "VosynCore" link in Products | Functional | High | Default Desktop Viewport | 1. Click link. | Routes to Core landing. |
| TC-FOT-008 | Verify "Privacy Policy" link in Resources | Functional | Critical | Default Desktop Viewport | 1. Click link. | Legal Privacy policy securely renders. |
| TC-FOT-009 | Verify "Accessibility" Statement link | Functional | High | Default Desktop Viewport | 1. Click link. | Accessibility commitments render properly. |
| TC-FOT-010 | Verify Newsletter input visibility | Functional | Critical | Default Desktop Viewport | 1. Locate text entry box. | Placeholder text indicates "Enter email" format. |
| TC-FOT-011 | Verify Newsletter invalid email submission | Negative | High | Default Desktop Viewport | 1. Type `invalid#test` 2. Submit. | Frontend validation blocks request and shows warning inline. |
| TC-FOT-012 | Verify Newsletter empty submission | Negative | Medium | Default Desktop Viewport | 1. Click "Sign Up Now!". | Button handles empty string blocking server payload. |
| TC-FOT-013 | Verify Newsletter successful format | Functional | Critical | Live Server | 1. Enter `qa-test-1@example.com` 2. Submit. | Network returns 200 OK / 201 Created. Success state renders. |
| TC-FOT-014 | Verify LinkedIn Icon targeting | Functional | High | Default Desktop Viewport | 1. Locate social row. | `href` points to `linkedin.com/company/vosyn`. |
| TC-FOT-015 | Verify Social security attribute | Validation | Medium | Default Desktop Viewport | 1. Inspect LinkedIn tag. | Contains `rel="noopener noreferrer"` for `target="_blank"`. |
| TC-FOT-016 | Verify Risk Disclosure Header | Functional | Medium | Default Desktop Viewport | 1. Locate text below social. | "Read Full Risk Disclosure" appears. |
| TC-FOT-017 | Verify Risk Disclosure Accordion trigger | Functional | High | Default Desktop Viewport | 1. Click "Read Full Disclosure". | Hidden text blocks expand visibly shifting layout down. |
| TC-FOT-018 | Verify Dynamic Copyright Year | Logic | Low | Script Inspection | 1. Intersect Copyright text. | Date pulls programmatic year (2025/2026) dynamically instead of hardcoded string. |
| TC-FOT-019 | Verify "Go to Top" button appearance | Functional | Low | Default Desktop Viewport | 1. Scroll entirely down. | Floating anchor UI triggers. |
| TC-FOT-020 | Verify "Go to Top" functionality | Functional | High | Default Desktop Viewport | 1. Click Top button. | Javascript initiates `window.scrollTo(0)` smooth behavior. |
| TC-FOT-021 | Verify Mobile columns stack | Functional | Critical | Mobile Viewport | 1. Resize <768px. | 4 columns stack rigidly into one vertical flexbox. |
| TC-FOT-022 | Verify Mobile click targets in footer | Validation | High | Mobile Viewport | 1. Inspect Links. | Touch radius minimums (min 44px) exist preventing fat-finger misclicks. |
| TC-FOT-023 | Accessibility: Newsletter label associated | Validation | High | Accessibility Audit | 1. Check ID matching. | `<label for="x">` strictly paired with `<input id="x">`. |
| TC-FOT-024 | Keyboard traps inside Disclosure accordion | Validation | Medium | Keyboard Only | 1. Tab into disclosure. | Spacebar opens/closes, and Tab escapes cleanly. |
| TC-FOT-025 | Footer color contrast | Validation | Critical | Accessibility Audit | 1. Scan hex colors. | Copyright and Policy subtexts maintain >4.5:1 ratio over dark footer CSS. |

### Footer Edge Cases (5 Cases)
| Test Case ID | Title | Type | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|---|
| TC-FOT-E01 | Newsletter XSS string injection | Edge | High | Database Active | 1. Input `<script>alert(1)</script>` 2. Submit. | Submits escaped or sanitizes entirely via WAF/Frontend guard. |
| TC-FOT-E02 | Long email payload limits | Edge | Medium | Database Active | 1. Input 350-character random string. | Input limits prevent buffer overrun payload requests. |
| TC-FOT-E03 | Rapid toggling of Risk Disclosure | Edge | Low | Viewport Idle | 1. Click disclosure 20 times. | Accordion states do not flip asynchronously or hang open permanently. |
| TC-FOT-E04 | Viewport switch while accordion open | Edge | Low | Desktop with Accordion Opened | 1. Shrink viewport linearly to Mobile. | Content reflow forces accordion into mobile-friendly box model dynamically. |
| TC-FOT-E05 | Missing Legal link 404 handler | Edge | High | Server config | 1. Hard-refresh Footer -> Click Policy. | If CDN fails, router catches error via soft 404/500 Fallback UI. |
