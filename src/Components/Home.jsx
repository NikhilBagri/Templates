import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="container">
      <h1>Login to select a template</h1>
        <div className="row">
          <div className="card mx-auto my-3" style={{ width: "600px" }}>
            <img className="card-img-top" src="Templates\Blue.jpg" alt="Blue" />
            <div className="card-body">
              <h5 className="card-title">Template blue</h5>
            </div>
          </div>
          <div className="card mx-auto my-3" style={{ width: "600px" , height: "400px"}}>
            <img className="card-img-top" src="Templates\Red.jpg" alt="Red" />
            <div className="card-body">
              <h5 className="card-title">Template Red</h5>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
