'use client'

import { Workflow } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from './ui/button'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-white hover:opacity-[0.9]'>
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='overflow-hidden rounded-2xl border border-border bg-background shadow-xl backdrop-blur-sm'>
                <motion.div
                  layout // layout ensures smooth animation
                  className='h-full w-max p-4'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  // setActive,
  children,
}: {
  // setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  const router = useRouter()
  return (
    <nav
      // onMouseLeave={() => setActive(null)}
      className='relative flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 shadow-input'>
      <Link
        href={'/'}
        className='flex items-center gap-2 text-2xl font-semibold'>
        <Workflow className='text-primary' />
        <p>Dokflow</p>
      </Link>
      {/* Centered children */}
      <div className='flex flex-1 justify-center gap-5'>{children}</div>

      {/* Sign-in button aligned to the end */}
      <div className='flex items-center gap-2'>
        <Button
          onClick={() => router.push('https://discord.gg/gKFjGQQQ')}
          variant={'outline'}
          className='hover:bg-card hover:text-foreground'>
          <svg
            role='img'
            className='h-6 w-6 fill-white'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'></path>
          </svg>
          Discord
        </Button>
        <Button className='animate-shimmer bg-[linear-gradient(110deg,#6B44C2,45%,#7F55E2,55%,#6B44C2)] bg-[length:200%_100%]'>
          Sign in
        </Button>
      </div>
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className='shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='mb-1 text-xl font-bold text-white'>{title}</h4>
        <p className='max-w-[10rem] text-sm text-neutral-300'>{description}</p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({
  children,
  ...rest
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link {...rest} className='text-neutral-200 hover:text-primary'>
      {children}
    </Link>
  )
}
