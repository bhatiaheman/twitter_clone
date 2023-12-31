import React from 'react'
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai';
import {IoStatsChart, IoShareOutline} from 'react-icons/io5';


const MainComponent = () => {
  return (
    <main className=' flex w-[60%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='text-xl font-bold backdrop-blur bg-black/10 sticky top-0 p-6 '>
            Home
          </h1>
          <div className='border-t-[0.5px] px-4 border-b-[0.5px] py-4 flex items-strech space-x-2 border-gray-600  relative'>
            <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
            <div className='flex flex-col w-full h-full'>
              <input 
                className='w-full h-full  placeholder:text-gray-600 border-gray-600 border-b-[0.5px] p-4  bg-transparent outline-none border-none '
                type='text' 
                placeholder="What's happening?"
              />
              <div className='w-full justify-between items-center flex'>
                <div>

                </div>
                <div className='w-full max-w-[100px]'>
                  <button className='rounded-full  w-full bg-primary px-4 py-2 
                   text-lg  text-center hover:bg-opacity-70 
                   trasition duration-200 font-bold'
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            {
              Array.from({length:5}).map((_,i) => (
                <div key={i} 
                className='border-b-[0.5px] p-4 border-gray-600  flex space-x-4'
              >
                <div>
                  <div className='w-10 h-10 bg-slate-200 rounded-full'/>
                </div>
                <div className='flex flex-col '>
                  <div className='flex items-center w-full justify-between'>
                    <div className='flex items-center space-x-1'>
                    <div className='font-bold'>club of coders</div>
                    <div className='text-gray-500'>@clubofcoders</div>
                    <div className='text-gray-500'>
                      <BsDot/>
                    </div>
                    <div className='text-gray-500'>1 hour ago</div>
                    </div>
                    <div>
                      <BsThreeDots/>
                    </div>
                  </div>
                  <div className='text-white text-base my-1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores libero, suscipit vel assumenda asperiores sunt iure ipsam sit? Sint exercitationem hic consequuntur doloribus velit voluptatum eos saepe, blanditiis facere illo corporis ipsam, beatae ex vero! Placeat consequuntur facilis dignissimos deserunt nisi, soluta at dolores nemo quas incidunt recusandae, alias architecto. Officia, aliquid neque quaerat voluptatibus, necessitatibus aliquam enim aperiam eius culpa laborum nobis recusandae esse provident fugiat voluptas quisquam asperiores in laboriosam alias expedita, possimus accusamus! Eum unde neque quae dignissimos corrupti ducimus veniam, illum ratione omnis doloremque eveniet modi autem dolore, hic officia rerum earum aperiam. Molestiae, laboriosam ipsa?
                  </div>
                  <div className='bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2'>

                  </div>
                  <div className='flex items-center justify-start space-x-20 mt-2 w-full'>
                    <div className='rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer'>
                      <BsChat/>
                    </div>
                    <div className='rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer'>
                      <AiOutlineRetweet/>
                    </div>
                    <div className='rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer'>
                      <AiOutlineHeart/>
                    </div>
                    <div className='rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer'>
                      <IoStatsChart/>
                    </div>
                    <div className='rounded-full hover:bg-white/10 transition duration-200  p-3 cursor-pointer'>
                      <IoShareOutline/>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </main>
  )
}

export default MainComponent