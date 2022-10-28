import { HeartIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import img from "../assets/img/card.jpg"
import Modal from './Modal'

type Props = {
    project: {
        collegId: "CCE"

        college: { id: string, email: string, collegeName: string }

        city: null | string
        collegeName: string

        country: string

        email: string

        id: number

        state: null | string

        streetAddress: null | string


        eventDate: string

        eventName: string

        teams: Array<{
            id: string
            teamName: string
            teamMembers: Array<{
                id: string
                name: string
                email: string
            }>
        }>

        participants: Array<{
            id: string
            email: string
            teamId: string
            eventid: string
            pending: boolean
            rsvp: boolean
        }>


    }
}
const Card = (props: Props) => {
    const d:string = new Date(props.project.eventDate).toDateString();
    const [open, setopen] = React.useState(false)
    const authUser = "praj2k2@gmail.com"
    const [applied, setapplied] = React.useState(false)
    useEffect(() => {
    if (authUser) {
        if(props.project.participants.some((participant)=>participant.email===authUser)){
            setapplied(true)
        }
    }},[applied])
    return (
        <div className='max-w-[500px] bg-white -500 shadow-xl '>
            {open?<Modal searchOpen={open} setsearchOpen={setopen}  eventName={props.project.eventName} eventid={props.project.id} userMail={authUser}/>:null}
            <div className='w-full flex p-4 items-center'>
                <div className='flex justify-center items-center w-12 h-12 rounded-full bg-primary border-2 border-secondary'>
                    <h1 className='text-white text-2xl'>{props.project.college.collegeName[0]}</h1>
                </div>
                <h1 className='ml-5 text-xl font-semibold'>{props.project.college.collegeName}</h1>

            </div>
            <div className="w-full ">
                <img src={img} alt="" className='w-[500px] px-2 rounded-xl' />
            </div>

            <div className='p-2 flex justify-between w-full'>
                <div className='flex items-center'>
                    <HeartIcon className='w-8 ' />
                    <span className='ml-2'>12,345 Likes</span>
                </div>
                <div className={`flex items-center mr-4 p-2 px-4 bg-secondary rounded-lg ${applied?"bg-green-400 opacity-70":"bg-secondary"}`} onClick={()=>{setopen(!open)}}>
                    {applied?"Applied":"Apply"}
                </div>

            </div>
            <div className='p-3 font-bold w-full'>
                <h1 className=''>{props.project.eventName}:</h1>
                <p className='text-xs font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores eligendi pariatur repellat nesciunt. Atque aspernatur, officia excepturi velit nulla unde sint non assumenda modi tempora eius possimus quas molestias!</p>
            </div>

            <div className='p-3 font-bold w-full'>
                <h1>Event date: <span className='font-normal'>{d}</span></h1>
            </div>

        </div>
    )
}

export default Card