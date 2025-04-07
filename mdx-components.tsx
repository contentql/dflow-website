// Assume you're using Fumadocs UI
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'
import { Callout } from 'fumadocs-ui/components/callout'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import defaultComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import AWS from '@/app/(docs)/components/ui/SVG/AWS'
import Azure from '@/app/(docs)/components/ui/SVG/Azure'
import DigitalOcean from '@/app/(docs)/components/ui/SVG/DigitalOcean'
import GCP from '@/app/(docs)/components/ui/SVG/GoogleCloudPlatform'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    AWS,
    Azure,
    DigitalOcean,
    GCP,
    Callout,
    Card,
    Cards,
    File,
    Folder,
    Files,
    Step,
    Steps,
    Accordion,
    Accordions,
  }
}
