import React from 'react';
import {
  UilTemperature,
  UilTear,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from '../services/weatherService.js';

function Details({wea,units}) {
  console.log(units)
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-white"><p>{`${wea.details}`}</p></div>
        
        <div className='flex items-center justify-between text-white py-3'>
          <img src={iconUrlFromCode(`${wea.icon}`)} className='w-20'/>
          <p className='text-5xl'>{`${wea.temp.toFixed()}°`}</p>
          <div className='flex flex-col space-y-2'>
            <div className='flex flex-col space-y-2'>
              <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={20} className="mr-1"/> Real feel:
                <span className='font-medium ml-1'>{`${wea.feels_like.toFixed()}°`}</span>
              </div>
              
              <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={20} className="mr-1"/> Humidity:
                <span className='font-medium ml-1'>{`${wea.humidity}%`}</span>
              </div>
            </div>
          </div>

        </div>
        
        
    </div>
    
  )
}

export default Details;