import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [img, setImg] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);
  console.log(img);
  const newImg = () => {
    setImg([
      ...img,
      {
        url: `https://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
        )}`,
      },
    ]);
  };

  const removeImg = () => {
    setImg(img.slice(0, -1));
  };
  return (
    <section className="layout">
      <div className="Container">
        <Card images={img} />
      </div>
      <div>
        <button onClick={removeImg}>Remove</button>

        <button onClick={newImg}>Add</button>
      </div>
    </section>
  );
};

export default App;
