import React, { Component } from "react";

export class SortBy extends Component {
  state = {
    cars: [
      {
        id: 20,
        mileage: 41300,
        make: "Golf",
        initialRegistration: "09/02/2010",
        value: false,
      },
      {
        id: 21,
        mileage: 51300,
        make: "Passat",
        initialRegistration: "06/04/2012",
        value: false,
      },
      {
        id: 22,
        mileage: 61300,
        make: "Audi",
        initialRegistration: "02/01/2018",
        value: false,
      },
      {
        id: 23,
        mileage: 20300,
        make: "Touran",
        initialRegistration: "17/09/2013",
        value: false,
      },
      {
        id: 24,
        mileage: 10300,
        make: "Polo",
        initialRegistration: "26/07/2014",
        value: false,
      },
    ],
    query: "",
    filterCar: [],
    selectValue: "all",
    selectCar: [],
    selectedRadioValue: "",
  };

  searchHandler = (e) => {
    console.log(e.target.value);
    this.setState((prevState) => {
      return {
        query: e.target.value,
      };
    });

    // this.setState((prevState) => {
    //   return({
    //     cars : prevState.cars.fliter((car) => car.make === prevState.query )
    //   })
    // })
  };

  submitSearch = (e) => {
    console.log("submit");

    const searchQuery = this.state.cars.filter(
      (car) => car.make.toLowerCase() === this.state.query.toLowerCase()
    );

    this.setState((prevState) => {
      return {
        filterCar: searchQuery,
      };
    });
  };

  sortByDates = (e) => {
    e.preventDefault();
    console.log("sorted");
    // this.state.cars.sort()
    const carList = [...this.state.cars];
    const sortedCarList = carList.sort(
      (a, b) =>
        new Date(...a.initialRegistration.split("/").reverse()) -
        new Date(...b.initialRegistration.split("/").reverse())
    );
    console.log(sortedCarList);
    this.setState((prevState) => {
      return {
        cars: sortedCarList,
      };
    });
  };

  sortByName = (e) => {
    e.preventDefault();
    // this.state.cars
    const names = [...this.state.cars];
    const sortedNames = names.sort((a, b) => a.make.localeCompare(b.make));
    this.setState((prevState) => {
      return {
        cars: sortedNames,
      };
    });
  };

  sortByMillage = (e) => {
    e.preventDefault();
    const millage = [...this.state.cars];
    const sortedMillage = millage.sort((a, b) => b.mileage - a.mileage);
    this.setState((prevState) => {
      return {
        cars: sortedMillage,
      };
    });
  };

  handleChange = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        cars: prevState.cars.map((li) =>
          li.id === +id ? { ...li, value: !li.value } : li
        ),
      };
    });
  };

  deleteSelectedCars = (e) => {
    e.preventDefault();
    console.log("delete");

    this.setState((prevState) => {
      return {
        cars: prevState.cars.filter((car) => car.value === false),
      };
    });
  };

  selectHandlerChange = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      return {
        ...prevState,
        // selectValue : e.target.value
        cars: prevState.cars.filter((car) => car.make === e.target.value),
      };
    });
  };

  radioChangeHandler = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedRadioValue: e.target.value,
      };
    });
  };

  radioSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.selectedRadioValue);
  };

  render() {
    const styl = {
      display: "grid",
      gridTemplateColumns: "2rem 4rem 4rem 4rem",
    };

    const cars = this.state.cars.map((car) => {
      const { id, mileage, make, initialRegistration, value } = car;
      return (
        <div key={id} style={styl}>
          <span>
            <input
              type="checkbox"
              id={id}
              checked={value}
              onChange={this.handleChange}
            />
          </span>
          <span>{make}</span>
          <span>{mileage}</span>
          <span>{initialRegistration}</span>
        </div>
      );
    });

    console.log(this.state.selectValue);

    return (
      <div>
        <div>
          <input
            style={{ margin: "20px" }}
            type="text"
            placeholder="search"
            value={this.state.query}
            onChange={this.searchHandler}
          />
          <button onClick={this.submitSearch}>search</button>
        </div>
        <div>
          <select
            defaultValue={this.state.selectValue}
            onChange={this.selectHandlerChange}
          >
            {this.state.cars.map((car) => (
              <option key={car.id} value={car.make}>
                {car.make}
              </option>
            ))}
          </select>
        </div>
        <div>
          <form onSubmit={this.radioSubmitHandler}>
            
            <input
              type="radio"
              onChange={this.radioChangeHandler}
              id="html"
              name="fav_language"
              value="HTML"
            />
              <label htmlFor="HTML">HTML</label>
            <input
              type="radio"
              onChange={this.radioChangeHandler}
              name="fav_language"
              value="CSS"
            />
              <label htmlFor="HTML">CSS</label>
            <input
              type="radio"
              onChange={this.radioChangeHandler}
              name="fav_language"
              value="JS"
            />
              <label htmlFor="HTML">JS</label>
            <button type="submit">find</button>
          </form>
        </div>
        <button onClick={this.sortByDates}>sort by dates</button>
        <button onClick={this.sortByName}>sort by Names</button>
        <button onClick={this.sortByMillage}>sort by Millage</button>
        <button onClick={this.deleteSelectedCars}>remove selected cars</button>
        {cars}
        {this.state.filterCar.map((car) => (
          <div key={car.id}>{car.make}</div>
        ))}
      </div>
    );
  }
}

export default SortBy;
