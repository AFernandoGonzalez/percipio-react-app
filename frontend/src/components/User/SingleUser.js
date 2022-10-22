import React from 'react'

import { selectUserById } from '../../features/users/userSlice'

import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom';


const SingleUser = () => {

    const { userId} = useParams

    const dispatch = useDispatch();

    return (
        <div>SingleUser</div>
    )
}

export default SingleUser