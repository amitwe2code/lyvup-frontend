import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUsers } from '../../api/api';

export default function User() {
  const [users,setUsers]=useState([])
  const accessToken = useSelector((state) => state.accessToken);
  console.log('access in user =>', accessToken);
  console.log('user=>',users)
  useEffect(() => {
    const call = async () => {
      if (accessToken) {
        const response = await getUsers(accessToken);
        if (response) {
          console.log(response);
          setUsers(response.data.data)
          alert('data come');
        } else {
          console.error('Failed to fetch users');
        }
      } else {
        console.error('No access token available');
      }
    };
    call();
  }, [accessToken]);

  return (
    <div>User</div>
  );
}
