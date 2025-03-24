import Image from 'next/image'

const members = [
  {
    name: 'Akhil Naidu',
    role: 'CTO',
    avatar: '/images/team/akhil.png',
  },
  {
    name: 'Pavan',
    role: 'Fullstack Dev',
    avatar: '/images/team/pavan.png',
  },
  {
    name: 'Manikanta',
    role: 'Fullstack Dev',
    avatar: '/images/team/manikanta.png',
  },
  {
    name: 'Jagadeesh',
    role: 'Fullstack Dev',
    avatar: '/images/team/jagadeesh.png',
  },
  {
    name: 'Lokesh',
    role: 'Frontend Dev',
    avatar: '/images/team/lokesh.png',
  },
  {
    name: 'Charan',
    role: 'Frontend Dev',
    avatar: '/images/team/charan.png',
  },
]

export default function TeamSection() {
  return (
    <section className='px-4 py-20 md:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
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
