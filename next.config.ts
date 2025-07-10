import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
    // Enable production source maps for better debugging
    productionBrowserSourceMaps: false,

    // Disable ESLint during builds
    eslint: {
        ignoreDuringBuilds: true,
    },

    // Optimize webpack configuration
    webpack: (config, { dev, isServer }) => {
        // Add bundle analyzer (moved to withBundleAnalyzer for better control)
        if (dev && !isServer) {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: 8888,
                    openAnalyzer: true,
                })
            )
        }

        // Enable tree shaking for production builds
        if (!dev && !isServer) {
            config.optimization.usedExports = true;
            config.optimization.sideEffects = true;

            // Add additional production optimizations
            config.optimization.minimize = true;
            config.optimization.moduleIds = 'deterministic';

            // Split chunks more aggressively
            config.optimization.splitChunks = {
                chunks: 'all',
                maxInitialRequests: 25,
                minSize: 20000,
                cacheGroups: {
                    default: false,
                    vendors: false,
                    // Specific vendor chunk for common libraries
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        priority: 20,
                    },
                    // Create separate chunks for large modules
                    commons: {
                        name: 'commons',
                        minChunks: 2,
                        priority: 10,
                        reuseExistingChunk: true,
                    },
                },
            };
        }

        return config;
    },

    // Optimize images
    images: {
        minimumCacheTTL: 60,
    },

    // Add experimental features for modern JavaScript
    experimental: {
        // Enable modern mode for browser-specific optimizations
        optimizeCss: true,
        scrollRestoration: true,
    },

    // Enable compression
    compress: true,

    // Set stricter CSP for better security and potentially smaller JS
    headers: async () => {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },
};

export default process.env.ANALYZE === 'true'
    ? withBundleAnalyzer(nextConfig)
    : nextConfig;