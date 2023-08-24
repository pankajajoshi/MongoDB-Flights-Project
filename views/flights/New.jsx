import React from "react";

class New extends React.Component {
  render() {
    const formContainerStyle = {
      maxWidth: "600px",
      maxHeight: "600px",
      marginTop: "10%",
      backgroundColor: "lightblue",
      marginLeft: "20%",
    };

    const titleStyle = {
      fontSize: "40px",
      marginBottom: "20px",
      textAlign: "center",
    };

    const inputStyle = {
      padding: "8px",
      marginBottom: "15px",
      fontSize: "15px",
    };

    const submitButtonStyle = {
      padding: "10px 20px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      cursor: "pointer",
      alignItems: "center",
    };
    const backButtonStyle = {
      padding: "10px 20px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      cursor: "pointer",
      alignItems: "center",
      marginLeft: "30px",
    };

    return (
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>New Flight Details Page</h1>
        <hr />
        <form action="/flights" method="POST">
          Airline:
          <input type="text" name="airline" style={inputStyle} /> <br />
          FlightNo: <input
            type="text"
            name="flightNo"
            style={inputStyle}
          />{" "}
          <br />
          Departs:{" "}
          <input type="datetime-local" name="departs" style={inputStyle} />{" "}
          <br />
          <hr />
          <input
            type="submit"
            value="Create Flight"
            style={submitButtonStyle}
          />
          <a href="/flights" style={backButtonStyle}>
            Back
          </a>
        </form>
      </div>
    );
  }
}

export default New;
