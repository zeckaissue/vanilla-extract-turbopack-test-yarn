import { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

export const config: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  experimental: { externalDir: true },
  onDemandEntries: { maxInactiveAge: 1000 * 60 * 60 },
  transpilePackages: ['@fixtures/sprinkles/src/html'],
  devIndicators: false,
};

export default withVanillaExtract(config);