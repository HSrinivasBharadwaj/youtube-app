import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

export default function MainContainer() {
  return (
    <div className='w-10/12 m-5'> 
      <ButtonList />
      <VideoContainer />
    </div>
  )
}
