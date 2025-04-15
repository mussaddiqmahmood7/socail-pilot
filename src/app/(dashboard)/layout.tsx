import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
    return (
        <div className='min-h-screen w-full grid grid-cols-4 bg-white'>
            <Sidebar/>
            <div className='col-span-3'>
            <Header/>
            <div className='p-5'>
                {children}
            </div>
        </div>
        </div>
    )
}

export default layout