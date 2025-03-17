import React from 'react'

const PrivacyPolicySection = () => {
  return (
    <div className='max-w-7xlp-6 mx-auto pt-28'>
      <div className='space-y-6 py-20'>
        <h1 className='mx-auto max-w-5xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
          Privacy Policy
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-center text-base font-normal text-muted-foreground'>
          Last updated: March 2025
        </p>

        <div className='mx-auto max-w-4xl space-y-6'>
          <section>
            <h2 className='text-xl font-semibold'>1. Introduction</h2>
            <p>
              This Privacy Policy explains how Dokflow collects, uses, and
              protects your personal information.
            </p>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>2. Information We Collect</h2>
            <ul>
              <li>Personal information you provide, such as name and email.</li>
              <li>
                Usage data automatically collected when using our services.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>
              3. How We Use Your Information
            </h2>
            <ul>
              <li>To provide, maintain, and improve our services.</li>
              <li>
                To communicate updates, security notices, and support messages.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>
              4. Sharing Your Information
            </h2>
            <ul>
              <li>We do not sell your personal data.</li>
              <li>
                We may share information with trusted third-party services for
                operational purposes.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>5. Data Security</h2>
            <p>
              We take appropriate security measures to protect your data from
              unauthorized access, alteration, or disclosure.
            </p>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>6. Your Rights</h2>
            <ul>
              <li>
                You have the right to access, update, or delete your personal
                information.
              </li>
              <li>You can opt out of marketing communications at any time.</li>
            </ul>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy, and we will notify you of
              significant changes.
            </p>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicySection
