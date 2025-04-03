import { withContentCollections } from '@content-collections/next'
import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX()

const nextConfig = {
  /* config options here */
  images: {
    domains: [
      'assets.aceternity.com',
      'randomuser.me',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
    ],
  },
}

// withContentCollections must be the outermost plugin
export default withContentCollections(withMDX(nextConfig))
