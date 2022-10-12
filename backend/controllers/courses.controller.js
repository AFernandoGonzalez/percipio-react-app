import Course from '../models/Course.js'

export const createCourse = async (req, res) => {
    const { name, weight, images } = req.body;
    const newCourse = new Course({
        name,
        weight,
        images
    })

    let courseResult;
    try {
        courseResult = await newCourse.save();
    } catch (error) {
        res.json(error)
    }

    res.json(courseResult)
}

export const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const course = req.body;

    let updateCourse;
    try {
        updateCourse = await Course.findByIdAndUpdate(courseId, { $set: course }, { new: true })
    } catch (error) {
        res.json(error)
    }

    res.json(updateCourse)
}

export const deleteCourse = async (req, res) => {
    const courseId = req.params.id;

    let deleteCourse;
    try {
        deleteCourse = await Course.findByIdAndDelete(courseId)
    } catch (error) {
        res.json(error)
    }

    res.json(deleteCourse);
}

export const getCourseById = async (req, res) => {
    const courseId = req.params.id

    let course;

    try {
        course = await Course.findById(courseId) || []
    } catch (error) {
        res.json(error)
    }

    res.json(course.toObject({ getters: true }))
}

export const getCourses = async (req, res) => {
    let courses;
    try {
        courses = await Course.find()
    } catch (error) {
        res.json(error);
    }
    res.json(courses);
}

