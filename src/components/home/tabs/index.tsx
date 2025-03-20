'use client'

import database from '/public/images/tab/database.png'
import domains from '/public/images/tab/domains.png'
import github from '/public/images/tab/github.png'
import logs from '/public/images/tab/logs.png'
import servers from '/public/images/tab/servers.png'
import Image, { StaticImageData } from 'next/image'

import { Tabs } from '@/components/Tabs'

export function TabsSection() {
  const tabs = [
    {
      title: 'Servers',
      value: 'Servers',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10'>
          <p className='text-xl font-bold md:text-4xl'>Servers</p>
          <p className='text-lg'>
            Easily manage and deploy your servers with scalable infrastructure
            and automated configurations.
          </p>
          <DummyContent src={servers} />
        </div>
      ),
    },
    {
      title: 'Databases',
      value: 'Databases',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10'>
          <p className='text-xl font-bold md:text-4xl'>Databases</p>
          <p className='text-lg'>
            Deploy, monitor, and optimize databases with seamless integrations
            and high availability.
          </p>
          <DummyContent src={database} />
        </div>
      ),
    },
    {
      title: 'GitHub Deploy',
      value: 'GitHub Deploy',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10'>
          <p className='text-xl font-bold md:text-4xl'>GitHub Deploy</p>
          <p className='text-lg'>
            Deploy your GitHub applications effortlessly with automated builds
            and CI/CD pipelines.
          </p>
          <DummyContent src={github} />
        </div>
      ),
    },
    {
      title: 'Domains',
      value: 'Domains',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10'>
          <p className='text-xl font-bold md:text-4xl'>Domains</p>
          <p className='text-lg'>
            Simplify domain management with DNS configuration, SSL setup, and
            seamless routing.
          </p>
          <DummyContent src={domains} />
        </div>
      ),
    },
    {
      title: 'Logs',
      value: 'Logs',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10'>
          <p className='text-xl font-bold md:text-4xl'>Logs</p>
          <p className='text-lg'>
            Track real-time logs for deployments, server activities, and
            debugging insights in one place.
          </p>
          <DummyContent src={logs} />
        </div>
      ),
    },
  ]

  return (
    <div
      id='tabs'
      className={`relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start px-4 py-28 [perspective:1000px] md:h-[58rem] md:px-6 lg:px-8`}>
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = ({ src }: { src?: StaticImageData | string }) => {
  if (!src) return null // Ensure no errors if src is missing

  return (
    <Image
      src={typeof src === 'string' ? src : src.src} // Extract `src` if it's StaticImageData
      alt='dummy image'
      width={1000}
      height={1000}
      className='absolute inset-x-0 -bottom-16 mx-auto h-[60%] w-[90%] rounded-md object-cover object-left-top md:h-[90%]'
    />
  )
}
