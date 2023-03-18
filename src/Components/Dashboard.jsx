import React from "react";
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="card mx-5" style={{ width: "auto" }}>
        <img className="card-img-top" src="https://wallpapers.com/images/hd/triple-monitor-planets-7ah90pzt4ohba06r.jpg" alt="Cardimage1" />
        <div className="card-body">
          <h5 className="card-title">Template 1</h5>
          <a href="#" className="btn btn-primary">
            Select
          </a>
        </div>
      </div>
     <br/>
      <div className="card mx-5" style={{ width: "auto"}}>
        <img className="card-img-top" src="https://wallpapers.com/images/hd/triple-monitor-planets-7ah90pzt4ohba06r.jpg"alt="Card image2" />
        <div className="card-body">
          <h5 className="card-title">Template 2</h5>
          <a href="#" className="btn btn-primary">
            Select
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
