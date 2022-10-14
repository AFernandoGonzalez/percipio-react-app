import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../../features/users/userSlice'
import { v4 as uuidv4 } from 'uuid';

import { useNavigate, useParams } from 'react-router';

const UserForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    const userList = useSelector(state => state.users)


    const [userForm, setUserForm] = useState({
        username: "",
        age: 0,
        employed: false
    })



    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            // we need to update
            dispatch(updateUser(userForm))
        } else {
            dispatch(addUser({
                id: uuidv4(),
                ...userForm,
            }))
        }
        navigate('/')
    }


    useEffect(() => {
        if (params.id) {
            setUserForm(userList.find(user => user.id == params.id))
        }
    }, [])


    return (
        <div className='container mt-4'>
            <h4>Add User</h4>
            <form onSubmit={hadleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input name='username' value={userForm.username} type="text" onChange={handleChange} className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input name='age' value={userForm.age} type="number" onChange={handleChange} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default UserForm