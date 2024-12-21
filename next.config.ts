import type { NextConfig } from "next";
import withPWA from 'next-pwa'

const pwa = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true
})

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
		ignoreBuildErrors: true
	}
};

export default pwa(nextConfig as any);
