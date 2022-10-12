import express from 'express'
import { createCourse, updateCourse, getCourseById, deleteCourse, getCourses } from '../controllers/courses.controller.js';

const router = express.Router()

router.post('/', createCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)
router.get('/:id', getCourseById)
router.get('/', getCourses)


export default router;