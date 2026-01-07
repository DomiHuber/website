/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
  async redirects() {
    return [
      // Old article URL redirects
      {
        source: '/beyond-the-hype-why-leaders-need-bitcoin-expertise-now',
        destination: '/research/beyond-the-hype',
        permanent: true,
      },
      {
        source: '/btc-as-big-as-internet-bitcoin-intelligence',
        destination: '/research/bitcoin-intelligence-advantage',
        permanent: true,
      },
      {
        source: '/introduction-bitcoin-treasury-companies',
        destination: '/research/SBI-001',
        permanent: true,
      },
      {
        source: '/state-of-bitcoin-payment-stack',
        destination: '/research/SBI-002',
        permanent: true,
      },
      {
        source: '/switzerlands-digital-currency-strategy',
        destination: '/research/SBI-003',
        permanent: true,
      },
      {
        source: '/inflation-by-design-deflation-by-technology',
        destination: '/research/SBI-004',
        permanent: true,
      },
      {
        source: '/a-quantum-of-solace',
        destination: '/research/SBI-005',
        permanent: true,
      },
      {
        source: '/abundant-power-real-value',
        destination: '/research/SBI-006',
        permanent: true,
      },
      {
        source: '/the-rise-and-reckoning-of-the-bitcoin-treasury',
        destination: '/research/SBI-007',
        permanent: true,
      },
      // Old page redirects
      {
        source: '/meet-the-team',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/meet-the-team/:slug',
        destination: '/team/:slug',
        permanent: true,
      },
      {
        source: '/switzerland-bitcoin-values',
        destination: '/switzerland-bitcoin',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
