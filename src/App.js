import Header from "./Header";
import FeedbackData from "./FeedbackData";
import { useState } from "react";
import FeedbackList from "./FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log("looking for " + id);
    if (window.confirm("Are you sure you want to delete this feedback item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
