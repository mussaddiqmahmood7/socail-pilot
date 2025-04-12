import Link from 'next/link'
import React from 'react'

function SignUpForm() {
  return (
    <div className='max-w-md flex flex-col gap-5 w-full'>
        <div className='text-2xl text-gray-800 font-semibold'>Get started absolutely free.</div>
        <div className='text-gray-800'>Already have an account? <Link href='/sign-in' className='text-blue-500'>Sign in</Link></div>
        <div className='flex flex-col gap-3 w-full'>
          <div>Full Name</div>
          <input className='w-full rounded-2xl border p-2' placeholder='full name'/>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <div>Email</div>
          <input className='w-full rounded-2xl border p-2' placeholder='email'/>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <div>Password</div>
          <input className='w-full rounded-2xl border p-2' placeholder='password'/>
        </div>
       <Link href='/' className='w-full rounded-2xl p-2 font-semibold text-white bg-gray-800 text-center'>Sign Up</Link>
      <p>By signing up, I agree to Terms of Use and Privacy Policy.</p>
    </div>
  )
}

export default SignUpForm