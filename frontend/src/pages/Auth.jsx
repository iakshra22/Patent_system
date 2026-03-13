import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Auth = () => {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    role: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {

    let newErrors = {}
    if (!formData.name) newErrors.name = true
    if (!formData.email) newErrors.email = true
    if (!formData.school) newErrors.school = true
    if (!formData.role) newErrors.role = true

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    if (!formData.password) {
      newErrors.password = true
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = true
    }  if (formData.confirmPassword !== formData.password || !formData.confirmPassword) {
      newErrors.confirmPassword = true
    } setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert("Account Created Successfully")
    }
  }

  return(
     <div className='flex items-center bg-white min-h-screen'>
      <div className='container mx-auto px-6 py-6'>
        <div className='flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden'>

          {/* left side  */}
          <div className='w-full lg:w-1/2 p-12'>
          <div className='flex flex-col'>
            <h3 className='text-3xl text-gray-700 mb-2 font-bold'>Create Account</h3>
              <p className='text-gray-600'>Join the Academic Nexus Platform</p>


              {/* social buttons */}
              <div className='grid grid-cols-2 gap-6 mt-6'>
                <button className='flex items-center justify-center gap-2 py-2 border border-gray-300 rounded'>
                  <img className='w-4' src="./google.png" alt="" />
                  Google
                </button>

                <button className='flex items-center justify-center gap-2 py-2 border border-gray-300 rounded'>
                  <img className='w-5' src="./github.png" alt=""/>
                  Github
                </button>
                </div>


              {/* pfp */}
              <div className='mb-4 mt-6'>
                <label className='block text-gray-700 mb-2'>Profile Picture</label>
                <div className='flex items-center gap-4'>
                  <input type="file" accept="image/*" className='hidden' id="profileUpload"/>
                  <label htmlFor="profileUpload" className='px-4 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200'>
                   Upload
                  </label>
                  <span className='text-sm text-gray-500'>Max size: 2MB</span>
                </div>
              </div>


              {/* Authentication form */}
              <form onSubmit={handleSubmit}>

                {/* name */}
                <div className='mb-4 mt-6'>
                  <label className='block text-gray-700 mb-2'>Enter your Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} outline-none`} placeholder='Enter your full name'type="text"/>
                </div>


                {/* email */}
                <div className='mb-4 mt-6'>
                  <label className='block text-gray-700 mb-2'>Email Address</label>
                  <input  name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} outline-none`} placeholder='Enter your email address' type="email"/>
                </div>


                {/* school */}
                <div className='mb-4 mt-6'>
                  <label className='block text-gray-700 mb-2'>Select School</label>
                  <select name="school" value={formData.school} onChange={handleChange}className={`w-full px-4 py-2 border ${errors.school ? "border-red-500" : "border-gray-300"} outline-none text-gray-600`}>
                    <option value="">Select your school</option>
                    <option>School of Engineering</option>
                    <option>School of Management</option>
                    <option>School of Computer Science</option>
                    <option>School of Law</option>
                    <option>School of Pharmacy</option>
                    <option>School of Education</option>
                    <option>School of Architecture</option>
                    <option>School of Design</option>
                    <option>School of Medical Sciences</option>
                    <option>School of Humanities</option>
                    <option>School of Commerce</option>
                    <option>School of Biotechnology</option>
                    <option>School of Fashion Desining</option>
                    <option>School of Hotel Management</option>
                  </select>
                </div>


                {/* role */}
                <div className='mb-4 mt-6'>
                  <label className='block text-gray-700 mb-2'>Select Role</label>
                  <select name="role" value={formData.role} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.role ? "border-red-500" : "border-gray-300"} outline-none text-gray-600`}>
                    <option value="">Select your role</option>
                    <option>Faculty</option>
                    <option>HOD</option>
                    <option>Principal</option>
                    <option>Chairman</option>
                    <option>Director</option>
                  </select>
                </div>


                {/* Password field */}
                <div className='mb-4 mt-6'>
                  <label className='block text-gray-700 mb-2'>Password</label>
                  <div className='relative'>
                    <input name="password" value={formData.password} onChange={handleChange} type={showPassword ? "text" : "password"} className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} outline-none`} placeholder='Min 8 chars, 1 Capital, 1 Number'/>
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-3 text-gray-600 hover:text-gray-700 cursor-pointer'>
                     {showPassword ? <EyeOff/> : <Eye/>}
                    </button>
                  </div>
                </div>
                <div className='flex-items-center gap-2'>
                  <a href="#" className= 'text-indigo-600 text-sm font-semibold'>Forgot Password</a>
                </div>


                {/* confirm password */}
                <div className='mb-4 mt-6'>
                  <label className='block text-gray-700 mb-2'>Confirm Password</label>
                  <div className='relative'>
                    <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type={showPassword ? "text" : "password"} className={`w-full px-4 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} outline-none`} placeholder='Enter confirm password'/>
                  </div>
                </div>

                {/* Rememmber checkbox */}
                <div className='flex-items-center justify-between'>
                    <input className='w-8 h-4' type="checkbox" name="" id="" />
                    <span className='text-sm  text-gray-700 font-semibold'>Remember Me</span>
                  </div>

                {/* button */}
                <div className='mt-6'>
                   <button type="submit" className='w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200'>
                    Create Account
                  </button>
                </div>


                {/* signin */}
                <div className='mt-4 text-center'>
                  <p className='text-gray-600 text-sm'>
                    Already have an account?
                    <span className='text-indigo-600 cursor-pointer hover:underline ml-1'>Sign In</span>
                    </p>
                </div>
              </form>
            </div>
          </div>


          {/* right side banner */}
          <div className=' relative w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center pb-16 text-white ' style={{backgroundImage:"url('./banner.jpg')"}}>
          <div className= 'absolute inset-0 bg-black opacity-40'></div>
          <div className= 'relative text-center'>
            <h3 className='text-3xl font-bold'>ACADEMIC NEXUS </h3>
            <p className= 'max-w-sm mx-auto'>Empowering educational excellence through data-driven insights and streamlined faculty Management  </p>
          </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Auth
