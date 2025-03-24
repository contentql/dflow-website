import { Timeline } from '../TimeLine'
import Image from 'next/image'

export function TimelineSection() {
  const data = [
    // {
    //   title: '2025',
    //   content: (
    //     <div>
    //       <p className='mb-8 text-xl'>
    //         Built and launched Dokflow, a deployment platform designed to
    //         simplify and streamline website deployments.
    //       </p>
    //       <div className='grid grid-cols-2 gap-4'>
    //         <Image
    //           src='https://assets.aceternity.com/templates/startup-1.webp'
    //           alt='startup template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <Image
    //           src='https://assets.aceternity.com/templates/startup-2.webp'
    //           alt='startup template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <Image
    //           src='https://assets.aceternity.com/templates/startup-3.webp'
    //           alt='startup template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <Image
    //           src='https://assets.aceternity.com/templates/startup-4.webp'
    //           alt='startup template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   title: 'Early 2024',
    //   content: (
    //     <div>
    //       <p className='mb-8 text-lg'>
    //         Started working on Dokflow, focusing on deployment automation,
    //         integrations, and a seamless user experience.
    //       </p>
    //       <p className='mb-8 text-lg'>
    //         The platform includes features like one-click deployments, custom
    //         domains, and real-time status tracking.
    //       </p>
    //       <div className='grid grid-cols-2 gap-4'>
    //         <Image
    //           src='https://assets.aceternity.com/pro/hero-sections.png'
    //           alt='hero template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <Image
    //           src='https://assets.aceternity.com/features-section.png'
    //           alt='feature template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <Image
    //           src='https://assets.aceternity.com/pro/bento-grids.png'
    //           alt='bento template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <Image
    //           src='https://assets.aceternity.com/cards.png'
    //           alt='cards template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    {
      title: 'v1.0.0',
      date:'24 March, 2025',
      content: (
        <div>
          <p className='mb-6 text-xl font-semibold'>
            Introducing the first release of{' '}
            <span className='text-primary'>Dokflow</span> – your efficient and
            scalable deployment solution.
          </p>

          <div className='mb-8 space-y-6'>
            <div className='text-2xl font-bold'>✨ Key Features</div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>📌 Project Management</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Create and manage projects effortlessly.</li>
                <li>Deploy projects with a streamlined workflow.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>🛠️ Service Deployment</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Create and manage services within projects.</li>
                <li>Deploy services with minimal configuration.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>💻 Server Management</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Initialize and configure servers.</li>
                <li>Manage multiple servers efficiently.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>🔌 Plugins Support</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Extend functionality with plugins.</li>
                <li>Enable and disable plugins as needed.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>🌐 Domains Management</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Attach and manage custom domains.</li>
                <li>Configure domain settings easily.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>📊 Monitoring & Logs</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Track deployment logs and service health.</li>
                <li>View real-time monitoring stats.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>🔑 SSH Key Management</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Add and manage SSH keys securely.</li>
                <li>Enable secure authentication for deployments.</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-lg font-semibold'>🐙 GitHub Integration</h3>
              <ul className='ml-6 list-disc text-muted-foreground'>
                <li>Deploy applications directly from GitHub repositories.</li>
                <li>Automate deployments with GitHub Actions.</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/images/changelog/dashboard.png'
              alt='hero template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60'
            />
            <Image
              src='/images/changelog/servers.png'
              alt='feature template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60'
            />
            <Image
              src='/images/changelog/ssh.png'
              alt='bento template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60'
            />
            <Image
              src='/images/changelog/git.png'
              alt='cards template'
              width={500}
              height={500}
              className='h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
      <Timeline data={data} />
    </div>
  )
}
