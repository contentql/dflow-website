'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import { allChangelogs } from 'content-collections'

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 90%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className='w-full pt-28' ref={containerRef}>
      <div className='mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10'>
        <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
          Stay Up to Date with Dokflow
        </h1>
        <p className='mx-auto mt-4 max-w-lg text-center text-lg text-muted-foreground'>
          Stay informed about the latest updates, new features, performance
          improvements, and bug fixes in Dokflow. We’re constantly improving to
          make your deployments seamless!
        </p>
      </div>

      <div ref={ref} className='relative mx-auto max-w-7xl pb-20'>
        {[...allChangelogs].reverse().map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:gap-10 md:pt-40'>
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-card md:left-3'>
                <div className='h-4 w-4 rounded-full border border-border bg-primary p-2' />
              </div>

              <div className='md:pl-20'>
                <h3 className='hidden text-xl font-bold text-muted-foreground md:block md:text-5xl'>
                  {item.version}
                </h3>
                <h4 className='hidden text-muted-foreground md:block'>
                  {item.date}
                </h4>
              </div>
            </div>

            <div className='relative w-full pl-20 pr-4 md:pl-4'>
              <h3 className='mb-4 block text-left text-2xl font-bold text-muted-foreground md:hidden'>
                {item.version}
              </h3>
              <h4 className='block text-muted-foreground md:hidden'>
                  {item.date}
                </h4>
              <div className='md:prose-xl prose-img:mx-auto prose-img:grid prose-img:grid-cols-2 prose-img:gap-4 prose-img:aspect-video prose-img:w-full prose-gray prose-li:text-muted-foreground prose-img:rounded-md prose-img:object-contain' dangerouslySetInnerHTML={{ __html: item.html }} />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8'>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] via-primary via-[10%] to-transparent'
          />
        </div>
      </div>
    </div>
  )
}
