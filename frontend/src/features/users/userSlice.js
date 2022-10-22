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
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:8000/v1/users/');
    const data = response.data
    return data
})

export const fetchUsersById = createAsyncThunk('users/fetchUsers', async (id) => {
    const response = await axios.get(`http://localhost:8000/v1/users/${id}`);
    const data = response.data
    return data
})

export const createUser = createAsyncThunk('users/createUsers', async ({ user }) => {
    const response = await axios.post(`http://localhost:8000/v1/users/`, {
        user: user.user, city: user.city
    });
    return response.data
})

export const updateUser = createAsyncThunk('users/updateUser', async ({ userId, userName, city }) => {
    const response = await axios.put(`http://localhost:8000/v1/users/${userId}`, {
        id: userId, user: userName, city: city
    })
    return response.data

})
export const deleteUser = createAsyncThunk('users/deleteUsers', async (id) => {
    const response = await axios.delete(`http://localhost:8000/v1/users/${id}`);
    const data = response.data
    console.log("deleteUser Data: ", response);
    console.log("deleteUser Data: ", response.data);
    console.log("endpoint: ", `http://localhost:8000/v1/users/${id}`);
    return data
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // addUser: (state, action) => {
        //     state.push(action.payload)
        // },
        // setEdit: (state, action) => {
        //     const { id, user, city } = action.payload

        //     const foundUser = state.find(user => user.id == id)
        //     if (foundUser) {
        //         foundUser.user = user
        //         foundUser.city = city
        //     }
        // },
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
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.users = []
        },
        // GET User By Id
        [fetchUsersById.pending]: (state, action) => {
        },
        [fetchUsersById.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [fetchUsersById.rejected]: (state, action) => {
            state.users = []
        },

        // POST
        [createUser.pending]: (state, action) => {
        },
        [createUser.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [createUser.rejected]: (state, action) => {
            state.users = []
        },

        // PUT
        [updateUser.pending]: (state, action) => {
        },
        [updateUser.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [updateUser.rejected]: (state, action) => {
            state.users = []
        },

        // DELETE
        [deleteUser.pending]: (state, action) => {
            console.log("pending: ", action);
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.users = state.users.filter((user) => user._id !== action.payload._id)
        },
        [deleteUser.rejected]: (state, action) => {
            state.users = []
        }
    },
})

// export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer