import React, { useRef, useState } from 'react'


const Demo2 = () => {

    const [y, setY] = useState(0);
    let x = 0;


    const ref = useRef(0);
   

    return ( 
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96 rounded-lg'>
      <div>
        <button className='bg-green-400 px-2 m-4 text-black rounded-xl' onClick={()=>{
            x=x+1;
            console.log(x);
        }}>
           Increase x
        </button>
        <span className='font-bold text-xl'>Let = {x}</span>
       </div>
       <div>
        <button className='bg-green-400 px-2 m-4 text-black rounded-xl' onClick={()=>{
            setY(y+1)
          console.log(y)
        }}>
           Increase y
        </button>
        <span className='font-bold text-xl'>State = {y}</span>
       </div>

       <div>
        <button className='bg-green-400 px-2 m-4 text-black rounded-xl' onClick={()=>{
          ref.current= ref.current+1;
          console.log("ref = " + ref.current)
        }}>
           Increase Ref
        </button>
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
       </div>
    </div>
  
  );
};

export default Demo2
