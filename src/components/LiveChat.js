import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch } from 'react-redux';
import { addMessage } from '../features/toggleMenu/chatSlice';
import { useSelector } from 'react-redux';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

export default function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector(state => state.chat.messages)
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(10)
      }))
    }, 2000);
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({
      name: "Bharadwaj",
      message: liveMessage
    }))
    setLiveMessage("")
  }
  return (
    <div>
      <div className='flex flex-col-reverse border border-black p-2 w-[220px] h-[515px] bg-slate-100 rounded-lg overflow-y-scroll'>
        <div>
          {chatMessages.map((message, index) => {
            return (
              <div key={index}>
                <ChatMessage name={message.name} message={message.message} />
              </div>
            )
          })}
        </div>

      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter chat message'
          className='border border-black rounded-md mt-2 p-2'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='p-2 mx-2 bg-green-500 cursor-pointer mt-2 rounded-full w-48'>Send</button>
      </form>
    </div>
  )
}
