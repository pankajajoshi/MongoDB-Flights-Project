const React = require('react');

const Show = (props) => {
  return (
    <div style={{
      fontFamily: "Times New Roman",
      color: "black",
      fontSize: "1rem",
      padding: "1rem"
    }}>
      <h1> Show Flight </h1>
      <p style={{fontWeight: "bold"}}>
      Your {props.flight.airline} flight number is {props.flight.flightNo} and the flight leaves at {props.flight.departs.toDateString()}.
      </p>
      <a href="/flights">Return</a>
    </div>
  );
}

module.exports = Show;