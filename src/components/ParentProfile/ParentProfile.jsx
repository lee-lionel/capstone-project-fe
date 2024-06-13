import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { myDetails } from '../../utilities/api'

const ParentProfile = () => {
    const id = ''
const [me, setMe] = useState({})
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

  return (
    <div>
      name:
      <br/>
      email:
    <br/>
     <Link to='/create-post'>
         <button>Create Post</button>
         </Link>
  
    </div>
  )
}

export default ParentProfile
