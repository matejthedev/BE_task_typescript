import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { SUCCESS_MESSAGES } from "./constants";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log(SUCCESS_MESSAGES.CONNECTION_SUCCESS);
  })
  .catch((error) => console.log(error));
