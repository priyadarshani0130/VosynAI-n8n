const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1. Test Plan PDF
  await page.setContent(`
    <style>body { font-family: 'Helvetica Neue', sans-serif; padding: 40px; line-height: 1.6; color: #333; } h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; } h3 { color: #2980b9; }</style>
    <h1>Vosyn.ai - Master QA Test Plan</h1>
    <h3>1. Scope & Objectives</h3>
    <p>To perform exhaustive automated regression testing on the vosyn.ai homepage to ensure layout stability, logical routing, semantic accessibility, and responsive behavior across viewports.</p>
    <h3>2. Functional Areas in Scope</h3>
    <ul>
      <li><strong>Header & Navigation</strong>: Verification of sticky headers, dynamic glassmorphism, mobile burger menu navigation, and dropdown accessibility.</li>
      <li><strong>Hero Section</strong>: Validating core value-proposition copy ("Break Barriers, Build Connections"), background animation load states, and primary Call-To-Action routing.</li>
      <li><strong>Features & Content</strong>: Data verification of statistics (90% preference, $46B lost, 80% enterprise), image loads, and multi-column viewport stacking.</li>
      <li><strong>Footer Modules</strong>: Validation of all 4 columns, legal links, external social targets, interactive newsletters, and scroll-to-top utilities.</li>
    </ul>
    <h3>3. Resources & Environment</h3>
    <p><strong>Framework:</strong> Playwright Test (Node.js / TypeScript)<br/>
    <strong>Browsers:</strong> Desktop Chromium, Mobile Chrome (Pixel 5 emulated)</p>
    <h3>4. Test Strategy</h3>
    <p>Data-driven visual and structural assertions. Exactly 25 critical paths tested per targeted functional area, totaling 100 test cases per deployment.</p>
  `);
  await page.pdf({ path: 'Vosyn_Test_Plan.pdf', format: 'A4' });

  // 2. Test Cases PDF
  await page.setContent(`
    <style>body { font-family: 'Helvetica Neue', sans-serif; padding: 40px; font-size: 13px; color: #333; } h1 { color: #2c3e50; border-bottom: 2px solid #3498db; } table { width: 100%; border-collapse: collapse; margin-top: 20px; } th, td { border: 1px solid #ddd; padding: 10px; text-align: left; } th { background-color: #f8f9fa; }</style>
    <h1>Vosyn.ai - Comprehensive Test Cases Overview</h1>
    <table>
      <tr><th>ID Range</th><th>Functional Area</th><th>Coverage Description</th><th>Expected Condition</th></tr>
      <tr><td>TC001 - TC025</td><td>Header & Nav</td><td>Verify logos, visible links, dropdowns on hover, sticky scroll triggers, glassmorphism CSS, and mobile burger menu states.</td><td>All links resolve properly. Navigation adapts to sticky at Y > 500px. Mobile hides links until toggled.</td></tr>
      <tr><td>TC026 - TC050</td><td>Hero Section</td><td>Validate explicit H1 copy, Subheading copy, CTA routing to /waitlist, video/animated background loading, and mobile text scaling without overflow.</td><td>Text strictly matches localized English copy. CTA hover fires CSS change. Background unblocked for screen readers.</td></tr>
      <tr><td>TC051 - TC075</td><td>Features</td><td>Verify "Why Vosyn?" sections, check 90%, $46B, and 80% statistics render, and VosynCore spotlight CTA interaction.</td><td>Stats are fully rendered. 3-column layout collapses to 1-column on Pixel 5 viewport. Image alt tags present.</td></tr>
      <tr><td>TC076 - TC100</td><td>Footer</td><td>Iterate all 4 column links (Company, Products, Resources, Newsletter). Mail input handles @. LinkedIn utilizes target="_blank". Go To Top resets Y coordinate.</td><td>Newsletter accepts standard RFC 5322 email string. Copyright dynamic year matches 2025. Mobile footer stacks vertically.</td></tr>
    </table>
    <p style="margin-top: 30px;"><em>Note: The fully expanded definition containing all 100 programmatic steps is stored within the associated Playwright TypeScript test repository.</em></p>
  `);
  await page.pdf({ path: 'Vosyn_Test_Cases.pdf', format: 'A4' });

  // 3. Bug Report PDF
  await page.setContent(`
    <style>body { font-family: 'Helvetica Neue', sans-serif; padding: 40px; color: #333; line-height: 1.5; } h1 { color: #c0392b; border-bottom: 2px solid #e74c3c; } .high { color: #c0392b; font-weight: bold;} .med { color: #e67e22; font-weight: bold;} .bug-box { background: #fdfdfd; border: 1px solid #eee; padding: 15px; margin-bottom: 25px; border-left: 5px solid #e74c3c; }</style>
    <h1>Vosyn.ai - Automated Bug Report</h1>
    <p><strong>Execution Date:</strong> ${new Date().toLocaleString()}</p>
    <hr style="border:0; border-top: 1px solid #eee; margin-top:20px; margin-bottom: 20px;"/>
    
    <div class="bug-box">
      <h3 style="margin-top:0;">Bug #001: Missing Footer Links on Mobile Viewport <span class="high">[HIGH]</span></h3>
      <p><strong>Description:</strong> When accessing the site via Mobile Chrome (Pixel 5 emulated), several Footer elements (Privacy Policy, Accessibility, Newsletter Subscription, LinkedIn Icon) failed to locate in the DOM resulting in a 5000ms Timeout.</p>
      <p><strong>Impact:</strong> Mobile users cannot access key legal policies or subscribe to the corporate newsletter.</p>
      <p><strong>Environment:</strong> Mobile Chrome / WebKit Mobile</p>
    </div>
    
    <div class="bug-box" style="border-left-color: #e67e22;">
      <h3 style="margin-top:0;">Bug #002: VosynCore CTA missing standard Href <span class="med">[MEDIUM]</span></h3>
      <p><strong>Description:</strong> The "Learn About VosynCore" button inside the Features spotlight returns a null <code>href</code> attribute when inspected via Playwright <code>getAttribute('href')</code>.</p>
      <p><strong>Impact:</strong> Relies on potentially fragile JavaScript <code>onClick</code> handlers rather than semantic HTML anchor tags, which harms SEO and screen reader accessibility.</p>
      <p><strong>Environment:</strong> Desktop Chromium</p>
    </div>
  `);
  await page.pdf({ path: 'Vosyn_Bug_Report.pdf', format: 'A4' });

  await browser.close();
  console.log('Successfully generated Test Plan, Test Cases, and Bug Report PDFs.');
})();
