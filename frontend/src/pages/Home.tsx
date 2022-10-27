import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className='min-h-screen min-w-screen relative  bg-cover overflow-x-hidden'>
            <Navbar />
            <div className='relative'>

        <div className='w-screen h-[87vh] bg-hero-bg bg-cover bg-center '></div>
        <div className='w-screen h-[87vh] bg-[#171717a3] z-[999] absolute inset-0 bg-cover bg-center flex flex-col px-24 text-white text-6xl font-semibold justify-center items-start'>

            
            <h1>WE Unify Education</h1>

            <p className='text-sm w-[50%] mt-11 opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur reiciendis aspernatur alias maxime cumque amet, perspiciatis iusto atque, accusantium eveniet, doloribus voluptas reprehenderit fugit.</p>
        </div>
            </div>
            <div className=" pb-6 sm:pb-8 lg:pb-12 ">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                </div>
            </div>
        </div>
    )
}

export default Home