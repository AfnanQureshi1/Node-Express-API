import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import courseRouter from "./Routes/users.js"

// import usersRoutes from "./routes/users.js";
// import { Sequelize } from "sequelize";
// import db from "./config/database.js";
// import courseModel from "./Models/courseModel.js"

const app = express();
app.use(cors());
const PORT = 5000;

// app.use(db);
app.use(express.json());
app.use(courseRouter);

// app.use("/people", usersRoutes);
// app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));