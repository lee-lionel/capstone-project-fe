import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const SearchPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);

  useEffect(() => {
        setDisplaySearch(props.showClient);
     }, [props.showClient]);
  

  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const output = props.showClient.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.experience.toString().includes(searchTerm) ||
        item.subjects.some((subject) =>
          subject.toLowerCase().includes(searchTerm)
        )
      );
    });
    console.log(searchTerm);
    setDisplaySearch(output);
  }
  //nid to print out the display search items
  return (
    <div>
      <input
        placeholder="for u to search"
        type="search"
        value={searchTerm}
        onChange={handleSearch}
      />

      {displaySearch.map((item, index) => {
        if (props.type === "parent") {
          return (
            <div key={index}>
              <ProfileCard profile={item} role={item.role}/>
              <div>
                {item.feedback.map((feedback, index) => (
                  <div key={index}>
                    <p>Rating: {feedback.rating}/5</p>
                    <p>Text: {feedback.text}</p>
                    <p>Sent by: {feedback.sentBy}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        } else if (props.type === "tutor") {
          return (
            <div key={index}>
              <p>Title: {item.title}</p>
              <p>Posted By: {item.createdBy}</p>
              <p>Subjects: {item.subjects.join(", ")}</p>
              <p>Level: {item.level}</p>
              <p>Location: {item.location}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SearchPage;
