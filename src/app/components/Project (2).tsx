import Link from 'next/link'
import React from 'react'
import Image from 'next/image'




const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/c.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Cosmatic Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Cosmatic business
            </h1>
            <p className="leading-relaxed text-blue-500 hover:underline line-clamp-2 ">view project
            This is the Cosmatic Business
            </p>
            <Link 
            target="_blank" href={"https://www.amazon.com/s?k=ma%C4%B7eup&adgrpid=165956376656&hvadid=707768649537&hvdev=c&hvlocphy=1011081&hvnetw=g&hvqmt=b&hvrand=14585033378242657164&hvtargid=kwd-1458450530636&hydadcr=8390_13690806&tag=hydglogoo-20&ref=pd_sl_6h6rkqcmpg_b"}></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/w.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Catering Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">view project
              Catering
            </h1>
            <p className="leading-relaxed  text-blue-500 hover:underline line-clamp-2">
          This is the Project which I've created for those who owns a catering business.
            </p>
            <Link 
            target="_blank" href={"https://www.themigrantkitchen.com/?gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUmRcyWn4KJpkIjAZQjHCAXi3BzGXbanARB5BYLZ4mvKo3Hyqw8H248aAhk3EALw_wcB"}></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/t.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Shop Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shop Business
            </h1>
            <p className="leading-relaxed  text-blue-500 hover:underline line-clamp-2">View Project
            This is the business of Shop .
            </p>
            <Link 
            target="_blank" href={"https://www.businesslink.website/"}></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/b.avif")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Banking business
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Banking
            </h1>
            <p className="leading-relaxed  text-blue-500 hover:underline line-clamp-2">
          This is the business of Banking
            </p>
            <Link 
            target="_blank" href={"https://outreachmonks.com/link-building-for-banks-and-financial-institutions/"}></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/m.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Meat Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">View Project
              Meat Business
            </h1>
            <p className="leading-relaxed text-blue-500 hover:underline line-clamp-2">
           This is the business of Meat.
            </p>
            <Link 
            target="_blank" href={"https://www.businesslink.website/"}></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/v.avif")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              vigitable Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">View Project
              vigitable
            </h1>
            <p className="leading-relaxed text-blue-500 hover:underline line-clamp-2">
             This is the vigitable business
            </p>
            <Link 
            target="_blank" href={"https://webflow.com/made-in-webflow/vegetables"}></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
