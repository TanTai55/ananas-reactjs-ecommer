import React from "react";
import "./css/Grid.css";
import { Link } from "react-router-dom";

import new1 from "../assets/new1.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.jpg";
import new4 from "../assets/new4.PNG";

const Grid = () => {
  return (
    <section className="gallary container">
      <figure className="gallary-item item-1">
        <img src={new1} alt="" className="gallary-img" />
        <div className="content">
          <h2>VÌ SAO LÀ LUCKY LUKE?</h2>
          <Link href="#">View more</Link>
        </div>
      </figure>

      <figure className="gallary-item item-2">
        <img src={new2} alt="" className="gallary-img" />
        <div className="content">
          <h2>URBAS CORLURAY PACK</h2>
        </div>
      </figure>

      <figure className="gallary-item item-3">
        <img src={new3} alt="" className="gallary-img" />
        <div className="content">
          <h2>VINTAS SAIGON 1980s</h2>
        </div>
      </figure>

      <figure className="gallary-item item-4">
        <img src={new4} alt="" className="gallary-img" />
        <div className="content">
          <h2>Up to 70% OFF Spring Sale!</h2>
        </div>
      </figure>
    </section>
  );
};

export default Grid;
