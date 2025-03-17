export default function Footer() {
  return (
    <footer className='mx-auto max-w-7xl py-6'>
      <div className='container mx-auto flex flex-col items-center justify-between px-6 md:flex-row'>
        <p className='text-sm'>
          &copy; 2025 DokFlow. All rights reserved.
        </p>
        <nav className='mt-2 flex space-x-4 md:mt-0'>
          <a href='/privacy' className='hover:text-primary'>
            Privacy Policy
          </a>
          <a href='/terms' className='hover:text-primary'>
            Terms of Service
          </a>
          <a href='/contact' className='hover:text-primary'>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
