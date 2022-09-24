import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Weater_Card from './components/Weater_Card'
import Loading from './components/Loading'
import Card_child from './components/Card_child'

function App() {
  const [coords, setCoords] = useState()
  const [weater, setWeater] = useState()
  const [temperature, setTemperature] = useState()
  useEffect(() => {
    const succese = (pos) => {
        const obj = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
        }
        setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(succese)
}, [])
useEffect(() => {
    if (coords) {
        const APIKEY = "b2df55d394b77c33d15eb984bddee175"
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
        axios.get(URL)
            .then(res => {
                setWeater(res.data)
                const conversionTemp = {
                    celsiu: `${(res.data.main.temp - 273.15).toFixed(0)} °C`,
                    farenheit : `${((res.data.main.temp - 273.15)*9/5+32).toFixed(0)} °F`
                }
                setTemperature(conversionTemp)
            })
            .catch(err => console.log(err))
    }
}, [coords])
  return (
    <div className="App">
      {
        weater ?
          <Weater_Card weater={weater} temperature={temperature} />
          :
          <Loading />
      }
    </div>
  )
}

export default App
