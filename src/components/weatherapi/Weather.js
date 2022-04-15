import { useEffect, useState } from 'react';
import axios from 'axios';
const Weather = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [weatherdata, setWeatherData] = useState([]);
    const getWeatherData = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_OPENWEATHERAPI_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERAPIAPI_KEY}`)
            setWeatherData(data.data)
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        getWeatherData();
    }, [lat, long]);
    let timeZone = 'Asia/Kolkata';
    return (
        <>
            <div className="d-flex flex-wrap top-bar" >
                {weatherdata.length === 0 ? <p>loading...</p> :

                    <>
                        <div className="">
                            <div className="location">
                                <span className="fa fa-map"></span>
                                <a href="#">{weatherdata.name}</a>
                            </div>
                        </div>
                        <div className="">
                            <span className="fa fa-globe"></span>
                            <a href="#">Language</a>

                        </div>
                        <div className="">
                            <select >
                                <option value="eng">En</option>
                                <option value="eng">Hn</option>
                            </select>
                        </div>
                        <div className="">
                            <div className="weather">
                                <a href="#">
                                    {weatherdata.main.temp} <sup>C |  F</sup>
                                </a>
                                <span>&nbsp; Sunset {new Intl.DateTimeFormat('en-US', { timeStyle: 'short', timeZone }).format(weatherdata.sys.sunset)}</span>
                            </div>
                        </div>
                    </>
                }
            </div>

        </>
    )
}

export default Weather