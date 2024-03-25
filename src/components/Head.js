import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { chacheResults } from '../utils/searchSlice';

const Head = () => {

const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggestion, setShowSuggestion] = useState(false);

const searchCache = useSelector((store)=>store.search);
const dispatch = useDispatch();

useEffect(()=>{
  const timer = setTimeout(() =>{
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  }else{
    getSearchSuggestions();
  }
  }, 200);
 
 return()=>{
 clearTimeout(timer);
 };
 }, [searchQuery]);

const getSearchSuggestions = async () =>{
const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
const json =  await data.json();
setSuggestions(json[1]);

dispatch(chacheResults({
  [searchQuery]: json[1],
}));
}


const toggleMenuHandler = () =>{
  dispatch(toggleMenu());
};

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
     <img 
     onClick={() =>toggleMenuHandler()}
     className='cursor-pointer h-8' alt='menu' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8jHyAAAAD4+PgSCw3v7++5ubmvr6+AgICIh4idnJ11dHQPBwn19fX7+/vc29yWlZXPzs4YExSPjo7Ix8fCwcEwLS6mpqYdGxw8Ozs2NDVPTk5HRUYmIyMKBwZBQEC4cw/6AAABMklEQVR4nO3cS27CQBAFQBsbDMb4h4kJhOT+t4zYR1m10hGqusHTjHoW89RFAQAAAAAAAAAAQJp+afJcTqFZlnKTad4FZhneujJTXS5hWfp1k5qlLDdj2E077dPDHLdRYao2Pcw5bgZM1zk1yxw5AarmmjvN2sjh3E/tPs84xT40RV/l6WOjAAAAAAAAAK9nGg95xiXyV7Nq3uc6z3xbA7+bh0edW2qoX6oIFFc3eaki0D84mbiKVjHcumtmlvoxhWUp+t197vLMH01oeWZY2zzrpD0DAAAAAAAA/O60zRO82uB0OR/zHHZhlYbiud4kd4dGfQ5MM83J203quO0m1ZheNzkoAv2kb9LDhBaBctN0kUWgYrh/JtYaP78iszxXAu3yLMGvJgAAAAAAAAAAwF/6BpEnOMoPe9uNAAAAAElFTkSuQmCC'/>
    <a href='/'>
    <img className='h-8 mx-2' alt='youtube-logo' src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png' />
    </a>
    </div>
    <div className='col-span-10 px-10'>
        <div>
        <input className=' px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion(false)}/>
        <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100 '> 🔍 </button>
        </div>
       {showSuggestion && ( <div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map(s =><li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>)}
          </ul>
            
        </div>)}
    </div>
    <div className='col-span-1 '>
        <img className='h-8' alt='user'  src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
    </div>
     </div>
 
  )
}

export default Head;
