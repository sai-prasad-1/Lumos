import axios from 'axios'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'

type Props = {}

const Login = (props: Props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, password)
        axios.post('signin', {
            email,
            password
        }).then(res => {
            console.log(res.data)
            sessionStorage.setItem('user', res.data.user)
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                localStorage.setItem('user', res.data.user)
                window.location.href = '/dashboard'
            }
        }).catch(err => {
            toast('Something went wrong')
        })



        setEmail('')
        setPassword('')
        
    }
  return (<>
  <Navbar/>
    <div className='bg-login-bg w-screen h-[87vh] bg-center flex flex-col justify-center items-center'>

    <div className="mt-5 md:col-span-2 md:mt-0 min-h-[80%] min-w-[30%]">
                            <form onSubmit={(e)=>{
                                handleSubmit(e)
                            }}>
                                <div className="overflow-hidden shadow-xl">
                                    <div className="bg-white px-4 py-5  sm:p-6  sm:rounded-md">
                                    <h1 className='w-full text-center mb-8 font-bold text-2xl text-black '>Login</h1>

                                        <div className="grid grid-cols-6 gap-6">                                      
                                        <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Email Address
                                                </label>
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Password
                                                </label>
                                                <input
                                                value={password}
                                                onChange={(e)=>{
                                                    setPassword(e.target.value)
                                                }}
                                                    type="password"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <button type='submit' className="col-span-6 bg-secondary px-3 p-2 rounded-lg text-center mt-8 text-white mb-8">
                                                Log in
                                            </button>
                                            

                                            <div className="col-span-6  px-3 p-2  rounded-lg text-center text-black border-gray-300 border mb-8">
                                                <button className='flex items-center justify-center w-full space-x-3'> <AiFillGoogleCircle className='mr-3'/>  Continue with Google</button>
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
    </div>
  </>
  )
}

export default Login