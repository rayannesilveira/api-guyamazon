import { AppDataSource } from "./data-source"
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import cors from "cors";
import express = require("express");
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";
import { typeDataRoutes } from "./routes/typedata.routes";

const app = express();

AppDataSource.initialize().then(async () => {
  app.listen(3131);

  app.use(express.json());
  app.use(cors());
  
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use("/user", usersRoutes);
  app.use("/login", authRoutes);
  app.use("/type-data", typeDataRoutes);


  app.get("/", (request, response) => {
    return response.send("API Valorant V.1.0");
  });


}).catch(error => console.log(error))
