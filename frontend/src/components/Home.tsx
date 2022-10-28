import { BookmarkSlashIcon, EyeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { AiFillEye, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {GiGraduateCap, GiProfit} from 'react-icons/gi'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import Card from './Card'
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
    <div className='p-6 grid grid-cols-1 place-items-center gap-6'>
      {achivements.map((achivement) => (
        <Card />
      ))}
    </div>
  )
}

export default Home