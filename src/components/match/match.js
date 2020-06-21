import React, { useState } from "react";
import MatchImg from "./matchImg";

const inf = [
  "https://i.imgur.com/l8H7rLq.jpg",
  "https://i.imgur.com/iVe0ud4.jpg",
  "https://i.imgur.com/bMAP9Ek.jpg",
  "https://i.imgur.com/O55UZYv.jpg",
  "https://i.imgur.com/CsoEgiK.jpg",
  "https://i.imgur.com/HRbsCfh.jpg",
  "https://i.imgur.com/LIw0j1V.jpg",
  "https://i.imgur.com/1nyWOCS.jpg",
  "https://i.imgur.com/gjPG9Hf.jpg",
  "https://i.imgur.com/CUDeyty.jpg",
  "https://i.imgur.com/6A8TRyg.jpg",
  "https://i.imgur.com/lkB6YmL.jpg",
];
let count = 2;

const Match = () => {
  const [serc, setSerc] = useState([inf[0], inf[1]]);

  const [src1, src2] = serc;
  const andleMatch = () => {
    setSerc([inf[count], inf[count + 1]]);
    count += 2;
  };

  return (
    <>
      <div onClick={andleMatch}>
        <MatchImg src={src1} />
      </div>
      <div>
        <h3>Pick the best "BOOTY"</h3>
      </div>
      <div onClick={andleMatch}>
        <MatchImg src={src2} />
      </div>
    </>
  );
};

export default Match;
