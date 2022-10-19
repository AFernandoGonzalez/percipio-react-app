import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../../features/users/userSlice'
import { v4 as uuidv4 } from 'uuid';

import { useNavigate, useParams } from 'react-router';

import { createUser } from '../../features/users/userSlice';
import { fetchUsers } from '../../features/users/userSlice'

const UserForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    // const userList = useSelector(state => state.users)

    const [user, setUser] = useState({
        user: "",
        city: "",
    })

    const { users } = useSelector(state => state.users)
    console.log("user form: ", users);

    console.log("user : ", user);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(" Values: ", e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            console.log('edit user');
            // we need to update
            dispatch(updateUser({ users }))
        } else {
            dispatch(createUser({ user }))
        }

        // navigate('/')
    }


    useEffect(() => {
        dispatch(fetchUsers())
        if (params.id) {
            setUser(users.find(user => user.id == params.id))
            // console.log("user effect: ", users.find(user => user._id == params.id))
        }
    }, [])


    return (
        <div className='container mt-4'>
            <h4>Add User</h4>
            <form onSubmit={hadleSubmit} >
                <div className="mb-3">
                    <label className="form-label">User</label>
                    <input name='user' value={user.user} type="text" onChange={handleChange} className="form-control" />
                    {/* <input name='user' type="text" onChange={handleChange} className="form-control" /> */}

                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input name='city' value={users.city} type="text" onChange={handleChange} className="form-control" />
                    {/* <input name='city' type="text" onChange={handleChange} className="form-control" /> */}
                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default UserForm