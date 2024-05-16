import React,{useState, useEffect} from 'react'
import { FaFan } from "react-icons/fa";
import {FIREBASE_DB} from "../firebaseinit"
import { onValue, ref , set} from "firebase/database";

const Controls = () => {
  const [blower1, setBlower1] = useState(false)
  const [blower2, setBlower2] = useState(false)

  useEffect(()=>{
    let query = ref(FIREBASE_DB, "control");
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            if(data == 0){
              setBlower1(false)
              setBlower2(false)
            }
            else if(data == 1){
              setBlower1(true)
              setBlower2(false)
            }
            else if(data == 2){
              setBlower1(false)
              setBlower2(true)
            }
            else{
              setBlower1(true)
              setBlower2(true)
            }
          }
        });
  },[blower1, blower2, setBlower1, setBlower2])

  // 0 -> 0 0
  // 1 -> 1 0
  // 2 -> 0 1
  // 3 -> 1 1
  const handleSet = (blower)=>{
    let query = ref(FIREBASE_DB, "control");
    if(blower == 1){
      if(!blower1){
        if(blower2){
          // set 3
          set(query,3)
        }
        else{
          // set 1
          set(query,1)
        }
      }
      else{
        if(blower2){
          // set 2
          set(query,2)
        }
        else{
          // set 0
          set(query,0)
        }
      }
    }
    else if(blower == 2){
      if(blower1){
        if(!blower2){
          // set 3
          set(query,3)
        }
        else{
          // set 1
          set(query,1)
        }
      }
      else{
        if(!blower2){
          // set 2
          set(query,2)
        }
        else{
          // set 0
          set(query,0)
        }
      }
    }
  }
  return (
    <div className='flex flex-wrap gap-5 py-32 justify-center items-center'>
      {blower1 ?  
      <div onClick={()=>handleSet(1)} className='px-8 py-8 rounded-lg cursor-pointer shadow-lg hover:shadow-none bg-slate-200 flex flex-col items-center'>
        <FaFan className='text-4xl text-slate-800' />
        <p className='text-2xl font-semibold text-slate-800 mt-4'>Blower 1</p>
      </div>
      : 
      <div onClick={()=>handleSet(1)} className='px-8 py-8 rounded-lg cursor-pointer shadow-lg hover:shadow-none bg-rose-200 flex flex-col items-center'>
        <FaFan className='text-4xl text-rose-800' />
        <p className='text-2xl font-semibold text-rose-800 mt-4'>Blower 1</p>
      </div>
      }

    {blower2 ?  
      <div onClick={()=>handleSet(2)} className='px-8 py-8 rounded-lg cursor-pointer shadow-lg hover:shadow-none bg-slate-200 flex flex-col items-center'>
        <FaFan className='text-4xl text-slate-800' />
        <p className='text-2xl font-semibold text-slate-800 mt-4'>Blower 2</p>
      </div>
      : 
      <div onClick={()=>handleSet(2)} className='px-8 py-8 rounded-lg cursor-pointer shadow-lg hover:shadow-none bg-sky-200 flex flex-col items-center'>
        <FaFan className='text-4xl text-sky-800' />
        <p className='text-2xl font-semibold text-sky-800 mt-4'>Blower 2</p>
      </div>
      }

      
    </div>
  )
}

export default Controls