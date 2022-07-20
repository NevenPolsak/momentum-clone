import React, { useState, useEffect } from "react";
import axios from "axios";
import {WeatherContainer, Temp, City} from './WheaterStyles'

const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/zagreb?unitGroup=metric&key=P3ZRF74E2QEJ7NRCP6A3EN7VG&contentType=json"



function Wheater() {
const [data,setData] = useState(null)

useEffect(()=>{
    axios.get(url).then((response)=>{
        setData(response.data)
    }).catch((error)=>{
        console.log(error)
    })
},[])

console.log(data)

if(!data) return null;


  return(
    <WeatherContainer>
      <Temp>{data.days[0].tempmax.toFixed(0)} &#8451;</Temp>
      <City>Zagreb, HR</City>
    </WeatherContainer>
       
    
  )
}

export default Wheater;
