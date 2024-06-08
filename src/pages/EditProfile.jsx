import React, { useState } from 'react'
//import { useParams } from 'react-router-dom'
import { subjects } from "../utilities/subject";

const EditProfile = () => {
    const levels = [
        "Pri 1",
        "Pri 2",
        "Pri 3",
        "Pri 4",
        "Pri 5",
        "Pri 6",
        "Sec 1",
        "Sec 2",
        "Sec 3",
        "Sec 4",
      ]
    const [updatedProfile, setUpdatedProfile] = useState({
        experience: '',
        subjects:[],
        levels: [],
        location: 'North-East',
    })

    const handleSubjectChange = (subject) => {
        if (updatedProfile.subjects.includes(subject)) {
          setUpdatedProfile({
            ...updatedProfile,
            subjects: updatedProfile.subjects.filter((sub) => sub !== subject),
          });
        } else {
          setUpdatedProfile({
            ...updatedProfile,
            subjects: [...updatedProfile.subjects, subject],
          });
        }
      };

      const handleLevelChange = (level) => {
        if (updatedProfile.levels.includes(level)) {
          setUpdatedProfile({
            ...updatedProfile,
            levels: updatedProfile.levels.filter((lv) => lv !== level),
          });
        } else {
          setUpdatedProfile({
            ...updatedProfile,
            levels: [...updatedProfile.levels, level],
          });
        }
      };

  return (
    <form>
      <h1>Edit Tutor Fields</h1>
      <label>
        Experience : 
        <input
        type='number'
        min={0}
        max={20}
        /> of years
      </label>
      <br/>
      <label>
        Subjects Taught : 
      </label>
      {subjects.map((subject) => (
          <div key={subject}>
            <input
              type="checkbox"
              id={subject}
              name={subject}
              value={subject}
              checked={updatedProfile.subjects.includes(subject)}
              onChange={() => handleSubjectChange(subject)}
            />
            <label htmlFor={subject}>{subject}</label>
          </div>
        ))}
        <label>
        Levels Taught : 
      </label>
      {levels.map((level) => (
          <div key={level}>
            <input
              type="checkbox"
              id={level}
              name={level}
              value={level}
              checked={updatedProfile.levels.includes(level)}
              onChange={() => handleLevelChange(level)}
            />
            <label htmlFor={level}>{level}</label>
          </div>
        ))}
        <label>
            Preferred Location : 
            <select>
                <option>North</option>
                <option>North-East</option>
                <option>Central</option>
                <option>East</option>
                <option>West</option>
            </select>
        </label>
        <button>Save</button>
    </form>
  )
}

export default EditProfile
