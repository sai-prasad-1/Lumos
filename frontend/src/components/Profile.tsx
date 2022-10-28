import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'
import Projects from './Projects'
import Calender from './Calender'
import Settings from './Settings'
import Home from './Home'
import Searchmodal from './Searchmodal'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { BsMailbox } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

type Props = {}

const Profile = (props: Props) => {
  const [sidelin, setsidelin] = useState("Home")
  const [searchOpen, setsearchOpen] = useState<boolean>(false)
  return (
    <main className='w-screen min-h-screen flex bg-white'>
      {searchOpen ? <Searchmodal searchOpen={searchOpen} setsearchOpen={setsearchOpen} /> : null}
      <div className='w-1/6 h-screen '>
        <Sidebar sidelink={sidelin} setsidelink={setsidelin} />

      </div>
      <div className='w-5/6 h-screen b'>
        <div className='h-[10vh] flex justify-between px-11 pt-4'>
          <h1 className='text-2xl font-semibold'>User Profile</h1>
          <div className='flex items-center'>
            <div

              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent  px-4 py-2 text-base font-medium text-black shadow-sm duration-500 hover:scale-105"
            >
              <MagnifyingGlassIcon className='text-3xl h-7 w-7  text-black' onClick={() => (setsearchOpen(!searchOpen))} />
            </div>
            <AiOutlineMail className='text-2xl h-5 w-5  text-black'/>
          </div>
        </div>
        {sidelin === "Home" && <Home />}
        {sidelin === "Overview" && <Overview />}
        {sidelin === "Projects" && <Projects />}
        {sidelin === "Calendar" && <Calender />}
        {sidelin === "Settings" && <Settings />}

      </div>
    </main>
  )
}

export default Profile