import React, { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard';
import { myDetails } from '../utilities/api';

const Stalking = (props) => {
    const {id} = props
    const [target, setTarget] = useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMe = async () => {
          try {
            setLoading(true);
            const response = await myDetails(id);
            setTarget(response);
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
        <button onClick={props.onClose}>close</button>
      <ProfileCard profile={target} role={target.role}/>
    </div>
  )
}

export default Stalking
