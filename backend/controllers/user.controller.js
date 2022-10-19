import User from '../models/User.js'

export const createUser = async (req, res) => {
    const { user, city } = req.body;
    const newUser = new User({
        user,
        city
    })

    let userResult;
    try {
        userResult = await newUser.save();
    } catch (error) {
        res.json(error)
    }

    res.json(userResult)
}

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const user = req.body;

    let updateUser;
    try {
        updateUser = await User.findByIdAndUpdate(userId, { $set: user }, { new: true })
    } catch (error) {
        res.json(error)
    }

    res.json(updateUser)
}

export const deleteUser = async (req, res) => {
    const userId = req.params.id;

    let deleteUser;
    try {
        deleteUser = await User.findByIdAndDelete(userId)
    } catch (error) {
        res.json(error)
    }

    res.json(deleteUser);
}

export const getUserById = async (req, res) => {
    const userId = req.params.id

    let user;

    try {
        user = await User.findById(userId) || []
    } catch (error) {
        res.send(error)
    }

    // console.log("User by id api: ",user);
    res.json(user.toObject({ getters: true}))
}

export const getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users);
}

