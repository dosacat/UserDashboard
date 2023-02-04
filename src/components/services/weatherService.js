
const API_KEY1="032194dc4c503d6";
const API_KEY2="ddf481619d7dac421";
const BASE_URL="https://api.openweathermap.org/data/2.5"

function getWeatherData(infoType,searchParams){
    const url = new URL(BASE_URL+"/"+ infoType);
    url.search= new URLSearchParams({ ...searchParams, appid:API_KEY1+API_KEY2 })

    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data);
};

const formattedCurrentWeather = (data) => {
    const {
        coord: {lon,lat},
        main: {temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        weather,
        country

    } = data 
    const {main:details,icon} = weather[0]
    
    return {lat, lon, details,icon,name,dt,temp,feels_like,temp_min,temp_max,humidity,country}
}
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const getFormattedWeatherData = async (searchParams) => {
    const formatCurrentWeather = await getWeatherData("weather",searchParams)
    .then(formattedCurrentWeather);
    return formatCurrentWeather;
}


export default getFormattedWeatherData;
export { iconUrlFromCode };