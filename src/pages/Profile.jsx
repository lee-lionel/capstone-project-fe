import React from 'react'
import { Link } from 'react-router-dom';
import { myDetails } from '../utilities/api';
import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
    const id = '6656d11db68e0ec6253e2b0a';
    const [me, setMe] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [role, setRole] = useState('tutor') //shud be getRole

    useEffect(() => {
        const fetchMe = async () => {
          try {
            setLoading(true);
            const response = await myDetails(id);
            setMe(response);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
        fetchMe();
      }, [id]);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

  return (

    
    <div>
    <ProfileCard profile={me} role={role}/>
    {
    role === 'tutor'?(
      <Link to='/edit-profile'><button> Edit Info </button></Link>) :
      role === 'parent' ?(
      <Link to='/create-post'><button> Create Post </button></Link>
  ):<div/>}
  <div style={{ display: role === 'parent' ? 'block' : 'none' }}>
            this div is to show this parent's posts
      </div>
    </div>
  )
}

export default Profile
