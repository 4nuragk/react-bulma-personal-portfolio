import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">{props.company}</h1>
        <h3 className="title"style={{ fontSize: "1.2em", color:"#23D160" }}>{props.position}</h3>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
