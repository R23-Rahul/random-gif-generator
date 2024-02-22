
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';


export const Random = () => {
// const [gif,setGif]=useState('');

//   const [loading,setLoading]=useState(false);
//   async function fetchData(){
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=zW8dktPu0T9Ia8lQ3N9s7A71TeLZwhKh&tag=&rating=g`;
//     const {data}= await axios.get(url);
//    const imageSource=data.data.images.downsized_large.url;
//      setGif(imageSource);
//      setLoading(false);
//   }
//   useEffect(()=>{
//     fetchData();
//   },[])
  
const {gif,loading,fetchData}=useGif();
    function clickHandler(){
      fetchData();
    }
  return (
    <div className='flex flex-col items-center w-1/2 h-auto bg-green-500 rounded-lg border border-black gap-5 mt-[5px]  mb-[5px] p-[15px]'>
        <h1 className='text-3xl underline uppercase font-bold pt-[15px]'>A Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="Im"className='w-2/3 h-2/3' />)
        }
        
         <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg '>
            Generate
         </button>

    </div>
  )
}
