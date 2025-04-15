import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import AvatarImage from "@/assets/auth/profileImage.png"
import Image from 'next/image';
import Link from 'next/link';
function Header() {
  return (
    <div className='flex items-center justify-between gap-10 p-4 shadow '>
        <input className='p-2 rounded-lg border min-w-sm' placeholder='Search' />
        <div className='flex items-center gap-5'>
          <IoMdNotificationsOutline className='text-2xl font-semibold text-brandColor'/>
          <Link href='/sign-in' className='min-w-10 size-10 rounded-full overflow-hidden'>
            <Image src={AvatarImage} alt='profile image' className='w-full h-full object-cover' />
          </Link>
        </div>
    </div>
  )
}

export default Header