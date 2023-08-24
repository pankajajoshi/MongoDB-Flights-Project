const React = require("react");

const buttonStyle = {
  display: "inline-block",
  padding: "8px 12px",
  backgroundColor: "#4caf50",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
};

class Show extends React.Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "Times New Roman",
          color: "purple",
          fontSize: "2.5rem",
          padding: "2rem",
        }}
      >
        <h1> Show Flight </h1>
        <p style={{ fontWeight: "bold" }}>
          Your {this.props.flight.airline} flight number is{" "}
          {this.props.flight.flightNo} and the flight leaves at{" "}
          {this.props.flight.departs.toDateString()}.
        </p>
        <a href="/flights" style={buttonStyle}>
          Return
        </a>
      </div>
    );
  }
}

module.exports = Show;
