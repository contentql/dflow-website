'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is Dokflow?',
    answer:
      'Dokflow is a deployment platform designed for seamless and efficient application hosting.',
  },
  {
    question: 'How does Dokflow handle scaling?',
    answer:
      'Dokflow provides auto-scaling features to ensure your application runs smoothly under varying loads.',
  },
  {
    question: 'Can I deploy custom themes?',
    answer:
      'Yes, you can deploy both organization-provided and custom-uploaded themes.',
  },
  {
    question: 'Is there a free tier available?',
    answer:
      'Dokflow offers a free tier with limited resources, allowing users to test the platform before upgrading.',
  },
  {
    question: 'What types of applications can I deploy?',
    answer:
      'You can deploy web applications, APIs, and static sites on Dokflow.',
  },
  {
    question: 'Does Dokflow support CI/CD?',
    answer:
      'Yes, Dokflow integrates with CI/CD pipelines for automated deployments.',
  },
]
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  

  return (
    <div className='mx-auto max-w-7xl p-6 py-20'>
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Frequently Asked Questions
      </h1>
      <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-1'>
        {faqs.map((faq, index) => (
          <div key={index} className='rounded-xl p-4 shadow-md'>
            <button
              onClick={() => toggleFAQ(index)}
              className='flex w-full items-center justify-between text-left text-lg font-medium'
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className='mt-2 text-muted-foreground'
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
