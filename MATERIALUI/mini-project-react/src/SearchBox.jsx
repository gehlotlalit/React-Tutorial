import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}) {


    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "964e7e6f43878cb7d3b8347e1c4c8f5a";

    let getWeatherInfo = async () => {

        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        let jsonResponse = await response.json();
        console.log(" Response : ",jsonResponse);

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        console.log("Result : ", result);
        return result;
    };

    let handleChange = async (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {

        try {
            event.preventDefault();


        setCity("");

        let newInfo = await getWeatherInfo();

        updateInfo(newInfo);
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ paddingBottom: "2rem" }}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />
                <Button variant="contained" type="submit" color='error'   className='btn' >Search</Button>
            </form>
        </>
    )
}