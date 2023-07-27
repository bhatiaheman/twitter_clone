import React from 'react'
import {BiHomeCircle, BiUser} from 'react-icons/bi';
import {HiOutlineHashtag} from 'react-icons/hi';
import {BsBell, BsBookmark, BsThreeDots, BsTwitter} from 'react-icons/bs';
import {BsEnvelope} from 'react-icons/bs';
import Link from 'next/link';


const NAVIGATION_ITEMS = [
    {
      title: 'Twitter',
      icon: BsTwitter
    },
    {
      title:'Home',
      icon: BiHomeCircle
    },
    {
      title: "Explore",
      icon: HiOutlineHashtag
    },
    {
      title: "Notification",
      icon: BsBell
    },
    {
      title: "Messages",
      icon: BsEnvelope
    },
    {
      title: "BookMarks",
      icon: BsBookmark
    },
    {
      title: "Profile",
      icon: BiUser
    }
  ]

const LeftSidebar = () => {
  return (
    <section className=' sticky top-0 w-[25%] flex flex-col items-stretch h-screen '>
          <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
          {
          NAVIGATION_ITEMS.map((item)=>(
            <Link 
            className='hover:bg-white/10 text-xl transition duration-200 
            flex items-center justify-start w-fit space-x-6 rounded-3xl py-2 px-6' 
            href={`/${item.title.toLowerCase()}`} 
            key={item.title}
            >
              <div>
                <item.icon/>
              </div>
                {item.title !== "Twitter"  && <div>{item.title}</div>}
            </Link>
          ))
          }
          <button className='rounded-full  m-4 w-[90%] bg-primary p-4 text-xl  text-center hover:bg-opacity-70 trasition duration-200'>
            Tweet
          </button>
          </div>
          <div>
          <button className='rounded-full flex items-center space-x-2  w-full bg-transparent p-4  text-center
           hover:bg-white/10 trasition duration-200  justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='rounded-full  bg-slate-400 w-10 h-10'>
              </div>
              <div className='text-left text-sm'>
                <div className='font-semibold'>Club of coders</div>
                <div className=''>@clubofcoders</div>
              </div>
            </div>
            <div>
              <BsThreeDots/>
            </div>
          </button>
          </div>
        </section>
  )
}

export default LeftSidebar