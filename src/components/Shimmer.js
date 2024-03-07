import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Shimmer() {
    const shimmers = Array.from({length:50})
  return (
    <div className='flex justify-between items-center'>
        {shimmers.map((index,_) => {
            return (
                <div key={index}>
                    <Skeleton height={200} width={200} className='mr-5'/>
                    <Skeleton width={100} className='mt-3'/>
                    <Skeleton width={100} className='mt-3'/>
                </div>
            )
        })}
    </div>
  )
}
