import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

// const initialState = [
//     {
//         id: 1,
//         username: 'fer',
//         age: 20,
//         employed: true
//     },
//     {
//         id: 2,
//         username: 'alv',
//         age: 28,
//         employed: false
//     }
// ]

const initialState = {
    users: [],
    loading: false,
    edit: false,
    body: ''
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:8000/v1/users/');
    const data = response.data
    // console.log("userSlice Data: ", data);
    return data
})

export const createUser = createAsyncThunk('users/createUsers', async ({ user }) => {
    const response = await axios.post(`http://localhost:8000/v1/users/`, {
        user: user.user, city: user.city
    });
    console.log("userSlice Data createUser: ", response.data);
    return response.data
})

export const updateUser = createAsyncThunk('users/updateUser', async ({id, user}) => {
    // const response = await axios.put(`http://localhost:8000/v1/users/${id}`, {
    //     user: user.user, city: user.city
    // })
    // // const data = response.data
    // console.log("updateUser Data: ", response.data);
    // return response.data
   
    console.log('updateUser: ', {id ,user: user.user, city: user.city})
})
export const deleteUser = createAsyncThunk('users/deleteUsers', async (id) => {
    const response = await axios.delete(`http://localhost:8000/v1/users/${id}`);
    const data = response.data
    // console.log("userSlice Data: ", data);
    return data
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // addUser: (state, action) => {
        //     state.push(action.payload)
        // },
        setEdit: (state, action) => {
            // const { id, user, city } = action.payload

            // const foundUser = state.find(user => user.id == id)
            // if (foundUser) {
            //     foundUser.user = user
            //     foundUser.city = city
            // }
            state.edit = action.payload.edit
            state.body = action.payload.body
        },
        // deleteUser: (state, action) => {
        //     const userFound = state.find(user => user.id === action.payload)
        //     if (userFound) {
        //         state.splice(state.indexOf(userFound), 1)
        //     }
        // }
    },
    extraReducers: {
        // GET
        [fetchUsers.pending]: (state, action) => {
            // state.loading = true
            // console.log("pending: ", action);
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
            // state.loading = false
            // state.errors = ''
            // console.log("fulfilled: ", action);
        },
        [fetchUsers.rejected]: (state, action) => {
            // state.loading = false
            state.users = []
            // state.errors = action.error.message
            // console.log("rejected: ", action);
        },

        // POST
        [createUser.pending]: (state, action) => {
            // state.loading = true
            // console.log("pending: ", action);
        },
        [createUser.fulfilled]: (state, action) => {
            state.users = action.payload
            // state.loading = false
            // state.errors = ''
            console.log("createUser fulfilled: ", action.payload);
        },
        [createUser.rejected]: (state, action) => {
            // state.loading = false
            state.users = []
            // state.errors = action.error.message
            // console.log("rejected: ", action);
        },

        // PUT
        [updateUser.pending]: (state, action) => {
            // state.loading = true
            // console.log("pending: ", action);
        },
        [updateUser.fulfilled]: (state, action) => {
            state.users = action.payload
            // state.loading = false
            // state.errors = ''
            console.log("updateUser fulfilled: ", action.payload);
        },
        [updateUser.rejected]: (state, action) => {
            // state.loading = false
            state.users = []
            // state.errors = action.error.message
            // console.log("rejected: ", action);
        },

        // DELETE
        [deleteUser.pending]: (state, action) => {
            // state.loading = true
            // console.log("pending: ", action);
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.users = action.payload
            // state.loading = false
            // state.errors = ''
            // console.log("fulfilled: ", action);
        },
        [deleteUser.rejected]: (state, action) => {
            // state.loading = false
            state.users = []
            // state.errors = action.error.message
            // console.log("rejected: ", action);
        }
    },
})

// export const { addUser, updateUser, deleteUser } = userSlice.actions
export const { setEdit } = userSlice.actions
export default userSlice.reducer