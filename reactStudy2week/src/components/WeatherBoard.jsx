import React, { useEffect } from "react";

function WeatherBoard(props) {
    const [weather, setWeather] = React.useState({});
    const wheatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=37.3942527&lon=126.9568209&appid=0269557d7c0471fcd094cd512b713b51&lang=kr&units=metric';


    useEffect(() => {
        fetch(wheatherAPI)
                .then(response => response.json())
                .then(data => {
                    console.log("날씨:", data.weather);
                    setWeather(data.weather[0]) 
                })
                .catch(error => console.error("날씨 정보 가져오기 실패:", error));
    }, []);

    return (
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white w-96 h-24 shadow-md rounded-lg p-4 mb-4">
                    {weather.description ? (
                        <h2 className="text-xl font-bold">현재 날씨: {weather.description}</h2>
                    ) : (
                        <h2 className="text-xl font-bold">현재 날씨 정보를 불러오는 중...</h2>
                    )}
                </div>
            </div>
    )
}

export default WeatherBoard;