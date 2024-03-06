import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import {YOUTUBE_API} from '../utils/constants';

export default function useFetchVideoData() {
    const [loading, setLoading] = useState(false);
    const [popularVideos, setPopularVideos] = useState([]);
    const [error, setError] = useState("");
    const fetchPopularVideos = async () => {
        setLoading(true);
        try {
           const response = await axios.get(YOUTUBE_API);
           setPopularVideos(response.data.items);
           setLoading(false) 
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchPopularVideos()
    },[])
  return {loading,popularVideos,error}
}
