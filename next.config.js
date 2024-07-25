/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, options) =>
    {
        config.module.rules.push({
            // test: /\.pdf$/i,
            // type: 'asset/source'
            test: /\.pdf$/,
            use: 'file-loader',
        });

        return config
    },
}

module.exports = nextConfig
