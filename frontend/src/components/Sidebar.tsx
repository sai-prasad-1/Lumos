import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillGithub } from "react-icons/ai"

type Props = {
  sidelink: string
  setsidelink: React.Dispatch<React.SetStateAction<string>>
}

const Sidebar = (props: Props) => {
  const sideLinks = [
    {
      name: 'Home',
      href: '/home',
      icon: 'fas fa-home',
    },
    {
      name: 'Overview',
      href: '/overview',
      icon: 'fas fa-chart-line',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: 'fas fa-project-diagram',
    },
    {
      name: 'Calendar',
      href: '/calendar',
      icon: 'fas fa-calendar-alt',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: 'fas fa-cog',
    },
  ]
  return (
    <div className='bg-gray-200 h-full p-6'>
      <div className='w-full flex flex-col items-center justify-center p-2'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'md:block hidden text-3xl' : 'md:block hidden')}>
          LUMOS
          <p className='text-xs font-semibold '>A Levantate Concern</p>
        </NavLink>
        <div className="w-full h-[1px] bg-gray-600 mt-4"></div>
      </div>
      <div className='w-full flex flex-col items-center justify-center p-2 space-y-3'>

        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className='rounded-full w-36 border-4 border-gray-500' />
        <h3 className='font-bold capitalize'>m akhill p raj</h3>
        <p className='text-sm text-gray-700'>Btech first year student </p>
        <p className='text-sm text-gray-700 flex space-x-2 items-center'> <AiFillGithub className='w-5 h-5 text-black' /><span className='font-semibold'>@makhillpraj</span></p>
      </div>

      <div className="w-full h-[1px] bg-gray-600 mt-4"></div>

      <div className='w-full flex flex-col items-center justify-center p-2 space-y-3'>
        {sideLinks.map((link) => (
          <div
            key={link.name}
          onClick={() => props.setsidelink(link.name)}
            className={`flex items-center space-x-2 text-gray-700 hover:text-gray-900 w-full p-2 rounded-lg cursor-pointer ${props.sidelink === link.name ? 'bg-secondary' : ''}`}
          >
            <i className={link.icon}></i>
            <span className='capitalize'>{link.name}</span>
          </div>


        ))}

      </div>
    </div>
  )
}

export default Sidebar