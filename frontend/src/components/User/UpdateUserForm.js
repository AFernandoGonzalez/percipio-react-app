import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateUser } from '../../features/users/userSlice';



import { fetchUsersById } from '../../features/users/userSlice';

const UpdateUserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()

    const [userId, setUserId] = useState(params.id);
    const [userName, setUserName] = useState('');
    const [city, setCity] = useState('');

    const retrieveUser = async () => {
        const data = dispatch(fetchUsersById(userId.toString()))
        return data

    }

    useEffect(() => {
        const getUser = async () => {
            const userInfo = await retrieveUser();
            const {_id, user, city} = userInfo.payload
            setUserId(_id)
            setUserName(user)
            setCity(city)
            return userInfo
        }
        getUser();
    }, [])

    const hadleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            dispatch(updateUser({userId, userName, city}))
        }
        navigate('/')
    }

    return (
        <div className='container mt-4'>
            <h4>Add User</h4>
            <form onSubmit={hadleSubmit} >
                <div className="mb-3">
                    <label className="form-label">User</label>
                    <input name='user' value={userName} type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" />
                    {/* <input name='user' type="text" onChange={handleChange} className="form-control" /> */}

                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input name='city' value={city} type="text" onChange={(e) => setCity(e.target.value)} className="form-control" />
                    {/* <input name='city' type="text" onChange={handleChange} className="form-control" /> */}
                </div>

                {params.id ? <div>
                    <button type="submit" className="btn btn-primary">Update User</button>
                </div> : <div>
                    <button type="submit" className="btn btn-primary">Add User</button>
                </div>}
            </form>
        </div>
    )
}

export default UpdateUserForm