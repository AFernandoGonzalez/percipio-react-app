import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { fetchUsersById } from '../../features/users/userSlice'




const SingleUser = () => {

    const dispatch = useDispatch();
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
            const { _id, user, city } = userInfo.payload
            setUserId(_id)
            setUserName(user)
            setCity(city)
            return userInfo
        }
        getUser();
    }, [])

    return (
        <div className='container'>
            <div className="card" style={{margin: "3"}}>
                <img className="card-img-top" src="..." alt={`${userName} pic`}></img>
                    <div className="card-body">
                        <h5 className="card-title">{userName}</h5>
                        <p className="card-text">I live in {city}</p>
                        <a href="/" className="btn btn-primary">Go back</a>
                    </div>
            </div>
        </div>
    )
}

export default SingleUser