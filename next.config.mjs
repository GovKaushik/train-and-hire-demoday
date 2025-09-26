/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'standalone',

  // Image optimization
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Static export support (uncomment for static deployment)
  // output: 'export',
  // trailingSlash: true,
  // images: { unoptimized: true },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Performance headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for clean URLs
  async redirects() {
    return [
      {
        source: '/demo',
        destination: '/present',
        permanent: true,
      },
      {
        source: '/rating',
        destination: '/rate',
        permanent: true,
      },
    ]
  },

  // Bundle analysis (run with ANALYZE=true npm run build)
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
    }

    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    return config
  },
}

export default nextConfig