import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

export default function Body() {
  return (
    <main className='flex justify-between'>
     <SideBar />
     <Outlet />
    </main>
  )
}
