import React, { useState, useEffect } from "react";
import CarService from "../services/CarService";

function AppCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    CarService.getAll().then((data) => {
      setCars(data);
    });
  }, []);

  //   return <div className="container">AppCars {cars}</div>;
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <p>Brand: {car.brand}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Max speed: {car.maxSpeed}</p>
            <p>Automatic: {car.isAutomatic.toString()}</p>
            <p>Engine: {car.engine}</p>
            <p>Number of doors: {car.numberOfDoors}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppCars;
