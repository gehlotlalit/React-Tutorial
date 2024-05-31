import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    let [weatherInfo, setweatherInfo] = useState({    
            city: "Delhi",
            feels_like: 24.84,
            Temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze" 
    });

    let updateInfo = (newInfo) =>{
        console.log("updateInfo",updateInfo)
        setweatherInfo(newInfo);
    }

    return(
        <div>
            <h3>Weather App By Lalit Malviya</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}