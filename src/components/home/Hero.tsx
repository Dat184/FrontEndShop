import Logo from '../../assets/img/logo.jpg'

export default function Hero() {
  return (
    <section className='relative w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4'>
      <div className='absolute inset-0 z-0'>
        <div className='w-full h-full bg-[#f4f1eb] opacity-90'></div>
      </div>
      <div className='container mx-auto text-center z-10 space-y-8'>
        <div className='mb-12'>
          <img src={Logo} alt='VANE STUDIO' width={300} height={150} className='mx-auto' />
        </div>
        <h1 className='text-4xl md:text-6xl font-serif font-light text-[#2a2a2a] tracking-wider'>
          Timeless Elegance in Every Detail
        </h1>
        <p className='text-lg md:text-xl text-[#2a2a2a]/80 max-w-2xl mx-auto font-light'>
          Discover our collection of meticulously crafted wallets that blend sophistication with functionality.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
          <button className='bg-[#2a2a2a] hover:bg-[#2a2a2a]/90 text-[#f5f0e6] px-8 py-3 rounded-none'>
            Shop Women's Collection
          </button>
          <button className='border-1 border-solid text-[#2a2a2a] hover:bg-[#2a2a2a]/10 px-8 py-3 rounded-none'>
            Shop Men's Collection
          </button>
        </div>
      </div>
    </section>
  )
}
