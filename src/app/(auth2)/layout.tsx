import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='w-full min-h-screen bg-brandGray relative flex items-center justify-center'>
         <div className="text-brandColor absolute top-3 sm:top-5 left-3 sm:left-5 font-semibold text-2xl sm:text-3xl">Social Pilot</div>
         {children}
    </div>
  )
}

export default layout