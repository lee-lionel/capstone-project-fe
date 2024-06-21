import React, { useState, useEffect } from 'react';
import localStorage from 'localStorage';
import SearchPage from '../components/SearchPage/SearchPage';
import { listPosts, listTutors } from '../utilities/api';

const View = () => {
  const [showClient, setShowClient] = useState([]);
  const role = localStorage.getItem('role');



  async function getArray() {
    try {
      if (role === 'tutor') {
        const response = await listPosts();
        if (response) {
          setShowClient(response);
        }
      } else if (role === 'parent') {
        const response = await listTutors();
        if (response) {
          setShowClient(response);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{getArray()}, [role]);

  return (
    <div className="content-container">
          <SearchPage showClient={showClient} type={role}/>
    </div>

  );
};

export default View;