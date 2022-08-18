import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./index.css";
import icon from "./images/icon.png";
import data from "./components/data";

const App = () => {

  const cards = data.map((item) => {

    return (
      <Card
        card={item.imageUrl}
        icon={icon}
        location={item.location}
        map={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="container-1">{cards}</section>
    </div>
  );
};

export default App;
