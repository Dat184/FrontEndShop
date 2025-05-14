import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <div className='bg-[#f4f1eb] min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Hero />
      </main>
    </div>
  )
}
