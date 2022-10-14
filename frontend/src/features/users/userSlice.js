import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        username: 'fer',
        age: 20,
        employed: true
    },
    {
        id: 2,
        username: 'alv',
        age: 28,
        employed: false
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            // console.log(action.payload);
            const { id, username, age } = action.payload

            const foundUser = state.find(user => user.id == id)
            if(foundUser){
                foundUser.username = username
                foundUser.age = age
            }

        },
        deleteUser: (state, action) => {
            const userFound = state.find(user => user.id === action.payload)
            if (userFound) {
                state.splice(state.indexOf(userFound), 1)
            }
        }
    }
})

export const { addUser,updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer