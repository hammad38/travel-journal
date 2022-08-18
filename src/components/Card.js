import React from "react";

const Card = ({card, icon, location, map, title, startDate, endDate, description}) => {
  return (
    <div className="card">
      <img className="card-image"  src={card}  />
      <div className="card-stats">
        <img className="icon-image" src={icon} alt="icon" />
        <span className="card-location">{location}</span>
        <span className="gray">{map} </span>
        <h1 className="card-title">{title}</h1>
        <p className="card-date">{startDate} - {endDate}</p>  
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

export default Card;
