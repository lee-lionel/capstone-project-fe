import React from 'react'
import TutorProfile from '../components/TutorProfile/TutorProfile'
import ParentProfile from '../components/ParentProfile/ParentProfile'

const Profile = () => {
  return (
    //fetch the user profile here
    <div>
        This page should display the user info
        <br/>
        if tutor 
        <TutorProfile/>
        <hr/>
        if parent
        <ParentProfile/>
    </div>
  )
}

export default Profile
