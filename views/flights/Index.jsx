import React from "react";

// const myStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "black",
//   backgroundColor: "lightgrey",
//   marginLeft: "10%",
//   marginRight: "20%",
//   padding: "20px",
//   marginTop: "100px",
//   fontSize: "24px",
//   boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
// };

class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "Times New Roman",
          color: "blue",
          fontSize: "2rem",
          padding: "2rem",
          alignContent: "center",
          justifyContent: "content",
          marginLeft: "10%",
          marginRight: "20%",
          padding: "20px",
          marginTop: "100px",
        }}
      >
        <nav>
          <a href="/flights/new">Create a New Flight</a>
        </nav>
        <h1>Flights Index Page</h1>
        <ul>
          {this.props.flights?.map((Flight, i) => {
            // Convert the departure time to a string representation
            const departureTime = Flight.departs.toString();

            return (
              <li key={i}>
                The <a href={`/flights/${Flight._id}`}>{Flight.airline}</a> is{" "}
                {Flight.flightNo} and departure time is {departureTime}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
