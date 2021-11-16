import React, { useState, useEffect } from "react";
import CarService from "../services/CarService";
import { useHistory, useParams } from "react-router-dom";

function AddCar() {
  const history = useHistory();
  let { id } = useParams();

  //   if (id) {
  //     CarService.get(id).then((data) => {
  //       setNewCar(data);
  //     });
  //   }

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: "",
    engine: "",
    numberOfDoors: "",
  });

  const years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018,
  ];

  const types = ["diesel", "petrol", "electric", "hybrid"];

  const resetInputs = (e) => {
    e.preventDefault();
    setNewCar({
      ...newCar,
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      isAutomatic: "",
      engine: "",
      numberOfDoors: "",
    });
  };

  const preview = (e) => {
    e.preventDefault();
    alert(JSON.stringify(newCar));
  };

  const handleChangeYear = (e) => {
    setNewCar({ ...newCar, year: e.target.value });
  };

  const addNewCar = (e) => {
    e.preventDefault();
    if (id) {
      const newCarAdd = CarService.edit(id, newCar).then((data) => {
        console.log(data);
        history.push("/cars");
      });
    }
    const newCarAdd = CarService.add(newCar).then((data) => {
      console.log(data);
      history.push("/cars");
    });
  };

  useEffect(() => {
    if (id) {
      CarService.get(id).then((data) => {
        setNewCar(data);
      });
    }
  }, []);

  return (
    <div>
      <form onSubmit={addNewCar}>
        <input
          required
          type="text"
          minLength="2"
          value={newCar.brand}
          placeholder="Brand"
          onChange={({ target }) =>
            setNewCar({ ...newCar, brand: target.value })
          }
        />
        <input
          required
          type="text"
          minLength="2"
          value={newCar.model}
          placeholder="Model"
          onChange={({ target }) =>
            setNewCar({ ...newCar, model: target.value })
          }
        />
        <select onChange={handleChangeYear} value={newCar.year}>
          {years.map((year) => (
            <option key={year} value={year}>{`${year}`}</option>
          ))}
        </select>
        <input
          type="number"
          value={newCar.maxSpeed}
          placeholder="Max speed"
          onChange={({ target }) =>
            setNewCar({ ...newCar, maxSpeed: target.value })
          }
        />
        <input
          required
          type="number"
          value={newCar.numberOfDoors}
          placeholder="Number of doors"
          onChange={({ target }) =>
            setNewCar({ ...newCar, numberOfDoors: target.value })
          }
        />
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value={newCar.isAutomatic}
            onChange={(e) => {
              console.log(e.target.checked.toString());
              setNewCar({
                ...newCar,
                isAutomatic: e.target.checked.toString(),
              });
            }}
          />
          <label className="form-check-label">Check me out</label>
        </div>
        {types.map((type) => (
          <div key={type}>
            <input
              required
              type="radio"
              name="site_name"
              value={type}
              checked={newCar.engine === type}
              onChange={(e) => {
                setNewCar({
                  ...newCar,
                  engine: e.target.value,
                });
              }}
            />
            {type}
          </div>
        ))}
        <button onClick={(e) => resetInputs(e)}>Reset</button>
        <button onClick={(e) => preview(e)}>Preview</button>
        <button type="submit">Add new</button>
      </form>
    </div>
  );
}

export default AddCar;
