import React from 'react'

export default function Button({title}) {
  return (
    <div>
        <button className='bg-[#0000000d] rounded-md cursor-pointer text-[#0f0f0f] p-2 mt-5'>{title}</button>
    </div>
  )
}
