import React from "react";
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="container">
        <div class="row">
          <div className="card mx-auto my-3" style={{ width: "600px" }}>
            <img className="card-img-top" src="Templates\Blue.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Template blue</h5>
            </div>
          </div>
          <div className="card mx-auto my-3" style={{ width: "600px" , height: "400px"}}>
            <img className="card-img-top" src="Templates\Red.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Template Red</h5>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
