import react from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import temp

const Timer = () => {
//const Tempo = tempo;
const [seconds,setSeconds]=useState(0);
const [minutes,setMinutes]=useState(3);

var timer;
useEffect(()=>{
    timer = setInterval(()=>{
        setSeconds(seconds-1);
        if(seconds===0){
            setMinutes(minutes-1);
            setSeconds(59);
        }
    },1000)

return ()=> clearInterval(timer);

});

    return (
        <a>{minutes}:{seconds}</a>
    )

}



export default Timer;