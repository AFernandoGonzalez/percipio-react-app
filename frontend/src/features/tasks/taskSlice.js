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

export const taskSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            const userFound = state.find(user => user.id === action.payload)
            if(userFound){
                state.splice(state.indexOf(userFound), 1)
            }
        }
    }
})

export const { addUser, deleteUser } = taskSlice.actions
export default taskSlice.reducer