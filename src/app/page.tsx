import LeftSidebar from '@/components/LeftSidebar'
import MainComponent from '@/components/MainComponent'
import RightSectionBar from '@/components/RightSectionBar'
import React from 'react'



const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[80vw] w-full h-full  flex relative '>
        <LeftSidebar/>
        <MainComponent/>
        <RightSectionBar/>
      </div>
    </div>
  )
}

export default page