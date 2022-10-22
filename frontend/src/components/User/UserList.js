import { React, useEffect, useState } from 'react'
import './user.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers, deleteUser } from '../../features/users/userSlice'

const UserList = () => {
  const { users } = useSelector(state => state.users)

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
    // console.log('deleted', id);
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='container mt-4'>
      <hr></hr>
      <h4>Total Users {users?.length}</h4>
      <Link to='create-user'>
        <button type="button" className="btn btn-success m-1">Crate User</button>
      </Link>
      {users?.length > 0 ?
        <>
          <div>
            {users?.map((user) => (
              <ol className="list-group" key={user._id}>
                <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
                  <div className="ms-2 me-auto">
                    <p><b>User:</b> {user.user}</p>
                    <p><b>City:</b> {user.city}</p>
                  </div>
                  <button type="button" className="btn btn-danger m-1" onClick={() => handleDelete(user._id)}>Delete</button>
                  {/* <button type="button" className="btn btn-danger m-1" onClick={() => dispatch(deleteUser(user._id))}>Delete</button> */}
                  <Link to={`/edit-user/${user._id}`}>
                    <button type="button" className="btn btn-secondary m-1">Update</button>
                  </Link>
                  <Link to={`/user/${user._id}`}>
                    <button type="button" className="btn btn-primary m-1">View User</button>
                  </Link>
                </li>
              </ol>
            ))}
          </div>
        </> :
        <>
          <div>No Users</div>
        </>}


    </div>
  )
}

export default UserList

