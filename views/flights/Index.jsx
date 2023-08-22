const React = require('react');

const Index = (props) => {
  return (
    <div style={{
      fontFamily: "Times New Roman",
      color: "blue",
      fontSize: "1rem",
      padding: "1rem"
    }}>
      <h1 style={{color: "black"}}>Flight Index</h1>
        <a href="/flights/new">Create A New Flight</a>
      <ul>
      {
      /* In here goes your list with airline name, flight no, and departure date/time */
      props.flights.map((flight, index) => {
        return (
          <li key={index}>
                Your <a href={`flights/${flight._id}`}>{flight.airline}</a> flight number is {flight.flightNo} and the flight leaves at {flight.departs.toDateString()}.
              </li>

        )}
        )
      }
      </ul>
    </div>
  )
}

module.exports = Index;