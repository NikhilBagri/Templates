import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div class="row">
        <div className="card mx-auto my-3" style={{ width: "600px" }}>
          <img className="card-img-top" src="Templates\Blue.jpg" alt="Red" />
          <div className="card-body">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <h5 className="card-title">Template Blue</h5>
            <label class="form-check-label" for="flexRadioDefault1"> 
            </label>
          </div>
        </div>
        <div
          className="card mx-auto my-3"
          style={{ width: "600px", height: "400px" }}
        >
          <img className="card-img-top" src="Templates\Red.jpg" alt="Blue" />
          <div className="card-body">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <h5 className="card-title">Template Red</h5>
            <label class="form-check-label" for="flexRadioDefault1"> 
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
