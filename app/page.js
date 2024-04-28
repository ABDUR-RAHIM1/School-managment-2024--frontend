import Headline from '@/components/Client/Headline'
import About from '@/components/Client/Main/About'
import NoticeBoard from '@/components/Client/Main/NoticeBoard'
import TourSlider from '@/components/Client/Main/TourSlider'
import MainSlider from '@/components/Client/MainSlider'
import Navbar from '@/components/Client/Navbar'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <MainSlider />
      <Headline />
      <Navbar />
      <div className='mainAsideWrapper'>
        <main>
          <TourSlider /> 
          <About />
          <NoticeBoard />
        </main>
        <aside>
          sidebar
        </aside>
      </div>
    </div>
  )
}
