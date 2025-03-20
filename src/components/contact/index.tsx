import { Button } from '../ui/button'

const ContactSection = () => {
  return (
    <section className='pt-28'>
      <div className='mx-auto max-w-screen-md px-4 py-8 md:px-6 lg:px-8 lg:py-16'>
        <h1 className='mx-auto max-w-5xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
          Get in Touch with Us
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground'>
          Have questions or need assistance? We&apos;re here to help! Reach out
          to us, and our team will get back to you as soon as possible.
        </p>
        <form action='#' className='space-y-8 py-10'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='block w-full rounded-lg border border-input bg-transparent p-2.5 shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-primary'
              placeholder='your-email@example.com'
              required
              aria-label='Enter your email'
            />
          </div>

          <div>
            <label htmlFor='subject' className='mb-2 block text-sm font-medium'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='block w-full rounded-lg border border-input bg-transparent p-2.5 shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-primary'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='mb-2 block text-sm font-medium'>
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              className='block w-full rounded-lg border border-input bg-transparent p-2.5 shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-primary'
              placeholder='Leave a comment...'></textarea>
          </div>
          <Button
            type='submit'
            className='animate-shimmer bg-[linear-gradient(110deg,#6B44C2,45%,#7F55E2,55%,#6B44C2)] bg-[length:200%_100%]'>
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
