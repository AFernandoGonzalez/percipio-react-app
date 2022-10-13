import { React, useState } from 'react'
import './user.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../features/tasks/taskSlice'

const UserList = () => {

  const dispatch = useDispatch();

  const userList = useSelector(state => state.users)

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <div className='container mt-4'>
      <hr></hr>
      <h4>Users List</h4>
      {userList?.map(user => (
        <ol className="list-group" key={user.id}>
          <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Username: {user.username}</div>
              <p>Age: {user.age}</p>
              <p>Employment Status: {user.employed ? <span className="badge bg-primary rounded-pill">Employed</span> : <span className="badge bg-danger rounded-pill">Unemployed</span>}</p>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        </ol>
      ))}
    </div>
  )
}

export default UserList