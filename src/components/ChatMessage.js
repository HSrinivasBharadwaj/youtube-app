import React from 'react'
import { FaUser } from "react-icons/fa";

export default function ChatMessage({name,message}) {
  return (
    <div className='flex items-center'>
        <FaUser />
        <span className='font-bold mx-3'>{name}</span>
        <span>{message}</span>
    </div>
  )
}
