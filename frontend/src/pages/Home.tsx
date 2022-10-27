import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from "../assets/img/hero-img.svg"
import { Typewriter } from 'react-simple-typewriter'
import abtImage from "../assets/img/about.svg"

type Props = {}

const styles = {
    mouseContainer: {

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

  }

const Home = (props: Props) => {
    return (
        <main className='min-h-screen min-w-screen relative  bg-cover overflow-x-hidden'>
            <Navbar />
            <section className='relative'>

                <div className='w-screen h-[87vh] px-11 grid grid-cols-2 k'>
                    <div className='flex flex-col justify-center space-y-11'>
                        <h1 className='text-7xl font-bold text-black mt-20 '>We <span className='text-secondary'><Typewriter
                            words={['Complete', 'Unite', 'Simplify']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={1000}

                        /></span><br /><span className='text-8xl'>Education</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quis dignissimos, nostrum incidunt accusantium, voluptatem nisi quibusdam nulla quae cum cumque? Tenetur itaque similique amet. Dolore, ratione. Error, minima nisi.</p>
                        <div className="flex flex-col mt-6 items-start place-self-start  justify-center">
                            <form className="w-full max-w-md flex gap-2 mb-3">
                                <input placeholder="Email" className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-700 border border-gray-500 focus:ring ring-tertiary rounded outline-none transition duration-100 px-3 py-2" />

                                <button className="inline-block bg-secondary hover:bg-tertiary active:bg-tertiary focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Contact US</button>
                            </form>
                            <p className="text-gray-400 text-xs text-center lg:text-right">By signing up to our newsletter you agree to our <a href="#" className="hover:text-secondary text-tertiary transition duration-100">Term of Service</a> and <a href="#" className="hover:text-secondary active:text-indigo-600  text-tertiary transition duration-100">Privacy Policy</a>.</p>
                        </div>
                    </div>
                    <div><img src={heroImg} alt="" className='mt-11' /></div>
                </div>
            </section>
            <section className=" pb-6 sm:pb-8 lg:pb-12 ">
                <div className="w-screen h-[87vh] px-11 mx-auto">
                    <h1 className='text-5xl font-bold mb-11'>About</h1>
                    <div className="grid grid-cols-2">
                        <div className='w-full'>   

                        <img src={abtImage} alt="" className='w-[80%]' />
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home