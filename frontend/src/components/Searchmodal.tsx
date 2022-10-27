import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useRef } from 'react'

type Props = {
    searchOpen: boolean,
    setsearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Searchmodal = (props: Props) => {
  return (
    <div className='absolute w-screen h-screen inset-0 z-[999] glass--bg  flex justify-center items-start '>
<div className="search md:min-w-[40%] min-w-[90%] bg- mt-24 p-4">
    <div className="w-full relative shadow-2xl z-[99999]">

    <input type="text" className='w-full p-2 relative rounded-lg px-5 border-none focus:border-indigo-500 focus:ring-indigo-500' placeholder='Search....' />
    <div className="absolute top-0 right-3 p-2">
    <MagnifyingGlassIcon className='h-6 w-6 text-black' />
    </div>
    </div>
</div>
<div className="absolute inset-0"  onClick={()=>(props.setsearchOpen(!props.searchOpen))}></div>
    </div>
  )
}

export default Searchmodal