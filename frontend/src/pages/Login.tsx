import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Login = (props: Props) => {
  return (<>
  <Navbar/>
    <div className='bg-login-bg w-screen h-[87vh] bg-center flex flex-col justify-center items-center'>

    <div className="mt-5 md:col-span-2 md:mt-0 min-h-[80%] min-w-[30%]">
                            <form onSubmit={()=>{
                                console.log("sdhggf")
                            }}>
                                <div className="overflow-hidden shadow-xl">
                                    <div className="bg-white px-4 py-5  sm:p-6  sm:rounded-md">
                                    <h1 className='w-full text-center mb-8 font-bold text-2xl text-secondary '>Login</h1>

                                        <div className="grid grid-cols-6 gap-6">                                      
                                        <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Email Address
                                                </label>
                                                <input
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
                                                    type="password"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 bg-black px-3 p-2 rounded-lg text-center mt-8 text-white mb-8">
                                                <button>Log in</button>
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