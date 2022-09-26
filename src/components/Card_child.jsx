import axios from 'axios'
import React from 'react'
import { ImLocation} from "react-icons/im"
import { useEffect } from 'react'
import { useState } from 'react'

const Card_child = ({ contryName }) => {
  const [child, setChild] = useState()
  useEffect(() => {
    const APIKEY = "b2df55d394b77c33d15eb984bddee175"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${contryName}&appid=${APIKEY}&units=metric`
    axios.get(URL)
      .then(res => setChild(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(child);
  return (
    <div className='Card_child tarjeta'>
      <div className="title_child">
        <h3><ImLocation />{child?.name},{child?.sys.country}</h3>
        <img src={child && `http://openweathermap.org/img/wn/${child?.weather[0].icon}@4x.png`} alt="icono" />
      </div>
      <div className='inf_child'>
        <div className="temperatura_inf">
          <h3>temperature</h3>
          <h4><span>{child?.main.temp}°C</span></h4>
        </div>
        <div className="humidity_inf">
          <h3>humidity</h3>
          <h4><span>{child?.main.humidity}%</span></h4>
        </div>
        <div className="pressure_inf">
          <h3>pressure</h3>
          <h4><span>{child?.main.pressure}hPa</span></h4>
        </div>
        <div className="clouds_inf">
          <h3>clouds</h3>
          <h4><span>{child?.clouds.all}%</span></h4>
        </div>
        <div className="speed_inf">
          <h3>cloud speed</h3>
          <h4>{child?.wind.speed}m/s</h4>
        </div>
      </div>
    </div>
  )
}





export default Card_child