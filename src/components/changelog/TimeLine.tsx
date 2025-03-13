import { Timeline } from '../TimeLine'
import Image from 'next/image'
import React from 'react'

export function TimelineSection() {
  const data = [
    {
      title: '2025',
      content: (
        <div>
          <p className='mb-8 font-normal'>
            Built and launched Dokflow, a deployment platform designed to
            simplify and streamline website deployments.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='https://assets.aceternity.com/templates/startup-1.webp'
              alt='startup template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/templates/startup-2.webp'
              alt='startup template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/templates/startup-3.webp'
              alt='startup template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/templates/startup-4.webp'
              alt='startup template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2024',
      content: (
        <div>
          <p className='mb-8 font-normal'>
            Started working on Dokflow, focusing on deployment automation,
            integrations, and a seamless user experience.
          </p>
          <p className='mb-8 font-normal'>
            The platform includes features like one-click deployments, custom
            domains, and real-time status tracking.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='https://assets.aceternity.com/pro/hero-sections.png'
              alt='hero template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/features-section.png'
              alt='feature template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/pro/bento-grids.png'
              alt='bento template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/cards.png'
              alt='cards template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p className='mb-4 font-normal'>
            Recent updates in Dokflow deployment platform:
          </p>
          <div className='mb-8'>
            <div className='flex items-center gap-2 text-muted-foreground'>
              ✅ Added support for custom domains
            </div>
            <div className='flex items-center gap-2 text-muted-foreground'>
              ✅ Introduced real-time deployment logs
            </div>
            <div className='flex items-center gap-2 text-muted-foreground'>
              ✅ Improved UI for managing deployed sites
            </div>
            <div className='flex items-center gap-2 text-muted-foreground'>
              ✅ Integrated webhook support for CI/CD automation
            </div>
            <div className='flex items-center gap-2 text-muted-foreground'>
              ✅ Enhanced security with API key authentication
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='https://assets.aceternity.com/pro/hero-sections.png'
              alt='hero template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/features-section.png'
              alt='feature template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/pro/bento-grids.png'
              alt='bento template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <Image
              src='https://assets.aceternity.com/cards.png'
              alt='cards template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className='mx-auto max-w-7xl'>
      <Timeline data={data} />
    </div>
  )
}
