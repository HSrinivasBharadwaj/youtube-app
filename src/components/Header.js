import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { LOGO_URL } from '../utils/constants';
import { FaSearch, FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleMenuSideBar } from '../features/toggleMenu/toggleMenuSlice';

export default function Header() {
    const dispatch = useDispatch();
    const toggleSideBar = () => {
        dispatch(toggleMenuSideBar())
    }
  return (
    <header className='shadow-md p-5'>
        <nav className='flex justify-between items-center'>
            <ul className='flex items-center'>
                <li>
                    <a>
                        <GiHamburgerMenu className='mr-5 text-2xl cursor-pointer' onClick={toggleSideBar} />
                    </a>
                </li>
                <li>
                    <a>
                        <img className='w-28 h-10 cursor-pointer' src={LOGO_URL} alt='Youtube'/>
                    </a>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li>
                    <a>
                        <input 
                            type='text'
                            placeholder='Search'
                            className='rounded-l-full border border-gray-500 h-8 w-72'
                        />
                    </a>
                </li>
                <li>
                    <a>
                        <FaSearch className='rounded-r-full border border-gray-500 h-8 w-10 text-xs cursor-pointer' />
                    </a>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li>
                    <a>
                        <FaUser className='text-2xl cursor-pointer'/>
                    </a>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}
