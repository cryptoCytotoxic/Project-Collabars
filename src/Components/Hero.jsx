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
          
          <button className='view relative text-white font-[500] bg-blue-400 px-5 py-3.5 rounded-[4px] cursor-pointer hover:bg-blue-300 hover:text-white'>View Property</button>
        </div>
    </section>

    <button class="relative overflow-hidden px-6 py-2 text-white font-semibold border border-blue-500 group">
  <span class="relative z-10">Hover Me</span>
  <span class="absolute left-0 top-0 h-full w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
</button>
      
    </>
  )
}

export default Hero
