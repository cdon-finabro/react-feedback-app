import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet ...</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedbackItem, ind) => {
        return <FeedbackItem key={feedbackItem.id} item={feedbackItem} />;
      })}
    </div>
  );
}

export default FeedbackList;
