import React from "react";
import Topbar from "../components/Cabins/Topbar";
import Hostings from "../components/Cabins/hostings";

const Cabins = () => {
  return (
    <div style={{ backgroundColor: "#01363c", height: "100%" }}>
      <Topbar />
      <Hostings />
    </div>
  );
};

export default Cabins;
