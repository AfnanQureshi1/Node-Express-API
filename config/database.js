import { Sequelize } from "sequelize";

import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "courses"
};

// Use the dbConfig object to connect to your database
const db = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});

export default db;