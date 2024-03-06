import React from 'react';
import useFetchVideoData from '../hooks/useFetchVideoData';
import VideoCard from './VideoCard';

export default function VideoContainer() {
  const {loading,error,popularVideos} = useFetchVideoData();
  if (loading || !popularVideos) {
    return <div>Loading...</div>
  }
  if (error) {
    return <p className='text-red-500'>{error}</p>
  }
  return (
    <div className='flex justify-between flex-wrap'>
      {popularVideos.map((video) => {
        return (
          <VideoCard video={video} key={video.id}/>
        )
      })}
    </div>
  )
}
