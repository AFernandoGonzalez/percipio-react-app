import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createUser } from '../../features/users/userSlice';

const UserForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [user, setUser] = useState({
        user: "",
        city: ""
    })

    const { users } = useSelector(state => state.users)

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser({ user }))

        navigate('/')
    }

    return (
        <div className='container mt-4'>
            <h4>Add User</h4>
            <form onSubmit={hadleSubmit} >
                <div className="mb-3">
                    <label className="form-label">User</label>
                    <input name='user' value={user.user} type="text" onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input name='city' value={user.city} type="text" onChange={handleChange} className="form-control" />
                    {/* <input name='city' type="text" onChange={handleChange} className="form-control" /> */}
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default UserForm