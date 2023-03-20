import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
    <h1>Login to select a template</h1>
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
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="btn-group my-5">
            <a href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip" />
          </div>
        </div>
      </div>
    </>
  );
}
