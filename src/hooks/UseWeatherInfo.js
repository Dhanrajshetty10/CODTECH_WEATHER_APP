import React, { useEffect, useState } from 'react'

function UseWeatherInfo(city) {
    const [data,setData] = useState({})
    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`)
      .then((res)=> res.json())
.then((res)=> console.log(res))
    },[city])
  return data;
}

export default UseWeatherInfo