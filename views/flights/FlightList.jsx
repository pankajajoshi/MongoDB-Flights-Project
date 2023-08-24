import React from "react";
import FlightDetail from "./FlightDetail";

class FlightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [], // Assuming flights data is fetched and stored in the state
    };
  }

  render() {
    const { flights } = this.state;

    return (
      <div>
        <h1>Flights</h1>
        {flights.map((flight, index) => (
          <div key={index}>
            <p>Airline: {flight.airline}</p>
            <p>Flight No: {flight.flightNo}</p>
            <p>Departs: {flight.departs.toDateString()}</p>
            <a href={`/flights/${index}`}>Detail</a>
            <hr />
            <FlightDetail />
          </div>
        ))}
      </div>
    );
  }
}

export default FlightList;
