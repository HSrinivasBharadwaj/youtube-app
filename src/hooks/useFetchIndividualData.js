import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { YOUTUBE_WATCH_PAGE_API } from '../utils/constants';

export default function useFetchIndividualData(id) {
    const [loading, setLoading] = useState(false);
    const [individualVideoData, setIndividualVideoData] = useState([]);
    const [error, setError] = useState("");
    const fetchIndividualData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(YOUTUBE_WATCH_PAGE_API+id);
            setIndividualVideoData(response.data.items);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchIndividualData()
    },[])
  return {error,individualVideoData,loading}
}
