
'use client'
import React from "react";
import { useState, useEffect} from "react";

export default function Home() {
  const [minutes,setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  function handleClick() {
    setMinutes(25);
    setSeconds(0);
  }
  useEffect(() => {
    const timer = setInterval(()=>{
       if(seconds==0){
        console.log(seconds);
         setSeconds((prevSeconds)=> 59);
         console.log(seconds);
         setMinutes((prevMinutes)=> prevMinutes-1);}
      else if(seconds>0){
      setSeconds((prevSeconds)=> prevSeconds-1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes]);
  return (
     <div className="flex flex-col  bg-black h-screen w-screen items-center justify-center">
     <div className="[clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] bg-blue-800 w-100 h-80  flex flex-col items-center justify-center">
     <div className="[clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] bg-black w-99 h-79  flex flex-col items-center justify-center">
      <div className="[clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] bg-blue-800 w-97 h-77 flex flex-col items-center justify-center">
          <div className="[clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] bg-black w-94 h-74  flex flex-col items-center justify-center">
            <div className="[clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] bg-white w-91 h-71  flex flex-col items-center justify-center">
              <div className="[clip-path:polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] bg-black w-90 h-70  flex flex-col items-center justify-center">
     <div className="flex  w-86 h-70 flex-col items-center  justify-center">
      <div className="border-b-4 p-1  border-blue-800 w-86 h-10 flex items-center justify-around">
        <h1 className="text-white font-bold">CASIO</h1>
        <h1 className="text-yellow-500 font-bold"> F-91W </h1>
      </div>
      <div className="flex text-sm flex-row items-center justify-around w-86 h-50">
           <div className="gap-1 flex items-center justify-center">
         <div className="bg-red-800 [clip-path:polygon(0%_37%,100%_49%,100%_24%)]  w-4 h-4"></div>
       
        <h1 className="text-white font-thin">LIGHT</h1>
       </div>
       <h1 className="text-yellow-500">ALARM CHRONOGRAPH</h1>
       </div>
      <div className=" w-86 h-50 flex items-center justify-center">
      
        <div className=" border-2 rounded-sm  flex items-center justify-center border-[#a1a79b] w-69 h-37">
           <div className="bg-[#a1a79b]  rounded-sm  flex  items-center justify-center border-white w-66 h-35">
          
           <h1 className="text-grey-800 self-end font-(family-name:--font-digital-7) ml-auto pr-4 text-7xl ">{minutes}:{seconds}</h1>
        
        </div>
   
        </div>
     
      </div>
       <div className="flex text-sm flex-row items-center justify-around w-86 h-50">
                <div className="gap-1 flex items-center justify-center">
         <div className="bg-red-800 [clip-path:polygon(0%_37%,100%_49%,100%_24%)]  w-4 h-4"></div>
       
        <h1 className="text-white font-thin">MODE</h1>
        </div>
        
        <div className="flex items-center gap-1 justify-center">
         
       <h1 className="text-white">ALARM ON-OFF/24HRS</h1>
        <div className="bg-red-800 [clip-path:polygon(100%_37%,0%_49%,0%_24%)]  w-4 h-4"></div>
       </div>
        </div>
      <div className="border-t-4 p-1 border-blue-800 w-86 h-10 flex items-center justify-center ">
            <h1 className="text-white font-bold">WATER</h1>
            <div className="[clip-path:polygon(25%_95%,80%_95%,100%_80%,100%_0%,0%_0%,0%_80%)] text-red-600 bg-black bg-blue-800  border-r-4 border-l-4  border-black ring-black black mr-2  ml-2 mb-1 font-bold p-1 ">
             <button className="[clip-path:polygon(25%_95%,80%_95%,100%_80%,100%_0%,0%_0%,0%_80%)] p-1 bg-black" onClick={handleClick}> START TIMER</button>
              </div>
            <h1 className="text-white font-bold">RESIST</h1>

      </div>
      
      </div>
     </div>
     </div>
     </div>
     </div>
     </div>
    </div>
    </div>
  );
}
