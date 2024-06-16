import React from 'react'

const ProfileCard = (props) => {
  const { profile, role } = props
  

  if (!profile || !profile.subjects || !profile.levels) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Name: {profile.name}</h1>
      <h2>Email: {profile.email}</h2>
      <div style={{ display: role === 'tutor' ? 'block' : 'none' }}>
      <h2>Tutoring Experience: {profile.experience} years</h2>
      <h2>Subjects Taught: </h2>
      <div>
        {profile.subjects.map((subject, idx) => (
          <div key={idx}>
            <p>{subject}</p>
          </div>
        ))}
      </div>
      <h2>Levels Taught: </h2>
      <div>
        {profile.levels.map((level, idx) => (
          <div key={idx}>
            <p>{level}</p>
          </div>
        ))}
      </div>
      <h2>Preferred Location: {profile.location}</h2>
      </div>
      
    </div>
  )
}

export default ProfileCard