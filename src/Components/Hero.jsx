import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='hero' >

        <div className=" pl-[50px] pt-[180px] mx-auto w-[80%] xl:max-w-[1200px]">
          <p className='text-white font-[500] mb-[5px] '>3 Bed - 2 Bath - 2200 Sq Ft</p>
          <h1 className='text-white text-6xl font-[500] mb-[15px]'>Light House NY</h1>
          <p className='text-white text-[19px] font-[300] mb-[12px]'>Get started by choosing from one of our pre-built page templates <br /> to showcase your properties</p>
          <h4 className='text-white text-[50px] font-[400] mb-[30px]'>$ 3,272</h4>

          <button className='relative overflow-hidden  bg-blue-400 px-5 py-3.5 text-white font-[500] rounded-[4px] cursor-pointer group'>
            <span className='relative z-10'>View Property</span>
            <span className='absolute left-0 top-0 h-full w-0 bg-blue-900 transition-all duration-300 ease-in-out group-hover:w-full'></span>
            </button>
        </div>
    </section>

   
      
    </>
  )
}

export default Hero
