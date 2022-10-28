import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from "../assets/img/hero-img.svg"
import { Typewriter } from 'react-simple-typewriter'
import abtImage from "../assets/img/about.svg"
import competetiveimg from "../assets/img/competitive.svg"
import { NavLink } from 'react-router-dom'

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
      <section className='relative max-w-screen-2xl px-4 md:px-8 mx-auto'>

        <div className='w- h-[87vh] bg-white py-6 sm:py-8 lg:py-12  px-11 mx-auto grid grid-cols-2 k'>
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

                <button className="inline-block bg-secondary hover:bg-tertiary active:bg-tertiary focus-visible:ring ring-secondary -300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Contact US</button>
              </form>
              <p className="text-gray-400 text-xs text-center lg:text-right">By signing up to our newsletter you agree to our <a href="#" className="hover:text-secondary text-tertiary transition duration-100">Term of Service</a> and <a href="#" className="hover:text-secondary active:text-secondary -600  text-tertiary transition duration-100">Privacy Policy</a>.</p>
            </div>
          </div>
          <div><img src={heroImg} alt="" className='mt-11' /></div>
        </div>
      </section>



      <section className=" max-w-screen-2xl px-4 md:px-8 mx-auto mt-6 pb-11 w-full">
        <div className="w-  px-11 mx-">
          <div className="grid grid-cols-2">
            <div className='w-full'>
              <img src={abtImage} alt="" className='w-[80%]' />
            </div>
            <div>
              <h1 className='text-5xl font-bold mb-11 flex w-full '>About</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, atque commodi reiciendis officia maiores facere veritatis eveniet dolore praesentium dignissimos sunt similique. Fugiat distinctio  eius ratione beatae accusamus, quae aut? <br/> <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque, laboriosam impedit magni nihil, qui in dolorem inventore at ipsa accusantium laborum ipsam nesciunt, vel nulla ut velit dolore aut?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quidem minima 
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-6 pb-11 w-full">

        <div className="w- bg-white py-6 sm:py-8 lg:py-12  px-11 mx-auto">
          <div className="grid grid-cols-2">

            <div className='h-full flex flex-col items-center justify-center'>
              <h1 className='text-5xl font-bold mb-11 flex w-full  '>Why Choose Us</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, atque commodi reiciendis officia maiores facere veritatis eveniet dolore praesentium dignissimos sunt similique. Fugiat distinctio  <br/> <br/> eius ratione beatae accusamus, quae aut? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque, laboriosam impedit magni nihil, qui in dolorem inventore at ipsa accusantium laborum<br/> <br/> ipsam nesciunt, vel nulla ut velit dolore aut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quidem minima in facere pariatur ratione recusandae ipsum voluptates quos, nisi repellendus adipisci ex quod nesciunt labore quo nostrum architecto aspernatur.
            </div>
            <div className='w-full'>
              <img src={competetiveimg} alt="" className='w-[80%]' />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our competitive advantage</h2>

              <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>


            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">

              <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary -500 mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Growth</h3>
                <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-secondary -500 hover:text-secondary -600 active:text-secondary -700 font-bold transition duration-100">More</a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary -500 mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Security</h3>
                <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-secondary -500 hover:text-secondary -600 active:text-primary -700 font-bold transition duration-100">More</a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary -500 mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Cloud</h3>
                <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-secondary -500 hover:text-secondary -600 active:text-secondary -700 font-bold transition duration-100">More</a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-secondary -500 mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Speed</h3>
                <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-secondary -500 hover:text-secondary -600 active:text-secondary -700 font-bold transition duration-100">More</a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-secondary -500 mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Support</h3>
                <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-secondary -500 hover:text-secondary -600 active:text-secondary -700 font-bold transition duration-100">More</a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-secondary -500 mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Night Mode</h3>
                <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-secondary -500 hover:text-secondary -600 active:text-secondary -700 font-bold transition duration-100">More</a>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className='bg-white pt-4 sm:pt-6 lg:pt-8'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Pricing</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 md:mb-8">

              <div className="flex flex-col border rounded-lg overflow-hidden sm:mt-8">
                <div className="h-2 bg-primary"></div>

                <div className="flex flex-col flex-1 p-6 pt-8">
                  <div className="mb-12">
                    <div className="text-gray-800 text-2xl font-bold text-center mb-2">Free Trial</div>

                    <p className="text-gray-500 text-center px-8 mb-8">For individuals and organizations who want to try our system</p>

                    <div className="space-y-4">

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">1.000 MB file storage</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">2.000 MB bandwidth per month</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">200 tasks per month</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Comunity support</span>
                      </div>

                    </div>
                  </div>

                  <div className="mt-auto">
                    <a href="#" className="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-secondary -300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">$0 / Free</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border-2 border-secondary -500 rounded-lg overflow-hidden">
                <div className="bg-secondary -500 text-white text-sm font-semibold tracking-widest text-center uppercase py-2">Popular choise</div>

                <div className="flex flex-col flex-1 p-6 pt-8">
                  <div className="mb-12">
                    <div className="text-gray-800 text-2xl font-bold text-center mb-2">Team</div>

                    <p className="text-gray-500 text-center mx-auto px-8 mb-8">Avanced feaures for Individuals and organizations</p>

                    <div className="space-y-4">

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Unlimited file storage</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">10 GB bandwidth per month</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">10.000 tasks per month</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Email support</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">100 Webhooks</span>
                      </div>

                    </div>
                  </div>

                  <div className="mt-auto">
                    <a href="#" className="block bg-secondary -500 hover:bg-secondary -600 active:bg-secondary -700 focus-visible:ring ring-secondary -300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">$19</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border rounded-lg overflow-hidden lg:mt-8">
                <div className="h-2 bg-gray-800"></div>

                <div className="flex flex-col flex-1 p-6 pt-8">
                  <div className="mb-12">
                    <div className="text-gray-800 text-2xl font-bold text-center mb-2">Enterprise</div>

                    <p className="text-gray-500 text-center mx-auto px-8 mb-8">Maximum performace for organisations</p>

                    <div className="space-y-4">

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Unlimited file storage</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Unlimited bandwidth per month</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">1.000.000 tasks per month</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Email and phone support</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                          <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                        </svg>

                        <span className="text-gray-600">Unlimited Webhooks</span>
                      </div>

                    </div>
                  </div>

                  <div className="mt-auto">
                    <a href="#" className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-secondary -300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">$49</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white pt-4 sm:pt-6 lg:pt-8">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 border-t border-b py-6">
            <div className="text-center md:text-left mb-3 md:mb-0">
              <span className="text-gray-800 font-bold uppercase tracking-widest">Newsletter</span>
              <p className="text-gray-500">Subscribe to our newsletter</p>
            </div>

            <form className="w-full md:max-w-md flex gap-2">
              <input placeholder="Email" className="w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-secondary -300 rounded outline-none transition duration-100 px-3 py-2" />

              <button className="inline-block bg-secondary -500 hover:bg-secondary -600 active:bg-secondary -700 focus-visible:ring ring-secondary -300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
            </form>
          </div>
        </div>

        <div className="pt-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
              <div className="col-span-full lg:col-span-2">

                <div className="lg:-mt-2 mb-4">
                  <a href="/" className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2" aria-label="logo">

                    <NavLink to="/" className={({ isActive }) => (isActive ? 'md:block hidden text-3xl' : 'md:block hidden')}>
                      LUMOS
                      <p className='text-xs font-semibold '>A Levantate Concern</p>
                    </NavLink>
                  </a>
                </div>


                <p className="text-gray-500 sm:pr-8 mb-6">Filler text is dummy text which has no meaning however looks very similar to real text</p>

                <div className="flex gap-4">
                  <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>

              </div>


              <div>
                <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Overview</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Solutions</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Pricing</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">test1</a>
                  </div>
                </nav>
              </div>

              <div>
                <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Company</div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">About</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Investor Relations</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Jobs</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">test1</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">test2</a>
                  </div>
                </nav>
              </div>

              <div>
                <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Support</div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Contact</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Documentation</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">test1</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">test2</a>
                  </div>
                </nav>
              </div>

              <div>
                <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Legal</div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Terms of Service</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">Privacy Policy</a>
                  </div>

                  <div>
                    <a href="#" className="text-gray-500 hover:text-secondary -500 active:text-secondary -600 transition duration-100">test1</a>
                  </div>
                </nav>
              </div>

            </div>

            <div className="text-gray-400 text-sm text-center border-t py-8">© 2021 - Present Lumos. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home