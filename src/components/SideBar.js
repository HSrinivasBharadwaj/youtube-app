import React from 'react';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdOutlineTrendingUp, MdOutlineMusicNote,MdLiveTv, MdOutlinePodcasts } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { LuClapperboard } from "react-icons/lu";
import { SiYoutubegaming,SiYoutubemusic,SiYoutubestudio } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { BsLightbulb } from "react-icons/bs";
import { GiClothesline } from "react-icons/gi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { useSelector } from 'react-redux';


export default function SideBar() {
  const showSideBar = useSelector(state => state.toggleMenu.sideBarToggle)
  if (!showSideBar) {
    return null
  }
  return (
    <aside className='shadow-md p-5 '>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <IoMdHome className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Home</h1>
        </div>
        <div className='flex items-center mt-3'>
          <SiYoutubeshorts className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Shorts</h1>
        </div>
        <div className='flex items-center mt-3'>
          <MdSubscriptions className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Subscriptions</h1>
        </div>
      </div>
      <hr className='my-3 '/>
      <div className='flex flex-col'>
        <h1 className='font-bold '>Explore</h1>
        <div className='flex items-center mt-3'>
          <MdOutlineTrendingUp className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Trending</h1>
        </div>
        <div className='flex items-center mt-3'>
          <BiShoppingBag className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Shopping</h1>
        </div>
        <div className='flex items-center mt-3'>
          <MdOutlineMusicNote className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Music</h1>
        </div>
        <div className='flex items-center mt-3'>
          <LuClapperboard className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Movies</h1>
        </div>
        <div className='flex items-center mt-3'>
          <MdLiveTv className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Live</h1>
        </div>
        <div className='flex items-center mt-3'>
          <SiYoutubegaming className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Gaming</h1>
        </div>
        <div className='flex items-center mt-3'>
          <IoNewspaperOutline className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>News</h1>
        </div>
        <div className='flex items-center mt-3'>
          <TfiCup className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Sports</h1>
        </div>
        <div className='flex items-center mt-3'>
          <BsLightbulb className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Learning</h1>
        </div>
        <div className='flex items-center mt-3'>
          <GiClothesline className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Fashion & Beauty</h1>
        </div>
        <div className='flex items-center mt-3'>
          <MdOutlinePodcasts className='mr-3'/>
          <h1 className='font-normal text-[#0f0f0f]'>Podcats</h1>
        </div>
        <hr className='my-3'/>
        <div className='flex flex-col'>
          <h1>More From YouTube</h1>
           <div className='flex items-center mt-3'>
            <SiYoutubemusic className='mr-3 text-red-500'/>
            <h1 className='font-normal text-[#0f0f0f]'>YouTube Music</h1>
          </div>
          <div className='flex items-center mt-3'>
            <SiYoutubestudio className='mr-3 text-red-500'/>
            <h1 className='font-normal text-[#0f0f0f]'>YouTube Studio</h1>
          </div>
          <div className='flex items-center mt-3'>
            <TbBrandYoutubeKids className='mr-3 text-red-500'/>
            <h1 className='font-normal text-[#0f0f0f]'>YouTube Kids</h1>
          </div>
        </div>
      </div>
    </aside>
  )
}
