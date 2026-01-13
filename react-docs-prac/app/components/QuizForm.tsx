"use client";

import { rejects } from "assert";
import { memo, useState } from "react";

const QuizForm = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's great!</h1>;
  }

  const handleChangeTextarea = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitAnswer(answer);
      setStatus("success");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h2>City Quiz</h2>
      <p>
        In which city there is billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          <textarea
            value={answer}
            onChange={handleChangeTextarea}
            disabled={status === "submitting"}
            name=""
            id=""
          />
          <br />
          <button disabled={answer.length === 0 || status === "submitting"}>
            Submit
          </button>
        </label>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

const submitAnswer = (answer: string) => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      const isValue = answer?.toLowerCase() !== "lima";

      if (isValue) {
        rejects(new Error("Good guess but the wrong answer, try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
};

export default memo(QuizForm);
