import Sidebar from '@/components/Client/Aside/HomeSidebar'
import About from '@/components/Client/Main/About'
import AcademicInfo from '@/components/Client/Main/AcademicInfo'
import Committe from '@/components/Client/Main/Committe'
import Facilities from '@/components/Client/Main/Facilities'
import NoticeBoard from '@/components/Client/Main/NoticeBoard'
import TourSlider from '@/components/Client/Main/TourSlider'

export default function HomePage() {
  return (
    <div>
          <TourSlider />
          <About />
          <NoticeBoard />
          <Facilities />
          <AcademicInfo />
          <Committe />
    </div>
  )
}
