import express from "express";
import {
    getAllCourses,
    getCourseDetailsById,
    createCourse,
    updateCourse,
    deleteCourseById
} from "../Controllers/course.js";

const router = express.Router();


router.get("/api/course", getAllCourses);
router.get('/api/course/:id', getCourseDetailsById);
router.post('/api/course', createCourse);
router.patch('/api/course/:id', updateCourse);
router.delete('/api/course/:id', deleteCourseById);
// router.post("/api/user/image", storeImage);

export default router;