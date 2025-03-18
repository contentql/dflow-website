'use client'

import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'James Carter',
    role: 'Software Engineer at Acme Corp',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    title: 'Seamless Deployment Experience!',
    text: 'Dokflow has completely streamlined our deployment process. With one-click deployments and real-time logs, managing our infrastructure has never been easier.',
  },
  {
    id: 2,
    name: 'Sophia Martinez',
    role: 'DevOps Lead at CloudTech',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    title: 'Reliable and Scalable!',
    text: "Dokflow's auto-scaling and custom domain support have been a game changer for our team. The seamless integration with GitHub saves us hours of work.",
  },
  {
    id: 3,
    name: 'Daniel Lee',
    role: 'Founder at StartupX',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    title: 'Perfect for Startups!',
    text: 'As a startup, we needed a simple yet powerful deployment solution. Dokflow delivered beyond our expectations, making it incredibly easy to deploy and scale our apps.',
  },
]

export default function TestimonialSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0],
  )

  return (
    <div className='mx-auto max-w-7xl py-20'>
      {' '}
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Loved by Developers & Teams
      </h1>
      <div className='mx-auto max-w-4xl rounded-md border border-border bg-card p-6 shadow-md'>
        <div className='grid gap-6 md:grid-cols-3'>
          {/* Left Side: Testimonial List */}
          <div className='space-y-4'>
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className={`flex cursor-pointer items-center gap-3 rounded-md p-3 transition ${
                  selectedTestimonial.id === testimonial.id
                    ? 'bg-sidebar-accent'
                    : 'hover:bg-sidebar-accent'
                }`}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <Image
                  height={1000}
                  width={1000}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='h-10 w-10 rounded-full border border-border'
                />
                <div>
                  <p className='font-semibold text-lg'>{testimonial.name}</p>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Highlighted Testimonial */}
          <div className='md:col-span-2'>
            <blockquote className='text-xl font-semibold'>
              “{selectedTestimonial.title}”
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
