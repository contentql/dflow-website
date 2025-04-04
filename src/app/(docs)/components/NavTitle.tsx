import { Workflow } from 'lucide-react'

export const NavTitle = () => {
  return (
    <div className='flex items-center gap-x-2 text-2xl font-semibold'>
      <Workflow className='stroke-2 text-[#7F55E2]' />
      Dflow
    </div>
  )
}

export default NavTitle
