import React, { useMemo } from 'react';
import { useState } from 'react';
import { primeNum } from '../utils/helper';

const Demo = () => {
    const[text, setText] = useState(0);
    const[isDarkTheme, setIsDarkTheme] = useState(false);


    const prime = useMemo( ()=> primeNum(text),[text]);
  return (
    <div className={'m-4 p-2 h-96 border border-black' + (isDarkTheme && ' bg-gray-900 text-white')}>
     <div>
      <button className='m-10 p-2 bg-green-200 rounded-lg' onClick={()=> setIsDarkTheme(!isDarkTheme)}>Toggle</button>
     </div>
      <div>
        <input className=' m-3 border border-black w-72 px-2 ' type='number' value={text} onChange={(e)=> setText(e.target.value)} />
      </div>
      <div>
        <h1 className='px-3 mt-2 font-bold text-xl'>nth Prime : {prime} </h1>
      </div>
    </div>
  )
}

export default Demo
