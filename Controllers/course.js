import Course from "../models/courseModel.js";

// Get all user details

const getAllCourses = async (req, res)=> {
  try {
    const courseDetails = await Course.findAll();
    res.json(courseDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get user details by ID
const getCourseDetailsById = async (req, res) => {
  const { id } = req.params;
  try {
    const courseDetails = await Course.findOne({ where: { id } });
    if (!courseDetails) {
      return res.status(404).json({ message: 'User details not found' });
    }
    res.json(courseDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create bank details
const createCourse = async (req, res) => {
  const { course_name, course_description} = req.body;
  try {
    const courseDetails = await Course.create({
      course_name,
      course_description
    });
    res.status(201).json({message: "User created successfully"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCourse = async (req, res) => {
  const userId = req.params.id;
  const { course_name, course_description } = req.body;
  try {
    const course = await Course.findByPk(userId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    await Course.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    // Course.course_name= course_name;
    // Course.course_description=course_description;
    // await Course.save();
    res.status(200).json({message: "Course updated successfully"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete User by Id
const deleteCourseById = async (req, res) => {
    try {
        await Course.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Course Deleted" });
    } catch (error) {
        console.log(error.message);
    }
//   try {
//     const { id } = req.params;
//     const course = await Course.findByPk(id);
//     if (!course) {
//       return res.status(404).json({ message: "course not found" });
//     }
//     await Course.destroy({
//         where: {
//             id: req.params.id
//         }
//     });
//     res.status(200).json({ message: "course deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
};


export {
  getAllCourses,
  getCourseDetailsById,
  createCourse,
  updateCourse,
  deleteCourseById
};