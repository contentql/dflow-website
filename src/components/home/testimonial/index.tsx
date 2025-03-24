'use client'

import Image from 'next/image'
import { useState } from 'react'

import { TypingAnimation } from '@/components/common/TypinAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Rohan Sharma',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    title: 'Effortless Deployment!',
    text: 'Dokflow has completely transformed how we deploy our applications. The GitHub integration is seamless, and the real-time logs make debugging a breeze!',
  },
  {
    id: 2,
    name: 'Priya',
    role: 'DevOps Lead',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    title: 'Best Platform for Managing Services!',
    text: "Managing multiple services used to be a nightmare, but Dokflow has simplified everything. The UI is intuitive, and the automation features save us so much time." },
  {
    id: 3,
    name: 'Arjun Varma',
    role: 'Frontend Lead',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    title: 'Reliable and Scalable!',
    text: "We needed a deployment solution that could scale with our growing business, and Dokflow delivered. The monitoring tools are fantastic, and server management is effortless!"},
  {
    id: 4,
    name: 'Neha Reddy',
    role: 'Fullstack Developer',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    title: 'Super Easy Custom Domain Setup!',
    text: "Configuring custom domains used to be tricky, but with Dokflow, it’s just a few clicks. Highly recommend it for anyone managing multiple projects."},
  {
    id: 5,
    name: 'Vikram',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
    title: 'Highly Efficient!',
    text: 'We needed a deployment platform that could handle our scaling needs, and Dokflow delivered. The efficiency and automation tools are simply outstanding.',
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
