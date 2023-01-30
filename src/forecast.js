
import './forecast.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/Weather/TopButtons';
import Input from './components/Weather/Input';
import Display from './components/Weather/display';
import Details from './components/Weather/Details';

import getFormattedWeatherData from './components/services/weatherService';
import { useEffect,useState } from 'react';

function Forecast() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {


      await getFormattedWeatherData({ ...query, units }).then((data) => {


        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-24 py-2 bg-emerald-900 h-fit rounded-xl">
        <TopButtons setQuery={setQuery}/>
        <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <Display wea={weather} />
          <Details wea={weather} units={units} />
        </div>
      )}
 
    </div>
  );
}

export default Forecast;