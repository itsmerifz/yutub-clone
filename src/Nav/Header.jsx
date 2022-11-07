import React from 'react'
import { RiMicFill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className='flex items-center justify-center sticky h-16 w-full text-white gap-3 mt-3'>
      <div className='relative'>
        <input type="search" className='bg-[#101010] block rounded-full w-[500px] border border-[#1f1f1f] p-2.5' placeholder='Cari...' />
        <button className='absolute top-0 right-0 p-2 rounded-r-full w-20 bg-[#1a1a1a]'>
          <svg className='w-[30px] h-[30px] mx-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM5 9.5C5 6.47 7.47 4 9.5 4C11.53 4 14 6.47 14 9.5C14 11.53 11.53 14 9.5 14C7.47 14 5 11.53 5 9.5Z" fill="white"/>
          </svg>
        </button>
      </div>
      <button className='w-10 h-10 rounded-full bg-[#1a1a1a]'>
        <RiMicFill className='text-2xl mx-auto'/>
      </button>
    </header>
  )
}

export default Header