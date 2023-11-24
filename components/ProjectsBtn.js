import Image from 'next/image'
import Link from 'next/link'

import { HiArrowRight } from 'react-icons/hi2'
const ProjectsBtn = () => {
  return (
    <div>
      <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-center bg-no-repeat group'>
        <Image
          src={''}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  )
}

export default ProjectsBtn
