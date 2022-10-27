import { HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import img from "../assets/img/card.jpg"

type Props = {}

const Card = (props: Props) => {
    return (
        <div className='max-w-[500px] bg-white -500 shadow-xl '>
            <div className='w-full flex p-4 items-center'>
                <div className='flex justify-center items-center w-12 h-12 rounded-full bg-primary border-2 border-secondary'>
                    <h1 className='text-white text-2xl'>S</h1>
                </div>
                <h1 className='ml-5 text-xl font-semibold'>M akhill P RAj</h1>

            </div>
            <div className="w-full ">
                <img src={img} alt="" className='w-[500px] px-2 rounded-xl' />
            </div>

            <div className='p-2 flex justify-between w-full'>
                <div className='flex items-center'>
                    <HeartIcon className='w-8 ' />
                    <span className='ml-2'>12,345 Likes</span>
                </div>
                <div className='flex items-center mr-4 p-2 px-4 bg-secondary rounded-lg'>
                    Apply
                </div>
                
            </div>
            <div className='p-3 font-bold w-full'>
                    <h1 className=''>M akhill P RAj:</h1>
                    <p className='text-xs font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores eligendi pariatur repellat nesciunt. Atque aspernatur, officia excepturi velit nulla unde sint non assumenda modi tempora eius possimus quas molestias!</p>
                </div>

        </div>
    )
}

export default Card