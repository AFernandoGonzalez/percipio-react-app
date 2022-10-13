import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/tasks/taskSlice'
import { v4 as uuidv4 } from 'uuid';

const UserForm = () => {

    const dispatch = useDispatch()

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
        dispatch(addUser({
            id: uuidv4(),
            ...userForm,
        }))
    }


    return (
        <div className='container mt-4'>
            <h4>Add User</h4>
            <form onSubmit={hadleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input name='username' type="text" onChange={handleChange} className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input name='age' type="number" onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default UserForm