interface ComponentProps{
    minutes:string;
    seconds: string;
    pauseFunct: ()=>void;
    pauseButton: string|boolean;
    startFunct: ()=>void;
    breakFunct: ()=>void;
}
export default function WatchDesign({minutes,seconds,pauseFunct,pauseButton,startFunct,breakFunct}:ComponentProps){
    
    return (
     <div className="flex flex-col  bg-black h-screen w-screen items-center justify-center">
      <div className="outside-polygon bg-blue-800 w-100 h-80  ">
        <div className="outside-polygon bg-black w-99 h-79  ">
          <div className="outside-polygon bg-blue-800 w-97 h-77">
            <div className="outside-polygon bg-black w-94 h-74  ">
              <div className="outside-polygon bg-white w-91 h-71  ">
                <div className="outside-polygon bg-black w-90 h-70  r">
                  <div className="flex  w-86 h-70 flex-col items-center  justify-center">
                    <div className="border-b-4 p-1  border-blue-800 w-86 h-10 flex items-center justify-around">
                      <h1 className="text-white font-bold">CASIO</h1>
                      <h1 className="text-yellow-500 font-bold"> F-91W </h1>
                      
                    </div>
                    <div className="flex text-sm flex-row items-center justify-around w-86 h-50">
                      <div className="gap-1 flex items-center justify-center">
                        <div className="red-triangle  w-4 h-4"></div>

                        <h1 className="text-white font-thin">LIGHT</h1>
                      </div>
                      <h1 className="text-yellow-500">ALARM CHRONOGRAPH</h1>
                    </div>
                    <div className=" w-86 h-50 flex items-center justify-center">
                      <div className=" border-2 rounded-sm  flex items-center justify-center border-[#a1a79b] w-69 h-37">
                        <div className="bg-[#a1a79b]  rounded-sm  flex  items-center justify-center border-white w-66 h-35">
                          <h1 className="text-grey-800 self-end font-(family-name:--font-digital-7) ml-auto pr-4 text-7xl ">
                            {minutes}:{seconds}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex text-sm flex-row items-center justify-around w-86 h-50">
                      <div className="gap-1 flex items-center justify-center">
                        <div className="red-triangle  w-4 h-4"></div>

                        <h1 className="text-white font-thin">MODE</h1>
                      </div>

                      <div className="flex items-center gap-1 justify-center">
                        <h1 className="text-white">ALARM ON-OFF/24HRS</h1>
                        <div className="bg-red-800 [clip-path:polygon(100%_37%,0%_49%,0%_24%)]  w-4 h-4"></div>
                      </div>
                    </div>
                    <div className="border-t-4 p-1 border-blue-800 w-86 h-10 flex items-center justify-center ">
                      <button 
                      className="text-white font-bold"
                      onClick={pauseFunct}>{pauseButton}</button>
                      <div className="button-polygon text-red-600  bg-blue-800  border-r-4 border-l-4  border-black ring-black black mr-2  ml-2  mb-1 font-bold p-1 ">
                        <button
                          className="bg-black button-polygon p-1"
                          onClick={startFunct}
                        >
                          {" "}
                          START TIMER
                        </button>
                      </div>
                      <button 
                      className="text-white font-bold"
                      onClick={breakFunct}>BREAK</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}