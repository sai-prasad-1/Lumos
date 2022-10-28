import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

type Props = {
    searchOpen: boolean,
    setsearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = (props: Props) => {
    const [joinwithteams, setJoinwithteams] = React.useState(false)
    const [showInitial, setshowInitial] = React.useState(true)
    return (
        <div className='absolute w-screen h-screen inset-0 z-[999] glass--bg  flex justify-center items-start '>
            <div className="search md:min-w-[40%] min-w-[90%] bg- mt-24 p-4 flex items-center justify-center">
                {showInitial ? <Initial joinwithteams={setJoinwithteams} setshowInitial={setshowInitial} /> : null}
                {joinwithteams ? <JoinwithTeams /> : null}
                {!joinwithteams && !showInitial ? <JoinasIndividual /> : null}
            </div>
            <div className="absolute inset-0" onClick={() => (props.setsearchOpen(!props.searchOpen))}></div>
        </div>
    )
}


const Initial = ({ joinwithteams, setshowInitial }: any) => {
    return (
        <div className="w-[90%] h-full bg-white rounded-xl relative shadow-2xl text-white z-[99999] p-6">
            <div className="w-full flex justify-center flex-col items-center space-y-9">
                <h1 className='capitalize text-xl font-semibold p-2 bg-secondary rounded-md' onClick={() => { joinwithteams(true); setshowInitial(false) }}>join with team </h1>
                {/* divider */}
                <div className="w-full h-0.5 bg-gray-200"></div>
                <h1 className='capitalize text-xl font-semibold p-2 bg-secondary rounded-md' onClick={() => { joinwithteams(false); setshowInitial(false) }}>join as individual </h1>


            </div>

        </div>)
}



const JoinwithTeams = () => {
    // list of 6 unique users with email and name
    const [users, setUsers] = React.useState([])
    useEffect(() => {
        axios.get('users').then((res) => {
            setUsers(res.data)
            console.log(res.data);
            
        })
    }, [])

    const handelInvite=(email:string)=>{
        axios.post('invite', {email:email}).then((res)=>{
            toast.success('Invitation sent')
            
        }
        )
        .catch((err)=>{
            toast.error('Something went wrong')
            
        }
        )
    }
    const [search, setsearch] = React.useState('')
    const [searched, setsearched] = React.useState<string[]>([])

    useEffect(() => {
        if (search.length > 0) {
            const filtered = users.filter((user:any) => {
                return user.username.toLowerCase().includes(search.toLowerCase())
            })
            setsearched(filtered)
            console.log(filtered);
            
        }
        else {
            setsearched([])
        }
    }, [search])

    return (
        <div className='w-full'>
            <div className="w-full relative shadow-2xl z-[99999]">

                <input type="text" className='w-full p-2 relative rounded-lg px-5 border-none focus:border-indigo-500 focus:ring-indigo-500' placeholder='Search....' value={search} onChange={(e) => { setsearch(e.target.value) }} />
                <div className="absolute top-0 right-3 p-2">
                    <MagnifyingGlassIcon className='h-6 w-6 text-black' />
                </div>
            </div>
            {searched.length > 0 ?
            <div className='mt-4 rounded-md p-4 bg-white'>
                {searched.length > 0 ? searched.map((user:any) => {
                    return (<div className='flex items-center justify-between p-2 w-full'>
                        <div className='flex items-center justify-between w-full space-x-2'>
                            <div className="flex items-center space-x-2">

                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='h-10 w-10 rounded-full' />
                            <h1 className='capitalize'>{user.username}</h1>
                            </div>
                            <div className='p-2 self-end bg-secondary cursor-pointer text-white rounded-md duration-100 scale-105' onClick={()=>{handelInvite(user.email)}}>invite</div>
                        </div>
                    </div>)}) : null}
            </div>:null}
        </div>
    )
}

const JoinasIndividual = () => {
    // axios.post
    window.location.href = '/dashboard'

    return (
        <h1>JoinasIndividual</h1>
    )
}

export default Modal