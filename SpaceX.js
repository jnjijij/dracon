import React, { useState, useEffect } from 'react';

function SpaceX() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(response => response.json())
      .then(data => {
        // Фільтруємо запуски без 2020 року
        const filteredLaunches = data.filter(launch => new Date(launch.launch_date_utc).getFullYear() !== 2020);
        setLaunches(filteredLaunches);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Запуски SpaceX</h1>
      <ul>
        {launches.map(launch => (
          <li key={launch.flight_number}>
            <p>Flight Number: {launch.flight_number}</p>
            <p>Mission Name: {launch.mission_name}</p>
            <p>Launch Date: {launch.launch_date_utc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaceX;
