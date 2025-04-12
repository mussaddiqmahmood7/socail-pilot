import Link from 'next/link';
import React from 'react'
import { SiMinutemailer } from "react-icons/si";

function ForgotPasswordForm() {
    return (
        <div className='flex flex-col gap-5 max-w-md w-full items-center text-gray-800'>
            <SiMinutemailer className='text-6xl text-brandColor' />
            <div className='text-4xl font-semibold text-center'>Forgot Password</div>
            <div className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque quis distinctio soluta esse ipsam.</div>
            <div className='flex flex-col gap-3 w-full'>
                <div>Email</div>
                <input className='w-full rounded-2xl border p-2' placeholder='email' />
            </div>
            <Link href='/' className='w-full rounded-2xl p-2 font-semibold text-white bg-gray-800 text-center'>Reset Password</Link>
            <Link href='sign-in' className='text-center'>Return to sign in</Link>
        </div>
    )
}

export default ForgotPasswordForm