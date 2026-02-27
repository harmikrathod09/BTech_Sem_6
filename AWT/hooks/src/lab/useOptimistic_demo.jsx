import React, { useState, useOptimistic, startTransition } from "react";

export default function UseOptimisticDemo() {
  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );

  function fakeApi(comment) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3 ? resolve(comment) : reject("Failed");
      }, 1000);
    });
  }

  async function handleAddComment() {
    const newComment = {
      id: Date.now(),
      text: "New Comment",
      sending: true,
    };

    addOptimisticComment(newComment);

    try {
      const savedComment = await fakeApi(newComment);

      setComments((prev) =>
        [...prev, { ...savedComment, sending: false }]
      );
    } catch (err) {
      console.log("Server failed, rollback happens automatically");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>useOptimistic Demo</h2>

      <button onClick={() => startTransition(handleAddComment)}>
        Add Comment
      </button>

      <ul>
        {optimisticComments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            {comment.sending && " (Sending...)"}
          </li>
        ))}
      </ul>
    </div>
  );
}