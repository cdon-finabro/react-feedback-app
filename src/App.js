import Header from "./Header";
import FeedbackData from "./FeedbackData";
import { useState } from "react";
import FeedbackList from "./FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
