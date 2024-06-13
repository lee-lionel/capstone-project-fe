import { Link } from 'react-router-dom';
import { myDetails } from '../../utilities/api';
import { useState, useEffect } from 'react';

const TutorProfile = () => {
  const id = '6656d11db68e0ec6253e2b0a';
  const [me, setMe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      name: {me.name}
      <br />
      email: {me.email}
      <br />
      experience: {me.experience}
      <br />
      subjects taught: {me.subjects}
      <br />
      levels taught: {me.levels}
      <br />
      preferred location: {me.location}
      <br />
      <Link to='/edit-profile'><button> edit info</button></Link>
    </div>
  );
};

export default TutorProfile;