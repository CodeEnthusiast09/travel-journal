import React from "react";

export default function Hero(props) {
  // console.log(props);

  return (
    <div className="hero">
      <div id="place">
        <div className="image">
          <img src={`/travel journal assets/${props.img}`} alt="" />
        </div>
        <div className="about">
          <div className="location">
            <div className="place">
              <img
                src="/travel journal assets/location.svg"
                alt="location_logo"
              />
              <p>{props.location}</p>
            </div>
            <a
              href="https://goo.gl/maps/1DGM5rWnATgkSNB8"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{props.title}</h1>
          <div className="dates">
            <div className="startDate">{props.startDate}</div>-
            <div className="endDate">{props.endDate}</div>
          </div>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
