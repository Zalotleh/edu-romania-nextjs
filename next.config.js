const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['edu-romania.com', 'images.unsplash.com'],
  },
}

module.exports = withNextIntl(nextConfig)
