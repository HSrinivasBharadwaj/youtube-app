import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';

export default function Body() {
  return (
    <main className='flex justify-between'>
     <SideBar />
     <MainContainer />
    </main>
  )
}
