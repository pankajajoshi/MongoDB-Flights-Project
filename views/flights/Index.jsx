import React from "react";

const buttonStyle = {
  display: "inline-block",
  padding: "8px 12px",
  backgroundColor: "#4caf50",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
};

class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "Times New Roman",
          color: "blue",
          fontSize: "2rem",
          padding: "2rem",
          marginLeft: "10%",
          marginRight: "20%",
          marginTop: "100px",
        }}
      >
        <nav>
          <a href="/flights/new" style={buttonStyle}>
            Create a New Flight
          </a>
        </nav>
        <h1 style={{ fontSize: "3rem", backgroundColor: "aliceblue" }}>
          Flights Index Page
        </h1>
        <ul style={{ fontSize: "2rem", backgroundColor: "aliceblue" }}>
          {this.props.flights?.map((flight, i) => {
            // Convert the departure time to a string representation
            const departureTime = flight.departs.toString();

            return (
              <li key={i}>
                The {flight.airline} is {flight.flightNo} and the departure time
                is {departureTime}{" "}
                <a href={`/flights/${flight._id}`} style={buttonStyle}>
                  Detail
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
