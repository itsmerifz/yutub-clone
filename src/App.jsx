import { useState } from 'react'
import './App.css'
import Main from './Components/Main'
import Header from './Nav/Header'
import Sidebar from './Nav/Sidebar'

function App() {

  return (
    <div className="flex flex-1 min-h-screen bg-[#0f0f0f] overflow-auto">
      <Sidebar/>
      <div className='flex flex-col w-full h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-thumb-gray-500'>
        <Header/>
        <Main/>
      </div>
    </div>
  )
}

export default App
