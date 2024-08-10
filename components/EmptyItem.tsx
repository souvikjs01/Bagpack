import React from 'react'

export default function EmptyItem() {
  return (
    <div className=' w-full h-full flex items-center justify-center'>
      <div className=' flex flex-col w-auto'>
        <h1 className=' text-center font-bold text-lg my-2'>Empty Packing List</h1>
        <p className=' text-sm'>Start by adding some items you </p>
        <p className=' text-sm'>absolutely don't want to forget.</p>
      </div>
    </div>
  )
}
