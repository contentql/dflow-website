import React from 'react'

const TermsSection = () => {
  return (
    <div className='mx-auto max-w-7xlp-6 pt-28'>
       <div className='space-y-6 py-20'>
       <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center max-w-5xl mx-auto text-4xl font-bold text-transparent md:text-7xl'>
         Terms and Conditions
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-center text-base font-normal text-muted-foreground'>
        Last updated: March 2025
        </p>
     
     <div className='max-w-4xl mx-auto space-y-6'>
     <section>
        <h2 className='text-xl font-semibold'>1. Acceptance of Terms</h2>
        <p>
          By using Dokflow, you acknowledge that you have read, understood, and
          agree to these Terms. If you do not agree, please do not use our
          services.
        </p>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>2. Changes to Terms</h2>
        <p>
          We may update these Terms periodically. Continued use of Dokflow after
          changes constitutes acceptance of the updated Terms.
        </p>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>3. Use of Our Services</h2>
        <ul>
          <li>You must be at least [minimum age] years old to use Dokflow.</li>
          <li>
            You agree not to misuse our services, engage in illegal activities,
            or violate the rights of others.
          </li>
        </ul>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>4. Accounts and Security</h2>
        <ul>
          <li>
            You are responsible for maintaining the security of your account and
            credentials.
          </li>
          <li>Notify us immediately if you suspect unauthorized access.</li>
        </ul>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>5. Intellectual Property</h2>
        <ul>
          <li>
            All content, logos, and trademarks on Dokflow are owned by us or our
            licensors.
          </li>
          <li>
            You may not copy, distribute, or modify any content without
            permission.
          </li>
        </ul>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>6. Limitation of Liability</h2>
        <ul>
          <li>
            We are not liable for any damages resulting from your use of
            Dokflow.
          </li>
          <li>
            Our services are provided &ldquo;as is&rdquo; without warranties of
            any kind.
          </li>
        </ul>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to Dokflow if
          you violate these Terms.
        </p>
      </section>{' '}
      <section>
        <h2 className='text-xl font-semibold'>8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us.</p>
      </section>
     </div>
     </div>
    </div>
  )
}

export default TermsSection
