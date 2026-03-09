import React from 'react'
import { Eye } from 'lucide-react'

const Auth = () => {

  const handleSubmit = (e) => {
    e.preventDefault
  }
  return(
    <div className='felx items-center bg-white min-h-screen'>
      <div className='container mx-auto px-6 py-6'>
        <div classNmae='flex felx-col lg:flex-row rounded-x1 shadow-x1 overflow-hidden'>
          {/* left side  */}
          <div className='w-full lg:w-1/2 p-12'>
           <div className='flec flex-col'>
            <h3 className='text-3xl text-gray-700 mb-2 font-bold'>Welcome Back</h3>
            <p className='text-gray-600'> Login to your forever account</p>

            {/* social buttons */}
            <div className=' grid grid-cols-2 gap-6 mt-6'>
              <button className='flex items-center justify-center gap-2 py-2 border border-gray-300 rounded'>
                <img className = 'w-4' src="./google.png" alt="" />
                Google
              </button>
              <button className='flex items-center justify-center gap-2 py-2 border border-gray-300 rounded'>
                <img className = 'w-5' src="./github.png" alt=""/>
                Github
              </button>
            </div>

            {  /* Authentication form */}
            <form onsubmit={handleSubmit}>
              <div className='mb-4 mt-6'>
                <label className='block text-gray-700 mb-2'> Email Adress</label>
                <input className=' w-full px-4 py-2 border border-gray-300 outline-none placeholder:text-sm placeholder:text-gray-600' placeholder='Enter your email adress' type="text"/>
              </div>

              {/* Password field */}
              <div className='mb-4 mt-6'>
                <label className='block text-gray-700 mb-2'>Password</label>
                <div className='relative'>
                  <input className=' w-full px-4 py-2 border border-gray-300 outline-none placeholder:text-sm placeholder:text-gray-600' placeholder='Enter password' type="password"/>
                  <buttton className='absolute top-3 right-3'>
                    <Eye/>
                  </buttton>
                </div>
              </div>
            </form>

  
           </div>
          </div>


          {/* right side banner*/}
          <div className='w-full lg:w-1/2'></div>
        </div>
      </div>
    </div>
  )
}

export default Auth