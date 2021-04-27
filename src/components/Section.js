import React from "react";

const Section = (props) => {
  return (
    <section className="prog">
      <div className="time">{props.time}</div>
      <img src={props.image} alt={props.title} />
      <div className="prog-right">
        <h3>{props.title}</h3>
        <p className="type">{props.type}</p>
        <div className="baseline-prog">
          <span className="duration">{props.duration}</span>
          {props.direct && <span className="red">• Direct</span>}
          {props.isUnseen && <span className="red">• Inédit</span>}
        </div>
      </div>
    </section>
  );
};

export default Section;
