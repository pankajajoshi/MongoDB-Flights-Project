const React = require("react");

class Index extends React.Component {
  render() {
    const { flights } = this.props;

    if (!flights || flights.length === 0) {
      return <div>No flights available.</div>;
    }

    return (
      <div
        style={{
          fontFamily: "Times New Roman",
          color: "blue",
          fontSize: "3rem",
          padding: "2rem",
          alignContent: "center",
        }}
      >
        <nav>
          <a href="/flights/new">Create A New Flight</a>
        </nav>
        <ul>
          {flights.map((flight, index) => {
            const { _id, airline, flightNo, departs } = flight;

            // Validate flight data
            if (!airline || !flightNo || !departs) {
              return (
                <li key={_id}>
                  Invalid flight data. Please check the flight details.
                </li>
              );
            }

            return (
              <li key={_id}>
                Your <a href={`flights/${_id}`}>{airline}</a> flight number is{" "}
                {flightNo} and the flight leaves at{" "}
                {new Date(departs).toDateString()}.
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;

// const React = require("react");

// class Index extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           fontFamily: "Times New Roman",
//           color: "blue",
//           fontSize: "1rem",
//           padding: "1rem",
//         }}
//       >
//         <nav>
//           <a href="/flights/new">Create A New Flight</a>
//         </nav>
//         <ul>
//           {
//             /* In here goes your list with airline name, flight no, and departure date/time */
//             this.props.flights?.map((flight, index) => {
//               return (
//                 <li key={index}>
//                   Your <a href={`flights/${flight._id}`}>{flight.airline}</a>{" "}
//                   flight number is {flight.flightNo} and the flight leaves at{" "}
//                   {flight.departs.toDateString()}.
//                 </li>
//               );
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// module.exports = Index;
