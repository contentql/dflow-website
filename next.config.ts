import type { NextConfig } from 'next'
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com', 'randomuser.me','images.unsplash.com','avatars.githubusercontent.com'],
  },
}


// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);