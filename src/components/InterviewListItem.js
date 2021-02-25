/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";

import "components/InterviewListItem.scss";

import classnames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li
      className={interviewerClass}
      onClick={props.setInterviewer}
      key={props.id}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
