import { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import path from 'path';

const withVanillaExtract = createVanillaExtractPlugin();

export const config: NextConfig = {
  transpilePackages: ['@acme/ui'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default withVanillaExtract(config);