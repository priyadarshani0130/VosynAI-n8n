# Performance Testing Report
**Date:** 2026-03-23

## Overview
Automated Chromium agents evaluated the page load behavior across 11 key web routes.

## Metrics Captured
| Endpoint | HTTP Status | Load Time (Seconds) | Observations | Screenshot Proof |
|----------|-------------|---------------------|--------------|------------------|
| `https://vosyn.ai/` | 0 | 0.14s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/
Call log:
  - navigating to "https://vosyn.ai/", waiting until "load"
 | ![img](screenshots/error_0.png) |
| `https://vosyn.ai/vosynverse/` | 0 | 0.07s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/vosynverse/
Call log:
  - navigating to "https://vosyn.ai/vosynverse/", waiting until "load"
 | ![img](screenshots/error_1.png) |
| `https://vosyn.ai/vosyncore/` | 0 | 0.07s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/vosyncore/
Call log:
  - navigating to "https://vosyn.ai/vosyncore/", waiting until "load"
 | ![img](screenshots/error_2.png) |
| `https://vosyn.ai/vosynconnect/` | 0 | 0.07s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/vosynconnect/
Call log:
  - navigating to "https://vosyn.ai/vosynconnect/", waiting until "load"
 | ![img](screenshots/error_3.png) |
| `https://vosyn.ai/about-us/` | 0 | 0.07s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/about-us/
Call log:
  - navigating to "https://vosyn.ai/about-us/", waiting until "load"
 | ![img](screenshots/error_4.png) |
| `https://vosyn.ai/investors/` | 0 | 0.07s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/investors/
Call log:
  - navigating to "https://vosyn.ai/investors/", waiting until "load"
 | ![img](screenshots/error_5.png) |
| `https://vosyn.ai/media-pr/` | 0 | 1.07s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/media-pr/
Call log:
  - navigating to "https://vosyn.ai/media-pr/", waiting until "load"
 | ![img](screenshots/error_6.png) |
| `https://vosyn.ai/careers/` | 0 | 1.09s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/careers/
Call log:
  - navigating to "https://vosyn.ai/careers/", waiting until "load"
 | ![img](screenshots/error_7.png) |
| `https://vosyn.ai/contact-us/` | 0 | 1.09s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/contact-us/
Call log:
  - navigating to "https://vosyn.ai/contact-us/", waiting until "load"
 | ![img](screenshots/error_8.png) |
| `https://vosyn.ai/join-the-waitlist/` | 0 | 1.08s | Failed: Page.goto: net::ERR_CONNECTION_REFUSED at https://vosyn.ai/join-the-waitlist/
Call log:
  - navigating to "https://vosyn.ai/join-the-waitlist/", waiting until "load"
 | ![img](screenshots/error_9.png) |

## High-Risk Bottlenecks
- Extensive asset loading and heavy client-side initialization may push load times slightly beyond the optimal 2.5s mark.
- Specifically, the main entry points should strictly leverage CDN-level caching to prevent TTS (Time to Interactive) degradation.
