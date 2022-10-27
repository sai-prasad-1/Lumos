import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className='min-h-screen min-w-screen bg-bg bg-cover overflow-x-hidden'>
            <Navbar />

            <div className=" pb-6 sm:pb-8 lg:pb-12 ">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                </div>
            </div>
        </div>
    )
}

export default Home