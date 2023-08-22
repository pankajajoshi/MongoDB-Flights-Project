const React = require('react');

const New = (props) => {
  return (
    <div style={{
      fontFamily: "Times New Roman",
      fontSize: "1rem",
      padding: "1rem",
      display: "flex",
      flexDirection: "column"
    }}>
      <h1 style={{color: "green"}}>New Flight</h1>
      {
      /* In here goes your form for creating a new Flight
      I added a dropdown selector to make selection more clear */
      <form action="/flights" method="POST">
        <label style={{padding: "1rem", margin: "1rem"}}>Airline:</label>
        {/* <input style={{margin: "1rem"}} type="text" name="airline" placeholder="American, Southwest, or United" /> */}
        <select name="airline" style={{padding: ".1rem", margin: "1rem"}}>
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
        </select>
        <br/>
        <label style={{padding: "1rem", margin: "1rem"}}>Flight No:</label>
        <input style={{margin: "1rem"}} type="number" name="flightNo" /><br/>
        <input style={{margin: "2rem"}} type="submit" name="" value="Create Flight!" />
      </form>
      }
    </div>
  )
}

module.exports = New;