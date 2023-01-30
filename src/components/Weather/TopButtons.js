import React from 'react';


function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            city:"Dubai",
        },

        {
            id:2,
            city:"Berlin",
        },

        {
            id:3,
            city:"Bengaluru",
        }
    ]
    function change(event){

        setQuery(
            {q:event.target.innerHTML}
            )
    }

  return (
    <div className='flex items-center justify-around'>
        {cities.map((city) => 
        (<button className="text-green-100 text-lg font-medium" onClick={change}>{city.city}</button>
        ))}
    
    </div>
  )
}

export default TopButtons;