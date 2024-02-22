import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


export const Tag= () => {

 const[tag,setTag]=useState('');
// const [gif,setGif]=useState('');

//   const [loading,setLoading]=useState(false);

//   async function fetchData(){
//         setLoading(true);
//         const url = `https://api.giphy.com/v1/gifs/random?api_key=zW8dktPu0T9Ia8lQ3N9s7A71TeLZwhKh&tag=${tag}&rating=g`;
//         const {data}= await axios.get(url);
//         const imageSource=data.data.images.downsized_large.url;
//         setGif(imageSource);
//         setLoading(false);
//   }
  
//   useEffect(()=>{
//     fetchData();
//   },[])
  
const {gif,loading,fetchData}=useGif(tag);

  function changeHandler(event){
     setTag(event.target.value);
  }
    function clickHandler(){
      fetchData(tag);
    }
  return (
    <div className='flex flex-col items-center w-1/2 h-auto bg-blue-500 rounded-lg border border-black gap-5 mt-[5px] mb-[5px] p-[15px]'>
        <h1 className='text-3xl underline uppercase font-bold pt-[15px]'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner className="justify-center align-center"/>) : (<img src={gif} className='w-2/3 h-2/3' />)
        }

        <input 
         className='w-10/12 bg-white-500 text-lg py-2 rounded-lg items-center text-center'
         onChange={changeHandler}
         value={tag}
         placeholder='write here to search...'
        />
        
         <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg pb-1rem '>
            Generate
         </button>

    </div>
  )
}
