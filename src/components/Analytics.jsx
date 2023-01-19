import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt="lap" className='w-[500px] mx-auto my-4 '/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
            <h1 className='md-text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>It comprises the processes, tools and techniques of data analysis and management, including the      collection, organization, and storage of data. The chief aim of data analytics is to apply statistical analysis and technologies on data to find trends and solve problems.</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer hover:bg-[#00df9a] hover:text-black'>Getting Started</button>
        </div>
      </div>    
    </div>
  )
}

export default Analytics
