import React, { useEffect, useState } from 'react'
import {  ImLocation,ImDroplet,ImCloud,ImSortAmountAsc,ImForward3 } from "react-icons/im"
import Card_child from './Card_child'
import soleados from '../assets/soleado.jpg'
import lluviosos from '../assets/lluvioso.jpg'
import truenos from '../assets/trueno.jpg'
import nevados from '../assets/nevando.jpg'
import nublados from '../assets/nublado.jpg'
 
const Weater_Card = ({ temperature, weater }) => {
    const [celsius, setCelsius] = useState(true)
    const ChangeTemp = () => setCelsius(!celsius)

//!aqu es 
let soleado = {backgroundImage:`url(${soleados})`}
let lluvia = {backgroundImage:`url(${lluviosos})`}
let trueno = {backgroundImage:`url(${truenos})`}
let nevando = {backgroundImage:`url(${nevados})`}
let nublado = {backgroundImage:`url(${nublados})`}
const fondo = ()=>{
    if(weater.weather[0].icon == "01d" || weater.weather[0].icon == "02d" || weater.weather[0].icon == "03d" || weater.weather[0].icon == "04d"){
        return soleado
    }else if(weater.weather[0].icon == "09d" || weater.weather[0].icon == "10d"){
        return lluvia
    }else if(weater.weather[0].icon == "11d" ){
        return trueno
    }else if(weater.weather[0].icon == "13d" ){
        return nevando
    }else if(weater.weather[0].icon == "50d" ){
        return nublado
    }
}
console.log(weater?.weather[0].icon);
console.log((weater?.weather[0].icon == "03d"));

    return (
        <div className='container_inf' style={fondo()}>
            <div className='principal_inf'>
                <h2 className='location_inf tarjeta'>
                 <ImLocation/><span>{weater?.name},{weater?.sys.country}</span>
                </h2>
                <div className='icono_inf tarjeta'>
                    <img src={weater && `http://openweathermap.org/img/wn/${weater?.weather[0].icon}@4x.png`} alt="icono" />
                    <h2>temperature: <span>{celsius ? (temperature?.celsiu) : temperature?.farenheit}</span></h2>
                    <button className='btn' onClick={ChangeTemp}> {celsius ? 'Change °F' : 'Change °C'} </button>
                </div>
                <div className='time tarjeta'>
                <h2 className='time_inf'>{weater?.weather[0].description}</h2>
                </div>
            </div>
            <div className='lista_inf tarjeta'>
                <div className="humidity_inf">
                    <h3>humidity</h3>
                    <i><ImDroplet/></i>
                    <h4><span>{weater?.main.humidity}%</span></h4>
                </div>
                <div className="pressure_inf">
                    <h3>pressure</h3>
                    <i><ImSortAmountAsc/></i>
                    <h4><span>{weater?.main.pressure}hPa</span></h4>
                </div>
                <div className="clouds_inf">
                    <h3>clouds</h3>
                    <i><ImCloud/></i>
                    <h4><span>{weater?.clouds.all}%</span></h4>
                </div>
                <div className="speed_inf">
                    <h3>velocidad de nubes</h3>
                    <i><ImForward3/></i>
                    <h4>{weater?.wind.speed}m/s</h4>
                </div>
            </div>
            <div className='container_child '>
                <Card_child contryName= {"London"}/>
                <Card_child contryName= {"Mexico"}/>
                <Card_child contryName= {"NEW YORK"}/>
            </div>

        </div>
    )
}

export default Weater_Card