import React from 'react'
import { useState } from 'react'

function ApiData(city) {
    let [data,setdata]=useState({});
  let url=`http://api.weatherapi.com/v1/current.json?key=2fd1af6afa3a45b99b534802240501&q=${city}&aqi=no`
  fetch(url).then((res)=> res.json())
  .then((res)=> setdata(res))
  return data;
}

export default ApiData
