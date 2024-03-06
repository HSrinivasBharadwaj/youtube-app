import React from 'react'

export default function VideoCard({ video }) {
  const { snippet, statistics } = video;
  const generateViewCount = (viewCount) => {
    const views = parseInt(viewCount);
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M views'
    }
    else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K views';
    }
    else {
      return views + 'views'
    }
  }
  const getTimeDifference = (publishedDate) => {
    const currentDate = new Date();
    const publishedDateTime = new Date(publishedDate);
    const timeDifference = currentDate - publishedDateTime;

    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (daysDifference > 0) {
      return daysDifference === 1 ? '1 day ago' : daysDifference + ' days ago';
    } else if (hoursDifference > 0) {
      return hoursDifference === 1 ? '1 hour ago' : hoursDifference + ' hours ago';
    } else if (minutesDifference > 0) {
      return minutesDifference === 1 ? '1 minute ago' : minutesDifference + ' minutes ago';
    } else {
      return 'Just now';
    }
  }
  return (
    <div className='mt-5'>
      <img className='rounded-lg cursor-pointer w-72' src={snippet.thumbnails.high.url} alt={snippet.title} />
      <p className='text-[#0f0f0f] text-lg font-bold w-72 mt-3'>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
      <div className='flex items-center'>
        <p className='mr-1'>{generateViewCount(statistics.viewCount)} . </p>
        <p>{getTimeDifference(snippet.publishedAt)}</p>
      </div>
    </div>
  )
}
