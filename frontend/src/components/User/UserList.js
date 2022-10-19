import { React, useEffect } from 'react'
import './user.css'
import { useSelector, useDispatch } from 'react-redux'
// import { deleteUser } from '../../features/users/userSlice'
import { Link } from 'react-router-dom'
// 
import { fetchUsers, deleteUser } from '../../features/users/userSlice'

const UserList = () => {
  const { users } = useSelector(state => state.users)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  // console.log("users list: ", users);

  const handleDelete = (e, id) => {
    dispatch(deleteUser(id))
    console.log('deleted', id);
  }

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
                    {/* <div className="fw-bold">Username: {user.user}</div> */}
                    <p><b>User:</b> {user.user}</p>
                    <p><b>City:</b> {user.city}</p>
                    {/* <p>Employment Status: {user.employed ? <span className="badge bg-primary rounded-pill">Employed</span> : <span className="badge bg-danger rounded-pill">Unemployed</span>}</p> */}
                  </div>
                  <button type="button" className="btn btn-danger m-1" onClick={() => handleDelete(user._id)}>Delete</button>
                  <Link to={`/edit-user/${user._id}`}>
                    <button type="button" className="btn btn-secondary m-1">Update</button>
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



// {users?.map((user) => (
//   <ol className="list-group" key={user._id}>
//     <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
//       <div className="ms-2 me-auto">
//         {/* <div className="fw-bold">Username: {user.user}</div> */}
//         <p><b>User:</b> {user.user}</p>
//         <p><b>City:</b> {user.city}</p>
//         {/* <p>Employment Status: {user.employed ? <span className="badge bg-primary rounded-pill">Employed</span> : <span className="badge bg-danger rounded-pill">Unemployed</span>}</p> */}
//       </div>
//       <button type="button" className="btn btn-danger m-1" onClick={() => handleDelete(user._id)}>Delete</button>
//       <Link to={`/edit-user/${user._id}`}>
//         <button type="button" className="btn btn-secondary m-1">Update</button>
//       </Link>
//     </li>
//   </ol>
// ))}