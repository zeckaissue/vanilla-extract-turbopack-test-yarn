import { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

export const config: NextConfig = {
  transpilePackages: ['@acme/ui'],
};

export default withVanillaExtract(config);