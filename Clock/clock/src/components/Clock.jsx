import React, { useEffect } from 'react'

const Clock = () => {
   const [time, setTime] = React.useState(new Date())

   useEffect(()=>{
    const Interval = setInterval(() => {
       setTime(new Date())
    }, 1000)

    return () => {
    clearInterval(Interval)
    }
   },[])

   function formatTime(){
    let hours = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()

    return `${hours}:${minute}:${seconds}`
   }


  return (
    <div>{formatTime()}</div>
  )
}

export default Clock