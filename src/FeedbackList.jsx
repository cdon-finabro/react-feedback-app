import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet ...</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedbackItem) => {
        return (
          <FeedbackItem
            key={feedbackItem.id}
            item={feedbackItem}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
