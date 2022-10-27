import React from 'react'
import Card from '../components/Card'
import Profile from '../components/Profile'


type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-gray-100'>
      <Profile/>
    </div>
  )
}

export default Dashboard