import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { GrApple } from "react-icons/gr";

function SocailLogin() {
  return (
    <div className='flex items-center gap-7 text-4xl'>
        <FcGoogle/>
        <CgFacebook className='text-blue-600'/>
        <GrApple className='text-gray-600'/>
    </div>
  )
}

export default SocailLogin