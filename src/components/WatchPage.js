import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchIndividualData from '../hooks/useFetchIndividualData';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../features/toggleMenu/toggleMenuSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


export default function WatchPage() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSideBar());
    }, []);
    const { loading, error, individualVideoData } = useFetchIndividualData(params.id);
    if (loading || !individualVideoData) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <p className='text-red-500'>{error}</p>;
    }

    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <div className='m-10 w-3/4'>
                    {individualVideoData.map((videoDetails) => (
                        <div key={videoDetails.id}>
                            <iframe width="1150" height="515" src={`https://www.youtube.com/embed/${videoDetails.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='rounded-2xl cursor-pointer' allowfullscreen></iframe>
                            <h1 className='text-xl font-bold mt-3'>{videoDetails.snippet.title}</h1>
                            <div className='flex items-center mt-3'>
                                <p className='text-gray-600'>{videoDetails.snippet.channelTitle}</p>
                                <button className='bg-black text-white rounded-full cursor-pointer p-2 ml-4'>Subscribe</button>
                            </div>
                            <div className='bg-gray-200 text-gray-800 p-5 rounded-md mt-3'>
                                <p>{videoDetails.snippet.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='m-8'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>

    );
}
