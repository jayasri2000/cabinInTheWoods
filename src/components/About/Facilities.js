import React from "react";
import "./Facilities.css";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import WifiIcon from "@material-ui/icons/Wifi";

const Facilities = () => {
  return (
    <div className="facilities">
      <h4 style={{ color: "#fff" }}> Facilities</h4>

      <div className="facility__section">
        <div className="facility">
          <EmojiFoodBeverageIcon />
          <p>
            In built dining experience with complimentary breakfast services
            available.
          </p>
        </div>
        <div className="facility">
          <QueryBuilderIcon />
          <p>24 hour electricity and running water services available.</p>
        </div>
        <div className="facility">
          <WifiIcon />
          <p>Proper Wifi connections available.</p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
