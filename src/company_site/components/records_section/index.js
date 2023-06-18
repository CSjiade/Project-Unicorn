import React, { useState, ImageBackground} from "react";
import image from "./bg2.jpg"
import "./records.css";
import { data } from "./data";
import Card from "./Card";
import Button from "./Button";

const RecordsSection = () => {
  const [cards, setCards] = useState(data);
  const cats = ["all", ...new Set(data.map((card) => card.category))];

  const filter = (cat) => {
    if (cat === "all") {
      setCards(data);
      return;
    }
    setCards(data.filter((item) => item.category === cat));
  };

  return (
    <div className="Record"  style={{ backgroundImage:`url(${image})`, backgroundSize:"contain" }}>
      <h1>Our Track Record</h1>
      <Button categories={cats} handleClick={filter} />
      <Card allcards={cards} />
      </div>

   
   
  );
}

export default RecordsSection;