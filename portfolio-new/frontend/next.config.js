/** @type {import('next').NextConfig} */
process.env.CI = '1';
process.env.__NEXT_AGENT_UPGRADE = 'ignore';

// Content-Security-Policy: allow only what this site actually needs.
// Fonts are self-hosted by next/font, so no external font origins are needed.
// 'unsafe-inline' for styles is required by Next.js style injection; scripts stay strict.
const apiOrigin = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://irij-jakarta.com",
  "font-src 'self' data:",
  `connect-src 'self' ${apiOrigin}`,
  "frame-src 'self' https://dafinwork.github.io https://klikrekrut.com https://kaosdilio.com https://irij-jakarta.com",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  ...(process.env.NODE_ENV === 'production' ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }] : []),
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
