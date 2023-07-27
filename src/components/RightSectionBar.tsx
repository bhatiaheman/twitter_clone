import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightSectionBar = () => {
  return (
    <section className='w-full  sticky top-2  mt-2 overflow-scroll  flex flex-col items-stretch h-screen px-6'>
          <div>
            <div className='relative w-full h-full group'>
            <input type='text'
            id='searchBox'
            placeholder='Search Twitter' 
            className='outline-none peer bg-neutral-900/90  focus:border-primary focus:border-2  w-full h-full rounded-xl py-4 pl-14'/>
            <label htmlFor='searchBox' 
            className='absolute top-0 left-0 p-4 h-full flex items-center peer-focus:text-primary justify-center'>
                <BsSearch className='w-5 h-5 '/>
            </label>
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900  my-4'>
            <h3 className='font-bold text-xl my-4 p-4'>What`s Happening</h3>
            <div>
              {
                Array.from({length:5}).map((_,i) => (
                    <div key={i} className='hover:bg-white/10 last:rounded-b-xl p-4'>
                      <div className='font-bold text-lg'>#trending ${i+1}</div>
                      <div className='text-xs text-neutral-400'>35.8k</div>
                    </div>
                ))
              }
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900  my-4'>
            <h3 className='font-bold text-xl my-4 p-4'>Who to follow</h3>
            <div>
              {
                Array.from({length:5}).map((_,i) => (
                    <div key={i} 
                    className='hover:bg-white/10 flex space-x-3 items-center last:rounded-b-xl p-4 transition duration-200'>
                      
                      <div className='w-10 h-10 bg-neutral-600 rounded-full'></div>
                      <div className='flex flex-col  pl-4 '>
                        <div className='font-bold text-white'>OtherUser</div>
                        <div className='text-gray-500 text-sm'>@otheruser</div>
                      </div>
                      <div className='pl-16'>
                        <button className='rounded-full px-4 py-2 bg-white text-neutral-950'>
                          Follow
                        </button>
                      </div>
                    </div>
                ))
              }
            </div>
          </div>
        </section>
  )
}

export default RightSectionBar