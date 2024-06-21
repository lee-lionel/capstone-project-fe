import React, { useState } from "react";
import Stalking from "../Stalking/Stalking";
import "./PostCard.css";

const PostCard = (props) => {
  const { post, role } = props;
  const [showProfile, setShowProfile] = useState(null);

  const handleApplicantClick = (appId) => {
    setShowProfile(appId);
  };

  const handleProfileClose = () => {
    setShowProfile(null);
  };

  return (
    <div>
      <p className="post-title">Title: {post.title}</p>
      <p className="post-info">Posted By: {post.createdBy.name}</p>
      <p className="post-info">Subjects: {post.subjects.join(", ")}</p>
      <p className="post-info">Level: {post.level}</p>
      <p className="post-info">Location: {post.location}</p>
 
      {role === 'parent' && (
        <div className="applicants-section">
          <h3>Applicants:</h3>
          {post.applicants.length > 0 ? (
            post.applicants.map((app, idx) => (
              <div key={idx} className="applicant">
                <div className="applicant-name" onClick={() => handleApplicantClick(app.id)}>
                  {app.name}
                </div>
                {showProfile === app.id && (
                  <div className="profile-card-2">
                  <Stalking id={app.id} onClose={handleProfileClose} />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>-NA-</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
