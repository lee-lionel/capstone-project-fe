import React, { useState } from "react";
import { subjects } from "../utilities/subject";

const CreatePost = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    subjects: [],
    level: "Pri 1",
    location: "North",
  });

  const handleSubjectChange = (subject) => {
    if (userInput.subjects.includes(subject)) {
      setUserInput({
        ...userInput,
        subjects: userInput.subjects.filter((sub) => sub !== subject),
      });
    } else {
      setUserInput({
        ...userInput,
        subjects: [...userInput.subjects, subject],
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault()
    console.log(userInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title :{" "}
        <input
          onChange={(e) =>
            setUserInput({ ...userInput, title: e.target.value })
          }
        ></input>
      </label>
      <label>
        Level :{" "}
        <select
          onChange={(e) => setUserInput({ ...userInput, level: e.target.value })}
          value={userInput.level}
        >
          <option>Pri 1</option>
          <option>Pri 2</option>
          <option>Pri 3</option>
          <option>Pri 4</option>
          <option>Pri 5</option>
          <option>Pri 6</option>
          <option>Sec 1</option>
          <option>Sec 2</option>
          <option>Sec 3</option>
          <option>Sec 4</option>
        </select>
      </label>
      <label>
        Subjects:{" "}
        </label>
        {subjects.map((subject) => (
          <div key={subject}>
            <input
              type="checkbox"
              id={subject}
              name={subject}
              value={subject}
              checked={userInput.subjects.includes(subject)}
              onChange={() => handleSubjectChange(subject)}
            />
            <label htmlFor={subject}>{subject}</label>
          </div>
        ))}
    
      <label>
        Location:{" "}
        <select
        value={userInput.location}
        onChange={(e) =>
            setUserInput({ ...userInput, location: e.target.value })}>
          <option>North</option>
          <option>North-East</option>
          <option>Central</option>
          <option>East</option>
          <option>West</option>
        </select>
      </label>
      <button>Create Post</button>
    </form>
  );
};

export default CreatePost;