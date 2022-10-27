import { BookmarkSlashIcon, EyeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { AiFillEye, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {GiGraduateCap, GiProfit} from 'react-icons/gi'
import {BsJournalBookmarkFill} from 'react-icons/bs'
type Props = {}

const achivements = [
  {
    name: "Top 10% in Hackathon",
    icon: <AiFillEye/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    name: "Top 10% in Hackathon",
    icon: <AiFillEye/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    name: "Top 10% in Hackathon",
    icon: <AiFillEye/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    name: "Top 10% in Hackathon",
    icon: <AiFillEye/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
]

const Certifications = 
[
  {
    name: "Google Cloud",
    icon: <BsJournalBookmarkFill/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    name: "AWS cloud Practitioner",
    icon: <BsJournalBookmarkFill/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    name: "Edx Blockchain",
    icon: <BsJournalBookmarkFill/>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
]

const Home = (props: Props) => {
  return (
    <div className='p-6'>
      
      <div className='w-full bg-white shadow-xl flex rounded-xl p-4'>
        <div className="w-1/2">
          <div className="flex flex-col">
            <div className="flex">
              <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className='rounded-xl w-44 border-4 border-gray-500' />
              <div className="ml-5 capitalize font-bold p-6">
                <h1 className='text-secondary'>M akhill p raj</h1>
                <p className='text-sm text-gray-700 font-normal '>Btech first year student </p>

                <h3 className='mt-6 text-gray-600'>About</h3>
                <p className='text-sm font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit vel optio doloribus.</p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="flex flex-col">
                <h3 className='text-gray-600 mb-5'>Skills</h3>
                <div className="flex space-x-2">
                  <span className='text-sm font-semibold bg-secondary text-white p-2 rounded-xl'>React</span>
                  <span className='text-sm font-semibold bg-secondary text-white p-2 rounded-xl'>Node</span>
                  <span className='text-sm font-semibold bg-secondary text-white p-2 rounded-xl'>Express</span>
                  <span className='text-sm font-semibold bg-secondary text-white p-2 rounded-xl'>MongoDB</span>
                </div>
              </div></div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full  p-2 flex items-end justify-end space-x-2">
            <button className='px-2 p-1 text-2xl border border-gray-300  text-blue-500 rounded-md'><AiFillLinkedin/></button>
            <button className='px-2 p-1 text-2xl border border-gray-300  text-gray-500 rounded-md'><AiFillGithub/></button>
            <button className='px-2 p-1 text-2xl border border-gray-300  text-gray-500 rounded-md flex items-center'><AiFillEye/><span className='text-base'> Resume</span></button>
          </div>
        </div>
      </div>
      <div className='flex'>
      <div className='w-1/4 bg-white shadow-xl flex flex-col rounded-xl p-4 mt-6  '>
        <h1 className='flex items-center space-x-5 w-full font-bold text-xl justify-center '><GiProfit className='mr-3'/>Achivements</h1>
        <div className='w-full h-[1px] bg-gray-900 mt-2'> .</div>
            {achivements.map((achivement) => (
          <div className='flex  items-center space-x-5 w-full mt-5'>
            <div className='bg-gray-200 p-2 rounded-xl'>{achivement.icon}</div>
            <div className='flex flex-col'>
              <h1 className='text-secondary font-bold'>{achivement.name}</h1>
              <p className='text-sm text-gray-700 font-normal'>{achivement.description}</p>
            </div>
          </div>

        ))}
      </div>

      <div className='w-1/4 bg-white shadow-xl flex flex-col rounded-xl p-4 mt-6  ml-11'>
        <h1 className='flex items-center space-x-5 w-full font-bold text-xl justify-center '><GiGraduateCap className='mr-3'/>Certifications</h1>
        <div className='w-full h-[1px] bg-gray-900 mt-2'> .</div>
            {Certifications.map((achivement) => (
          <div className='flex  items-center space-x-5 w-full mt-5'>
            <div className='bg-gray-200 p-2 rounded-xl'>{achivement.icon}</div>
            <div className='flex flex-col'>
              <h1 className='text-secondary font-bold'>{achivement.name}</h1>
              <p className='text-sm text-gray-700 font-normal'>{achivement.description}</p>
            </div>
          </div>

        ))}
      </div>

      <div className='w-2/4  p-11'>
        {/* <img src={} alt=""  /> */}
      </div>
      </div>
      
    </div>
  )
}

export default Home