"use client";
import React from "react";
import { useState, useEffect } from "react";

import WatchDesign from "./components/clockDesign";

export default function Home() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState([false,'PAUSE'])
  function textDisplay(element:number){
    return String(element).padStart(2,'0')
  }
  function handleClick() {
    setMinutes(25);
    setSeconds(0);
    setStart([true,'PAUSE'])
    Notification.requestPermission();
    
  }
  function handleBreakClick(){
       setMinutes(5);
       setSeconds(0);
       setStart([true,'PAUSE'])
       Notification.requestPermission();
  }
  function handlePause(){
       if(start[0]){
          setStart([false,'RESUME'])
       }
       else if(!start[0]){
          setStart([true,'PAUSE'])
       }
  }
  async function handleNotifications(){
         const permission = await navigator.permissions.query({name: "notifications"});
          if (permission.state === "granted") {
              new Notification("The pomodoro timer has ended")
            } 
  }

  function addSound(){
      const audioElement = new Audio("../sound/mixkit-retro-game-notification-212.mp3")
      audioElement.play()
    
  }
  useEffect(() => {
    const timer = setInterval(async () => {
      if(start[0]){
      if(seconds===0 && minutes==0){
        //At the end of the timer, to display a notification
             addSound()
             await handleNotifications()
             setStart([false,'PAUSE'])
             
      }
      else if (seconds === 0 ) {
        setSeconds((prevSeconds) => 59);
        setMinutes((prevMinutes) => prevMinutes - 1);
      } else if (seconds > 0 ) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }}, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes,start]);
  return (
     <WatchDesign 
     minutes={textDisplay(minutes)} 
     seconds={textDisplay(seconds)} 
     pauseFunct = {handlePause}  
     pauseButton={start[1]}
     breakFunct={handleBreakClick}
     startFunct = {handleClick} ></WatchDesign>
  );
}
