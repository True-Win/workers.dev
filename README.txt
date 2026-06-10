TrueWin UAE - Bilingual Site (English + Arabic)
===============================================

LANGUAGES
  English (default)  - root paths, e.g. /  /bonuses/  /terms/
  Arabic (RTL)       - under /ar/, e.g. /ar/  /ar/bonuses/  /ar/terms/
  A language switcher (EN | عربي) sits in every header and links to the
  exact counterpart page in the other language (not just the homepage).
  Arabic pages use dir="rtl", lang="ar", and the Cairo font for Arabic text.

PAGES (each exists in EN and AR)
  /            and /ar/                     - landing page
  /bonuses/    and /ar/bonuses/             - bonuses (service page, 2 images)
  /mobile-app/ and /ar/mobile-app/          - app (service page, 2 images)
  /about/      and /ar/about/               - About
  /contact/    and /ar/contact/             - Contact & Support (+ FAQ)
  /responsible-gaming/ + /ar/...            - Responsible Gaming
  /terms/      and /ar/terms/               - Terms & Conditions
  /privacy/    and /ar/privacy/             - Privacy Policy
  /play-truewin/                            - loader, redirects after 1.5s to https://www.time4bets504.com/
                                              after 1.5s (noindex, shared)

SHARED FILES
  styles.css   - all styles incl. RTL rules ([dir="rtl"] ...) and lang switcher
  script.js    - mobile menu toggle (works for both languages)
  assets/      - logo.webp, favicon.ico + content images (.webp)
  robots.txt   - allows indexing, blocks /play-truewin/, points to sitemap
  sitemap.xml  - all 16 URLs (EN+AR) with xhtml:link hreflang annotations

hreflang / SEO
 - Every page has <link rel="alternate" hreflang="en|ar|x-default">,
    reciprocal between the EN and AR versions.
 - Brand-focused titles/descriptions/keywords per language
    (TrueWin / True Win / ترو وين / الإمارات / كازينو / عروض / تطبيق ...).
 - Canonical, Open Graph (with og:locale + og:locale:alternate), Twitter.
 - Structured data: Organization + WebSite (home), FAQPage (contact, per lang).
 - If the live domain differs from https://true-winae.com/, update the
    canonical/og:url/hreflang URLs and sitemap.xml accordingly.

CONTENT ACCURACY
  Copy is truthful and not overstated. Facts reflect public sources:
  TrueWin (True Win) is operated by Momentum Group / The Game LLC in Abu Dhabi,
  succeeded the Dream Island platform, sportsbook runs on BETBY. No invented
  figures, no licensing claims, no "24/7"/"instant" promises; bonuses are
  described by type and point to the official site for current terms; a neutral
  legality note advises checking local laws.

DEPLOYMENT
  Links are absolute/root-relative and each page is index.html in its own
  folder, so /ar/, /bonuses/, /ar/bonuses/ etc. resolve as clean URLs. Serve
  from a web server so root maps to this folder. For local preview run a
  server (e.g. `python3 -m http.server` from this folder); opening files via
  file:// will break root-relative links.

Added login pages: /login/ and /ar/login/ with brand-focused SEO metadata and existing site components.
