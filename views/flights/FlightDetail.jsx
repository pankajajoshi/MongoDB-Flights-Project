import React from "react";
import Destination from "./models/Destination";

class FlightDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airportCode: "",
      arrivalDateTime: "",
      destinations: props.flight.destinations || [],
      airportDetails: {},
    };
  }

  handleAirportCodeChange = (event) => {
    this.setState({ airportCode: event.target.value });
  };

  handleArrivalDateTimeChange = (event) => {
    this.setState({ arrivalDateTime: event.target.value });
  };

  handleAddDestination = () => {
    const { airportCode, arrivalDateTime, destinations } = this.state;
    if (airportCode && arrivalDateTime) {
      const newDestination = {
        airportCode: airportCode,
        arrivalDateTime: arrivalDateTime,
      };
      this.setState({
        destinations: [...destinations, newDestination],
        airportCode: "",
        arrivalDateTime: "",
      });
    }
  };

  async componentDidMount() {
    const { flight } = this.props;
    const airportDetails = {};

    try {
      const response = await fetch(
        `https://api.example.com/airports/${flight.airportCode}`
      );
      if (response.ok) {
        const airportData = await response.json();
        airportDetails[flight.airportCode] = airportData;
        this.setState({ airportDetails });
      }
    } catch (error) {
      console.log("Error fetching airport details:", error);
    }
  }

  render() {
    const { flight } = this.props;
    const { airportCode, arrivalDateTime, destinations, airportDetails } =
      this.state;

    const airportDetailsForFlight = airportDetails[flight.airportCode] || {};

    return (
      <div>
        <h1>Flight Details</h1>
        <p>
          Your {flight.airline} flight number is {flight.flightNo} and the
          flight leaves at {new Date(flight.departs).toDateString()} from{" "}
          {airportDetailsForFlight.name} ({flight.airport}).
        </p>
        <h2>Add Destination</h2>
        <form>
          <label>
            <p>Airport Code: {this.state.airportCode}</p>
            {/* Airport Code:
            <input
              type="text"
              value={airportCode}
              onChange={this.handleAirportCodeChange} */}
            />
          </label>
          <br />
          <label>
            Arrival Date/Time:
            <input
              type="datetime-local"
              value={arrivalDateTime}
              onChange={this.handleArrivalDateTimeChange}
            />
          </label>
          <br />
          <button type="button" onClick={this.handleAddDestination}>
            Add Destination
          </button>
        </form>
        <h2>Destinations</h2>
        {destinations.length === 0 ? (
          <p>No destinations added.</p>
        ) : (
          <ul>
            {destinations.map((destination, index) => (
              <li key={index}>
                Airport Code: {destination.airport}, Arrival Date/Time:{" "}
                {destination.arrivalDateTime}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default FlightDetail;

//   render() {
//     const { flight } = this.props;

//     // Render flight details
//     return (
//       <div
//         style={{
//           fontFamily: "Times New Roman",
//           color: "purple",
//           fontSize: "3rem",
//           padding: "2rem",
//         }}
//       >
//         <h1> Show Flight </h1>
//         <p style={{ fontWeight: "bold" }}>
//           Your {flight.airline} flight number is {flight.flightNo} and the
//           flight leaves at {flight.departs.toDateString()}.
//         </p>
//         <a href="/flights">Return</a>
//       </div>
//     );
//   }
// }
