import React from 'react';
import { Link } from 'react-router-dom';



const Rooms = () => {
  let rooms = ['Tech', 'Fitness', 'Sports', 'Beauty', 'Books', 'Stocks'];

  return (
      <body>
        <div className="rooms container">
        <ul>
        {rooms.map(room => {
            return (
            <li key={room}>
                <button className='room__btn'>{ room }</button>
            </li>
            )
        })}
        </ul>
     </div>
      </body>
    
  )
}

export default Rooms;