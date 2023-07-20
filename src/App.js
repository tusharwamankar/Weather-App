import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1>Weather App</h1>
        <input type="text" placeholder="search" />
        <button>Current Location</button>
      </div>
      <div className="abcd">
        <div className="ab">
          <div className="ablock">
            <h2>Now</h2>
            <h1>5d</h1>

            <div className="cloud">
              <p>Broken Clouds</p>
              <p>Cloud</p>
            </div>
            <div className="date">
              <p>date</p>
              <p>City</p>
            </div>
          </div>
          <div className="bblock">
            <div className="one">
              <h2>1deg</h2>
              <p>date</p>
              <p>day</p>
            </div>
            <div className="one">
              <h2>1deg</h2>
              <p>date</p>
              <p>day</p>
            </div>
            <div className="one">
              <h2>1deg</h2>
              <p>date</p>
              <p>day</p>
            </div>
            <div className="one">
              <h2>1deg</h2>
              <p>date</p>
              <p>day</p>
            </div>
            <div className="one">
              <h2>1deg</h2>
              <p>date</p>
              <p>day</p>
            </div>
          </div>
        </div>
        <div className="cd">
          <div className="cblock">
            <h2>Todays highlights</h2>
            <div className="air">
              <div className="box airbox">
                <h2>Air Quality Index</h2>
                <h3>Good</h3>
              </div>
              <div className="box sunbox">Sunrise and Sunset</div>
            </div>
            <div className="pressure">
              <div className="box boxx">Humidity</div>
              <div className="box boxx">Pressure</div>
              <div className="box boxx">Visibility</div>
              <div className="box boxx">Feels Like</div>
            </div>
          </div>
          <div className="dblock">
            <h2>Today At</h2>
            <div className="sdblock">
              <div className="shadow">1</div>
              <div className="shadow">2</div>
              <div className="shadow">3</div>
              <div className="shadow">4</div>
              <div className="shadow">5</div>
              <div className="shadow">6</div>
              <div className="shadow">7</div>
              <div className="shadow">8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
