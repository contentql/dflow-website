'use client'

import createGlobe from 'cobe'
import { Check } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

import { cn } from '@/utils/util'

export function AboutFeaturesSection() {
  const feature = {
    title: 'Deploy in seconds',
    description:
      'With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.',
    skeleton: <SkeletonFour />,
    className: '',
  }

  return (
    <div className='relative z-20 mx-auto max-w-7xl py-20'>
      <div className='px-4 md:px-6 lg:px-8'>
        <h1 className='mx-auto max-w-5xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
          Streamline Your Deployments with Ease
        </h1>

        <p className='mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground'>
          Dokflow simplifies the deployment process, making it faster and more
          efficient. Whether you&apos;re using pre-built themes or uploading
          custom ones, our platform ensures smooth, scalable, and hassle-free
          deployments. Focus on building—let us handle the rest!
        </p>
      </div>

      <div className='relative'>
        <div className='mt-12'>
          <FeatureCard key={feature.title} className={feature.className}>
            {/* <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription> */}
            <div className='w-full pl-4 md:pl-6 lg:pl-8'>
              <div className='inline-flex bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-3 font-medium text-transparent'>
                Why Choose Dokflow?
              </div>
              <ul className='space-y-5'>
                <li className='flex gap-2'>
                  <Check />
                  Deploy your projects in just a few clicks with minimal setup.
                </li>
                <li className='flex gap-2'>
                  <Check />
                  Ensure smooth and reliable performance at any scale.
                </li>
                <li className='flex gap-2'>
                  <Check />
                  Use organization-provided themes or upload custom ones.
                </li>
                <li className='flex gap-2'>
                  <Check />
                  Reduce manual effort with streamlined deployment pipelines.
                </li>
                <li className='flex gap-2'>
                  <Check />
                  Works with your favorite tools and frameworks.
                </li>
              </ul>
            </div>
            <div className='h-full w-full'>{feature.skeleton}</div>
          </FeatureCard>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(`relative flex overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60'>
      <Globe className='absolute -bottom-80 -right-10 md:-bottom-72 md:-right-10' />
    </div>
  )
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.4, 0.3, 0.8],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: state => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
      className={className}
    />
  )
}
