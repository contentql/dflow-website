'use client'

import tab_1 from '/public/images/tab/tab_1.png'
import tab_2 from '/public/images/tab/tab_2.png'
import Image, { StaticImageData } from 'next/image'

import { Tabs } from '@/components/Tabs'

export function TabsSection() {
  const tabs = [
    {
      title: 'Product',
      value: 'product',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Product Tab</p>
          <DummyContent src={tab_1} />
        </div>
      ),
    },
    {
      title: 'Services',
      value: 'services',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Services tab</p>
          <DummyContent src={tab_2} />
        </div>
      ),
    },
    {
      title: 'Playground',
      value: 'playground',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Content',
      value: 'content',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Random',
      value: 'random',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ]

  return (
    <div id='tabs' className={`relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col py-28 items-start justify-start [perspective:1000px] md:h-[54rem]`}>
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
      className='absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-md object-cover object-left-top md:h-[90%]'
    />
  )
}
