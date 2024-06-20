import React, { useState, useEffect } from 'react'
import { subjects } from "../utilities/subject";
import { myDetails, updateProfile } from '../utilities/api';
import { getUser } from '../utilities/users-service';


const EditProfile = () => {
    const id = getUser()._id
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
        showProfile: false
    })

    useEffect(() => {
        const fetchMe = async () => {
          try {
            const response = await myDetails(id);
            setUpdatedProfile({
              experience: response.experience || '',
              subjects: response.subjects || [],
              levels: response.levels || [],
              location: response.location || 'North-East',
              showProfile: response.showProfile || false,
            });
          } catch (error) {
            console.error(error);
          }
        };
        fetchMe();
        return () => {};
      }, [id]);

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

      async function handleSubmit(e) {
        e.preventDefault()
        try {
            await updateProfile(updatedProfile, id)
            alert('Success!')
        } catch(error) {
            console.log(error)
        }
        console.log(updatedProfile)
      }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Tutor Fields</h1>
      <label>
        Experience : 
        <input
        onChange={(e)=>setUpdatedProfile({...updatedProfile, experience: e.target.value})}
        value={updatedProfile.experience}
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
            <select
            value={updatedProfile.location}
            onChange={(e)=>setUpdatedProfile({...updatedProfile, location: e.target.value})}
            >
                <option>North</option>
                <option>North-East</option>
                <option>Central</option>
                <option>East</option>
                <option>West</option>
            </select>
        </label>
        <label>
            Available to teach
            <input
            type='checkbox'
            checked={updatedProfile.showProfile}
            onChange={(e)=>{
                updatedProfile.showProfile = e.target.checked;
                setUpdatedProfile({...updatedProfile });
            }}
            />
        </label>
        <button>Save</button>
    </form>
  )
}

export default EditProfile
