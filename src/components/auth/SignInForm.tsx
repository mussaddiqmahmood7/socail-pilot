import Link from 'next/link'
import React from 'react'

function SignInForm() {
  return (
    <div className='max-w-md flex flex-col gap-5 w-full'>
        <div className='text-2xl text-gray-800 font-semibold'>Sign in to SocailPilot</div>
        <div className='text-gray-800'>New user? <Link href='/sign-up' className='text-blue-500'>Create an account</Link></div>
        <div className='flex flex-col gap-3 w-full'>
          <div>Email</div>
          <input className='w-full rounded-2xl border p-2' placeholder='email'/>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <div>Password</div>
          <input className='w-full rounded-2xl border p-2' placeholder='password'/>
          <Link href='/forgot-password' className='text-blue-500 text-end'>Forgot Password</Link>
        </div>
       <Link href='/' className='w-full rounded-2xl p-2 font-semibold text-white bg-gray-800 text-center'>Sign in</Link>
    </div>
  )
}

export default SignInForm