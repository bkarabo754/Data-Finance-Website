import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DATA.</h1>
        <p className='py-4'>Data analytics helps individuals and organizations make sense of data. Data analysts typically analyze raw data for insights and trends.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} className="cursor-pointer"/>
            <FaInstagram size={30} className="cursor-pointer"/>
            <FaTwitterSquare size={30} className="cursor-pointer"/>
            <FaGithubSquare size={30} className="cursor-pointer"/>
            <FaDribbbleSquare size={30} className="cursor-pointer"/>
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
        <h6 className='font-medium text-gray-400'><span className="hover:text-[#00df9a] cursor-pointer">Solutions</span></h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><span className="hover:text-[#00df9a] cursor-pointer">Support</span></h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><span className="hover:text-[#00df9a] cursor-pointer">Company</span></h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><span className="hover:text-[#00df9a] cursor-pointer">Legal</span></h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
