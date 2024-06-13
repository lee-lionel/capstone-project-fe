import React, { useState, useEffect } from 'react';
import localStorage from 'localStorage';
import SearchPage from '../components/SearchPage';
import { listPosts, listTutors } from '../utilities/api';

const View = (props) => {
  const [showClient, setShowClient] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

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
    <SearchPage showClient={showClient} type={role}/>
  );
};

export default View;