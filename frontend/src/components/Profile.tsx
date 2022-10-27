import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'
import Projects from './Projects'
import Calender from './Calender'
import Settings from './Settings'
import Home from './Home'

type Props = {}

const Profile = (props: Props) => {
  const [sidelin, setsidelin] = useState("Home")
  return (
    <main className='w-screen min-h-screen flex'>
      <div className='w-1/6 h-screen '>
        <Sidebar sidelink={sidelin} setsidelink={setsidelin}/>

      </div>
      <div className='w-5/6 h-screen bg-gray-100'>
        {sidelin === "Home" && <Home/>}
        {sidelin === "Overview" && <Overview/>}
        {sidelin === "Projects" && <Projects/>}
        {sidelin === "Calendar" && <Calender/>}
        {sidelin === "Settings" && <Settings/>}

        </div>
    </main>
  )
}

export default Profile