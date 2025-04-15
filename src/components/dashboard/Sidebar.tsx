'use client'
import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { TbHelpSquareFilled } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";

import Logo from '../Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const pages = [{ title: 'Dashboard', link: '/', icon: MdSpaceDashboard }, { title: 'Analytics', link: '/analytics', icon: MdAnalytics }, { title: 'Posts', link: '/posts', icon: BsFillPostcardHeartFill }, { title: 'Accounts', link: '/accounts', icon: MdManageAccounts }]
const resources = [{ title: 'Setting', link: '/setting', icon: IoSettings }, { title: 'Support', link: '/support', icon: TbHelpSquareFilled }]

function Sidebar() {
    const pathname = usePathname()
    console.log("pathname ", pathname)
    return (
        <div className='w-full p-5 flex flex-col gap-12 border-r border-dashed border-gray-300'>
            <Logo />
            <div className='flex flex-col gap-5 w-full'>
                <div className='text-lg font-bold text-brandColor'>Home</div>
            <div className='flex flex-col gap-1 w-full'>
                {pages.map((item) => {
                    return <Link href={item.link} key={item.link} className={cn('w-full p-2 flex items-center gap-3 rounded-lg text-lg ', pathname === item.link ? 'font-bold bg-brandColor/20 text-brandColor' : 'bg-transparent text-black')}>
                        <item.icon />
                        <div>{item.title}</div>
                    </Link>
                })}
            </div>
            <div className='text-lg font-bold text-brandColor'>Resources</div>
            <div className='flex flex-col gap-1 w-full'>
            {resources.map((item) => {
                    return <Link href={item.link} key={item.link} className={cn('w-full p-2 flex items-center gap-3 rounded-lg text-lg ', pathname === item.link ? 'font-bold bg-brandColor/20 text-brandColor' : 'bg-transparent text-black')}>
                        <item.icon />
                        <div>{item.title}</div>
                    </Link>
                })}
            </div>
                </div>
        </div>
    )
}

export default Sidebar