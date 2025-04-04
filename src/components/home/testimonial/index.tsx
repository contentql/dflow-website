'use client'

import Image from 'next/image'
import { useState } from 'react'

import { TypingAnimation } from '@/components/common/TypinAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Girish Chalumuri',
    role: 'Fullstack Developer',
    image: '/images/team/girish.png',
    title: 'Effortless Deployment!',
    text: 'Dflow has completely transformed how we deploy our applications. The GitHub integration is seamless, and the real-time logs make debugging a breeze!',
  },
  {
    id: 2,
    name: 'Pavan Bhaskar',
    role: 'Fullstack Developer',
    image: '/images/team/pavan.png',
    title: 'Best Platform for Managing Services!',
    text: 'Managing multiple services used to be a nightmare, but Dflow has simplified everything. The UI is intuitive, and the automation features save us so much time.',
  },
  {
    id: 3,
    name: 'Arjun Varma',
    role: 'Frontend Lead',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    title: 'Reliable and Scalable!',
    text: 'We needed a deployment solution that could scale with our growing business, and Dflow delivered. The monitoring tools are fantastic, and server management is effortless!',
  },
]

export default function TestimonialSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0],
  )

  return (
    <div className='mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8'>
      {' '}
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Loved by Developers & Teams
      </h1>
      <div className='mx-auto max-w-7xl rounded-md border border-border bg-card p-6 shadow-md'>
        <div className='grid gap-6 md:grid-cols-3'>
          {/* Left Side: Testimonial List */}
          <div className='space-y-4'>
            {testimonials.map(testimonial => {
              return (
                <div
                  key={testimonial.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-md p-3 transition ${
                    selectedTestimonial.id === testimonial.id
                      ? 'bg-sidebar-accent'
                      : 'hover:bg-sidebar-accent'
                  }`}
                  onClick={() => setSelectedTestimonial(testimonial)}>
                  <Image
                    height={1000}
                    width={1000}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='h-10 w-10 rounded-full border border-border'
                  />
                  <div>
                    <p className='text-lg font-semibold'>{testimonial.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side: Highlighted Testimonial */}
          <div className='md:col-span-2'>
            <blockquote className='text-xl font-semibold'>
              <TypingAnimation>{`${selectedTestimonial.title}`}</TypingAnimation>
            </blockquote>
            <p className='mt-2 text-muted-foreground'>
              {selectedTestimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
