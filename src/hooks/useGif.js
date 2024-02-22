
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from '../components/Spinner';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=zW8dktPu0T9Ia8lQ3N9s7A71TeLZwhKh&tag=${tag}&rating=g`;
const randomMemeUrl= `https://api.giphy.com/v1/gifs/random?api_key=zW8dktPu0T9Ia8lQ3N9s7A71TeLZwhKh&tag=&rating=g`;

  const [gif,setGif]=useState('');
  const [loading,setLoading]=useState(false);

  async function fetchData(tag){
        setLoading(true);
       
        const {data}= await axios.get(tag ? tagUrl :randomMemeUrl);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  
return {gif,loading,fetchData};
}



export default useGif;
