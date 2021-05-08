import { Sequelize } from "sequelize";
import {envConfig} from '../env.js'

export const sequelize = new Sequelize(envConfig.db, envConfig.user, envConfig.password, {
  host: "localhost",
  dialect: "postgres",
});
