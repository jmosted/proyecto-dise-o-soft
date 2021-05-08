import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("workdiary", "postgres", "manro456,.-", {
  host: "localhost",
  dialect: "postgres",
});
