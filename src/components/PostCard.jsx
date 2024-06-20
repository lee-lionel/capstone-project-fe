import React, { useState } from "react";
import Stalking from "./Stalking";

const PostCard = (props) => {
  const { post, role } = props;
  const [showProfile, setShowProfile] = useState(null)

  const handleApplicantClick = (appId) => {
    setShowProfile(appId)
  }

  const handleProfileClose = () => {
    setShowProfile(null)
  }
  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Posted By: {post.createdBy.name}</p>
      <p>Subjects: {post.subjects.join(", ")}</p>
      <p>Level: {post.level}</p>
      <p>Location: {post.location}</p>
 
      <div style={{ display: role === 'parent' ? 'block' : 'none' }}>
        Applicants: 
        {post.applicants.map((app, idx) => (
            <div key={idx}>
                <p>
                    <span 
                    onClick={()=> handleApplicantClick(app.id)}>
                    {app.name}
                    </span>
                    </p>
                    {showProfile === app.id && (
                        <Stalking id={app.id} onClose={handleProfileClose}/>
                    )}

                </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
