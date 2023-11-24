import Image from 'next/image'

const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-7 z-10 '>
      <Image
        src={''}
        width={260}
        height={260}
        alt=''
        className='w-full h-full'
      />
    </div>
  )
}

export default Circles
