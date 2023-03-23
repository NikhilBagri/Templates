import React from "react";
import "./Style.css";

function Dashboard() {
  return (
    <div className="container">
      <h1 className="h1 my-5">Dashboard</h1>
      <div className="row">
        <div className="card mx-auto my-3" style={{ width: "auto" }}>
          <div className="card-body">
            <h5 className="card-title">Template 1</h5>
            <button className="btn btn-dark">Select</button>
          </div>
        </div>
        <div className="card mx-auto my-3" style={{ width: "auto" }}>
          <div className="card-body">
            <h5 className="card-title">Template 2</h5>
            <button className="btn btn-dark">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
