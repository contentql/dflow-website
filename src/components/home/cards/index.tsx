'use client'

import React from 'react'
import { useId } from 'react'

const grid = [
  {
    title: 'Blazing Fast Deployments',
    description:
      'Deploy your applications in seconds with our optimized infrastructure, ensuring minimal downtime and maximum efficiency.',
  },
  {
    title: 'Auto-Scaling',
    description:
      'Automatically scale your applications based on traffic demands, ensuring high performance without manual intervention.',
  },
  {
    title: 'Custom Domains & SSL',
    description:
      'Easily configure custom domains with free SSL certificates to ensure secure and professional deployments.',
  },
  {
    title: 'Real-Time Logs & Monitoring',
    description:
      'Track deployment status and debug issues with real-time logs, performance metrics, and error tracking.',
  },
  {
    title: 'GitHub & GitLab Integration',
    description:
      'Seamlessly connect your repositories and enable continuous deployment with every push to your GitHub or GitLab repo.',
  },
  {
    title: 'Database & Storage Support',
    description:
      'Deploy applications with built-in support for databases like PostgreSQL, MongoDB, and cloud storage solutions.',
  },
  {
    title: 'Environment Variables Management',
    description:
      'Securely manage and configure environment variables to customize your application across different environments.',
  },
  {
    title: 'Team Collaboration',
    description:
      'Invite team members, manage roles, and collaborate on deployments with fine-grained access control.',
  },
]

export function FeatureSection() {
  return (
    <div className='py-20'>
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Why Choose Dokflow?
      </h1>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
        {grid.map((feature, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-md bg-card p-6'
          >
            <Grid size={20} />
            <p className='relative z-20 text-lg font-medium'>{feature.title}</p>
            <p className='relative z-20 mt-4 text-muted-foreground'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][]
  size?: number
}) => {
  const p: [number, number][] = pattern ?? Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ])

  return (
    <div className='pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]'>
      <div className='absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]'>
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x={-12}
          y={4}
          squares={p}
          className='absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay'
        />
      </div>
    </div>
  )
}

type GridPatternProps = React.SVGProps<SVGSVGElement> & {
  width: number
  height: number
  x?: number
  y?: number
  squares?: [number, number][]
}

export function GridPattern({
  width,
  height,
  x = 0,
  y = 0,
  squares = [],
  ...props
}: GridPatternProps) {
  const patternId = useId()

  // Ensure uniqueness of square coordinates
  const uniqueSquares = Array.from(
    new Set(squares.map(([sx, sy]) => `${sx}-${sy}`))
  ).map((key) => key.split('-').map(Number) as [number, number])

  return (
    <svg aria-hidden='true' {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill='none' />
        </pattern>
      </defs>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {uniqueSquares.length > 0 && (
        <svg x={x} y={y} className='overflow-visible'>
          {uniqueSquares.map(([squareX, squareY]) => (
            <rect
              strokeWidth='0'
              key={`${squareX}-${squareY}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

