import React from 'react'
import { getUser } from '../utilities/users-service'

const Home = () => {
    //test getUser
    const testid = getUser()
    console.log(testid)
  return (
    <div>
      <h1>Tutors Connect : Connecting Parents with Prospective Tutors</h1>
      <p>Tutors connect is an application desiged to connect parents with qualified tutors, providing benefits for both parties</p>
      <h2>For Parents :</h2>
      <ul>
        <li> 
            <strong>Find Qualified Tutors: </strong> Browse detailed profile of tutors based on subjects and expertise
        </li>
        <li> 
            <strong>Personalised Matches: </strong> Use advanced filters to find tutors that meet your child's specific needs
        </li>
      </ul>
      <h2>For Tutors :</h2>
      <ul>
        <li> 
            <strong>Expand Reach: </strong> Showcase your skills to a broader audience of parents seeking tutors
        </li>
        <li> 
            <strong>Build Reputation: </strong> Gain credibility with reviews and rating from parents
        </li>
      </ul>
    </div>
  )
}

export default Home
