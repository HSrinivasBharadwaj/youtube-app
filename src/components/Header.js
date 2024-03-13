import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { LOGO_URL, AUTO_SUGGEST_API } from '../utils/constants';
import { FaSearch, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuSideBar } from '../features/toggleMenu/toggleMenuSlice';
import axios from 'axios';
import { cacheResults } from '../features/toggleMenu/searchSlice';

export default function Header() {
    const [suggestions, setSuggestions] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const toggleSideBar = () => {
        dispatch(toggleMenuSideBar())
    }

    const searchCache = useSelector(state => state.search);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }

        }, 200);
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        try {
            const response = await axios.get(AUTO_SUGGEST_API + searchQuery);
            setSuggestions(response.data[1]);
            setShowSuggestions(true);
            dispatch(cacheResults({
                [searchQuery]: response.data[1]
            }))
        } catch (error) {
            console.log(error);
            setShowSuggestions(false);
        }
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
                            <img className='w-28 h-10 cursor-pointer' src={LOGO_URL} alt='Youtube' />
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setShowSuggestions(false)}
                            />
                        </a>
                    </li>
                    <li>
                        <a>
                            <FaSearch className='rounded-r-full border border-gray-500 h-8 w-10 text-xs cursor-pointer' />
                        </a>
                    </li>
                    {/* Render the auto suggestions here */}
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className='bg-white shadow-lg rounded-md w-72 p-3 border border-gray-500 absolute top-14'>
                            {suggestions.map((suggestion) => {
                                return (
                                    <li key={suggestion} className='border-t-2 mt-2 hover:bg-gray-300 px-4 py-2'>{suggestion}</li>
                                )
                            })}
                        </ul>
                    )}
                </ul>
                <ul className='flex items-center'>
                    <li>
                        <a>
                            <FaUser className='text-2xl cursor-pointer' />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
