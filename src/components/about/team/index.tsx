import Image from 'next/image'

const members = [
  {
    name: 'Meschac Irung',
    role: 'Creator',
    avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
  },
  {
    name: 'Theo Balick',
    role: 'Frontend Dev',
    avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
  },
  {
    name: 'Glodie Lukose',
    role: 'Frontend Dev',
    avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
  },
  {
    name: 'Bernard Ngandu',
    role: 'Backend Dev',
    avatar: 'https://avatars.githubusercontent.com/u/31113941?v=4',
  },
]

export default function TeamSection() {
  return (
    <section className='py-20'>
      <div className='mx-auto max-w-7xl px-8 lg:px-0'>
        <h1 className='mx-auto max-w-5xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
          Meet Our Team
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground'>
          Behind Dokflow is a team of passionate developers, designers, and
          innovators dedicated to simplifying deployments. We believe in
          efficiency, scalability, and seamless workflows—helping you bring your
          projects to life with ease.
        </p>

        <div className='grid grid-cols-2 justify-items-center gap-4 py-20 md:grid-cols-4'>
          {members.map((member, index) => (
            <div key={index}>
              <div className='size-20 rounded-full border border-border bg-background p-0.5 shadow shadow-zinc-950/5'>
                <Image
                  className='aspect-square rounded-full object-cover'
                  src={member.avatar}
                  alt={member.name}
                  height='460'
                  width='460'
                  loading='lazy'
                />
              </div>
              <span className='mt-2 block'>{member.name}</span>
              <span className='block text-sm text-muted-foreground'>
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
