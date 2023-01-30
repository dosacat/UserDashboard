import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { useState } from 'react';

function Input({setQuery,units,setUnits}) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
  }};

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit){
      setUnits(selectedUnit);} 
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coord.latitude;
        let lon = position.coord.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row justify-center space-x-4 items-center space-x-4">
        <input type="text" 
        placeholder='Search...'
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        className='text-xl font-light w-full shadow-xl p-2' />
        <UilSearch size={25} className="text-white hover:scale-125" onClick={handleSearchClick}/>
        <UilLocationPoint size={25} className="text-white hover:scale-125" onClick={handleLocationClick}/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name="metric" className="text-xl text-white hover:scale-125 transition ease-out" onClick={handleUnitsChange}>
        °C</button>
        <p className='text-white mx-1'>|</p>
        <button name="imperial" className="text-xl text-white hover:scale-125 transition ease-out" onClick={handleUnitsChange}>
        °F</button>
      </div>
    </div>
  )
}

export default Input;