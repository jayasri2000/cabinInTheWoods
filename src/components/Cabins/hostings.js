import React, { useState } from "react";
import cabins from "../shared/housings";
import "./hostings.css";
import Singlecabin from "./Singlecabin";
import StarIcon from "@material-ui/icons/Star";

const Hostings = () => {
  const [housings, setHousings] = useState(cabins);
  const [cabin, setCabin] = useState([]);
  console.log(cabin);

  return (
    <div className="housings">
      <h4 style={{ color: "#fff" }}>Cabins</h4>
      <div className="housings__container">
        <div class="scrollbar" id="style-4">
          <div class="force-overflow">
            <div className="housings__list">
              {housings.map((cabin) => {
                return (
                  <div
                    className="cabin"
                    key={cabin.key}
                    onClick={() => setCabin(cabin)}
                  >
                    <img
                      src={cabin.image}
                      className="cabin__image"
                      alt={cabin.desc}
                    />
                    <div className="cabin_details">
                      <div className="cabin__desc">
                        {cabin.desc}
                        <Singlecabin />
                      </div>
                      <div className="cabin__stat">{cabin.stats}</div>
                      <div className="cabin__footer">
                        <p>
                          {cabin.reiews} <StarIcon />{" "}
                        </p>
                        <p>{cabin.price}</p>
                        {/* <button onClick={() => setUid(cabin.key)}>
                          Click me
                        </button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="housings__solo" style={{ padding: 100 }}>
          {cabin.key}hiii
        </div>
      </div>
    </div>
  );
};

export default Hostings;
