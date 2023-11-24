import Image from 'next/image'
import topLeft from '../assets/top-left.jpg'


const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={topLeft}
        alt=''
        width={200}
        height={200}
        className='translate-z-0 w-full h-full'
      />
    </div>
  )
}

export default Avatar
