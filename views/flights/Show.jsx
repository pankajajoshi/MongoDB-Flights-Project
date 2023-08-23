const React = require("react");

class Show extends React.Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "Times New Roman",
          color: "purple",
          fontSize: "3rem",
          padding: "2rem",
        }}
      >
        <h1> Show Flight </h1>
        <p style={{ fontWeight: "bold" }}>
          Your {this.props.flight.airline} flight number is{" "}
          {this.props.flight.flightNo} and the flight leaves at{" "}
          {this.props.flight.departs.toDateString()}.
        </p>
        <a href="/flights">Return</a>
      </div>
    );
  }
}

module.exports = Show;
