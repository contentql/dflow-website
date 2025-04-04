import { Feedback } from '../../components/Feedback'
import { getPage, getPages } from '../source'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import posthog from 'posthog-js'

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const resolvedParams = await params
  const page = getPage(resolvedParams.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default

  const lastUpdate = page.data.exports.lastModified

  return (
    <DocsPage
      toc={page.data.exports.toc}
      full={page.data.full}
      lastUpdate={lastUpdate}
      editOnGithub={{
        owner: 'contentql',
        repo: 'dflow-website',
        path: `/content/docs/${page.file.path}?plain=1`,
      }}
      tableOfContent={{
        style: 'clerk',
      }}>
      <DocsBody>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <MDX />
        <Feedback
          onRateAction={async (url, feedback) => {
            'use server'

            posthog.capture('on_rate_docs', feedback)
          }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map(page => ({
    slug: page.slugs,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const resolvedParams = await params
  const page = getPage(resolvedParams.slug)

  if (page == null) notFound()

  return {
    title: `${page.data.title} | Dflow`,
    description: page.data.description,
  } satisfies Metadata
}
