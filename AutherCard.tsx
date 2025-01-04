import React from 'react'
export default function AutherCard() {
  return (
    <div className="bg-white shadow-lg  rounded-lg p-6 mt-12">
        <div className="flex items-center animation-fadeIn">



            <image
            className="w-16 h-16 rounded-full mr-4 object-cover boarder-2 border-red-500"
            src="../images/Untitled design.png"
            alt="Author Image"/>
            <div>
                <h3 className="text-xl fount-bold">Hayma Tul Yusra</h3>
                <p className="text-slate-500" > {" "}
                    Computer Enginner| Amazon Seller| Web Developer {" "} </p>
                    <p className="mt-4 text-black leading-relaxed">
                        Hayma is an expeience and expert in her fields 
                    </p>

                    <div className='mt-4 flex space-x-3'>
                        <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                            Twitter
                            </a> 
                            <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                            Facebook
                            </a> 
                            <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                            Github
                            </a> 
                            
                            
                            
                            
                            </div>
            </div>

        </div>

    </div>
  )
}

