import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Course = db.define('courses', {
    course_name: DataTypes.STRING,
    course_description: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Course;

(async () => {
    await db.sync();
})();