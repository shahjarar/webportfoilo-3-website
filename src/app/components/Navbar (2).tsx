import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>  
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href={"/"}className="mr-5  hover:text-Blue-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-Blue-600">About</Link>
      <Link href={"#Skills"} className="mr-5 hover:text-Blue-600">Skills</Link>
      <Link href={"#project"}className="mr-5  hover:text-Blue-600">Projects</Link>
      <Link href={"#contact"} className="mr-5 hover:text-Blue-600">Contact Us</Link>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
  <Image
  src={require("../../../public/Pictures/png.jpeg")} 
  alt="it made"
  width={100}
  height={100}
 className="w-[50px]"/>
      <span className="ml-3 text-xl">IT Made Of Pakistan</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <a href="/CV/resume.avif">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download CV
        <FaCloudDownloadAlt className='text-xl ml-2' />
      </button>
      </a>
    </div>
  </div>
</header>;

    </div>
  )
}

export default Navbar
