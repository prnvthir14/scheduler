import React from "react";
import InterviewListItem from "components/InterviewListItem";

import "components/InterviewList.scss";
import "components/InterviewListItem.scss";

import PropTypes from "prop-types";

function InterviewerList(props) {
  const listedItem = props.interviewers.map((interviewer) => {
    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={(event) => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listedItem}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
