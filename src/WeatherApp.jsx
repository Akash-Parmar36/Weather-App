import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import {useState} from 'react';

export default function WeatherApp(){


    let [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        temp : 24.05,
        tempMin : 24.05,
        tempMax : 24.05,
        humidity : 78,
        feelsLike : 24.55,
        weather : "mist"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    );
}