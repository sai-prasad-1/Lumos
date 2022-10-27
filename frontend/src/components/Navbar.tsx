
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { NavLink } from "react-router-dom";
import {

  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Searchmodal from './Searchmodal';



const solutions = [
  {
    name: 'Home',
    href: '/home',
    icon: ChartBarIcon,
  },
  {
    name: 'About Us',
    href: '/about',
    icon: CursorArrowRaysIcon,
  }, {
    name: 'Features',
    href: 'features',
    icon: CursorArrowRaysIcon,
  },

  { name: 'Pricing', href: '/pricing', icon: ShieldCheckIcon },
  {
    name: 'Contact Us',
    href: '/contact',
    icon: Squares2X2Icon,
  },
  
]

export default function Navbar() {
    const [searchOpen, setsearchOpen] = useState<boolean>(false)
    return (
    <div className=''>
        {searchOpen? <Searchmodal searchOpen={searchOpen} setsearchOpen={setsearchOpen} /> : null}
    <Popover className="relative bg--100 shadow-lg">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/"  className={({ isActive }) => (isActive ? 'md:block hidden' : 'md:block hidden')}>
              LUMOS
            </NavLink>
            <NavLink to="/"  className={({ isActive }) => (isActive ? 'block md:hidden' : 'md:block hidden')}>
              LUMOS
            </NavLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {solutions.map((item) => (
                 <NavLink key={item.name}
                 to={item.href}  className={({ isActive }) => (isActive ? 'md:block hidden text-secondary' : 'md:block hidden text-black')}>
                 <div className="text-base font-medium  hover:text-secondary">
                {item.name}
                  </div>
               </NavLink>
               
                
                 
            ))}
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <button  className={'md:block hidden'}>
          <div
             
             className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent  px-4 py-2 text-base font-medium text-black shadow-sm duration-500 hover:scale-105"
           >
             <MagnifyingGlassIcon className='text-3xl h-7 w-7  text-black' onClick={()=>(setsearchOpen(!searchOpen))}/>
           </div>
            </button>

            <NavLink to="/"  className={({ isActive }) => (isActive ? 'md:block hidden' : 'md:block hidden')}>
          <div
             
             className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-secondary px-4 py-2 text-base font-medium text-white shadow-sm duration-500 hover:scale-105"
           >
             Login
           </div>
            </NavLink>
          </div>

          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-[9999]">
            <div className="px-5 pt-5 pb-6 ">
              <div className="flex items-center justify-between">
                <div>
                {/* <Image src={Logo} width={290} height={60} alt="Levantate Logo"/> */}
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                    <span className="sr-only">Close menus</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-secondary" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                
                <a href="/" className='bg-secondary p-2 text-center text-white rounded-md'> Login</a>
                </nav>
              </div>
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </div>
  )
}
