import React from "react";

import Section from "./Section";

import data from "../data.json";

const Sections = () => {
  return (
    <div className="container">
      {data.map((elem) => {
        return (
          <div>
            <Section {...elem} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
