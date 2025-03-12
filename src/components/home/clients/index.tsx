// Import client images
import client_1 from '/public/images/clients/client_1.png'
import client_2 from '/public/images/clients/client_2.png'
import client_3 from '/public/images/clients/client_3.png'
import client_4 from '/public/images/clients/client_4.png'
import client_5 from '/public/images/clients/client_5.png'
import client_6 from '/public/images/clients/client_6.png'
import client_7 from '/public/images/clients/client_7.png'
import client_8 from '/public/images/clients/client_8.png'
import Image from 'next/image'
import React from 'react'

const clients = [
  { src: client_1, alt: 'Client 1' },
  { src: client_2, alt: 'Client 2' },
  { src: client_3, alt: 'Client 3' },
  { src: client_4, alt: 'Client 4' },
  { src: client_5, alt: 'Client 5' },
  { src: client_6, alt: 'Client 6' },
  { src: client_7, alt: 'Client 7' },
  { src: client_8, alt: 'Client 8' },
]

const ClientSection = () => {
  return (
    <div className='mx-auto max-w-7xl px-6 py-20'>
      <h2 className='pb-5 text-center text-lg font-semibold'>
        Powering Teams Around the World
      </h2>
      <div className='grid grid-cols-2 justify-items-center gap-5 md:grid-cols-4'>
        {clients.map((client, index) => (
          <div key={index} className='relative h-20 w-32'>
            <Image
              src={client.src}
              alt={client.alt}
              fill
              className='object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientSection
