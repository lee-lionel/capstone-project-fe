import React from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {
  const { profile, role } = props

  if (!profile || !profile.subjects || !profile.levels) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div>
      <h1 className="profile-name">Name: {profile.name}</h1>
      <h2 className="profile-email">Email: {profile.email}</h2>
      <div className="tutor-info" style={{ display: role === 'tutor' ? 'block' : 'none' }}>
        <h2 className="profile-experience">Tutoring Experience: {profile.experience || '-NA-'} years</h2>
        <h2 className="profile-section-title">Subjects Taught: </h2>
        <div className="profile-subjects">
          {profile.subjects.length > 0 ? profile.subjects.map((subject, idx) => (
            <div key={idx} className="profile-subject">
              <p>{subject}</p>
            </div>
          )) : '-NA-'}
        </div>
        <h2 className="profile-section-title">Levels Taught: </h2>
        <div className="profile-levels">
          {profile.levels.length > 0 ? profile.levels.map((level, idx) => (
            <div key={idx} className="profile-level">
              <p>{level}</p>
            </div>
          )) : '-NA-'}
        </div>
        <h2 className="profile-location">Preferred Location: {profile.location || '-NA-'}</h2>
      </div>
    </div>
  )
}

export default ProfileCard
