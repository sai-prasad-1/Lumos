import { BookmarkSlashIcon, EyeIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { AiFillEye, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {GiGraduateCap, GiProfit} from 'react-icons/gi'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import Card from './Card'
import axios from 'axios'
import { log } from 'console'
type Props = {}

const Home = (props: Props) => {
  const [projects, setProjects] = React.useState([])

useEffect(() => {
  document.title = "Home | Portfolio"
  axios.get('events').then(res => {
    setProjects(res.data)
  })
}, [])
console.log(projects)
  return (
    <div className='p-6 grid grid-cols-1 place-items-center gap-6'>
      {projects.map((project) => (
        <Card project={project}/>
      ))}
    </div>
  )
}

export default Home