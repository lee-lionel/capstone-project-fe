import React from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="content-container">
      <h1>Tutors Connect: Connecting Parents with Prospective Tutors</h1>
      <p>Tutors connect is an application designed to connect parents with qualified tutors, providing benefits for both parties</p>
      <h2>For Parents:</h2>
      <ul>
        <li>
          <strong>Find Qualified Tutors:</strong> Browse detailed profiles of tutors based on subjects and expertise
        </li>
        <li>
          <strong>Personalised Matches:</strong> Use advanced filters to find tutors that meet your child's specific needs
        </li>
      </ul>
      <h2>For Tutors:</h2>
      <ul>
        <li>
          <strong>Expand Reach:</strong> Showcase your skills to a broader audience of parents seeking tutors
        </li>
        <li>
          <strong>Build Reputation:</strong> Gain credibility with reviews and ratings from parents
        </li>
      </ul>
    </div>
  );
};

export default Home;
