import { getPage, getPages } from '../source'
import { DocsBody, DocsPage } from 'fumadocs-ui/page'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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

  return (
    <DocsPage
      toc={page.data.exports.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
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
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
