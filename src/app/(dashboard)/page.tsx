'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { LuCalendarClock } from "react-icons/lu";
import { SiSimpleanalytics } from "react-icons/si";
import { LuCalendarCheck2 } from "react-icons/lu";
import { LuCalendarX2 } from "react-icons/lu";
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/posts/columns';
import { posts } from '@/components/constants/posts';

const reportSummary = {
  'today':{
    queued:10,
    delivered:20,
    error:5,
    posts:6
  },
  'weekly':{
    queued:25,
    delivered:45,
    error:12,
    posts:8
  },
  'monthly':{
    queued:37,
    delivered:58,
    error:18,
    posts:12
  },
  'yearly':{
    queued:70,
    delivered:155,
    error:28,
    posts:20
  },
}

const reports = [
  { title: 'Today', value: 'today' },
  { title: 'Weekly', value: 'weekly' },
  { title: 'Monthly', value: 'monthly' },
  { title: 'Yearly', value: 'yearly' },
]


function Page() {
  const [report, setReport] = useState<'today'|'weekly'|'yearly'|'monthly'>('today')
  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className='flex items-center justify-between gap-10'>
        <div className='text-3xl font-bold'>Good Morning! Arthur</div>
        <div className='bg-gray-200 rounded-3xl  flex'>
          {reports.map((item) => {
            return <div key={item.value} onClick={() => { setReport(item.value as 'today'|'weekly'|'yearly'|'monthly') }} className={cn('py-2 px-4 cursor-pointer rounded-3xl', report === item.value ? 'bg-brandColor text-white' : 'bg-gray-200 text-gray-700')}>{item.title}</div>
          })}
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 w-full'>
        <div className='w-full p-4 rounded-xl border flex items-center justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='rounded-full p-3 bg-gray-100 text-brandColor font-bold w-fit text-xl'>
              <LuCalendarClock />
            </div>
            <div className=' font-semibold text-black'>Queued Posts</div>
            <div className='text-3xl font-bold text-black'>{reportSummary[report].queued}</div>
          </div>
          <SiSimpleanalytics className='text-4xl font-bold text-brandColor' />
        </div>
        <div className='w-full p-4 rounded-xl border flex items-center justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='rounded-full p-3 bg-gray-100 text-brandColor font-bold w-fit text-xl'>
              <LuCalendarCheck2 />
            </div>
            <div className=' font-semibold text-black'>Delivered Posts</div>
            <div className='text-3xl font-bold text-black'>{reportSummary[report].delivered}</div>
          </div>
          <SiSimpleanalytics className='text-4xl font-bold text-brandColor' />
        </div>
        <div className='w-full p-4 rounded-xl border flex items-center justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='rounded-full p-3 bg-gray-100 text-brandColor font-bold w-fit text-xl'>
              <LuCalendarX2 />
            </div>
            <div className=' font-semibold text-black'>Error Posts</div>
            <div className='text-3xl font-bold text-black'>{reportSummary[report].error}</div>
          </div>
          <SiSimpleanalytics className='text-4xl font-bold text-brandColor' />
        </div>
      </div>

      <div className='flex flex-col gap-5 w-full'>
       <div className='bg-gray-200 text-black font-bold text-xl rounded-lg p-2 w-full'>Posts</div>
       <DataTable columns={columns} data={posts.slice(0 , reportSummary[report].posts)} />
      </div>
    </div>
  )
}

export default Page