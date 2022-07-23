import { AppDataSource } from "./data-source"
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import cors from "cors";
import express = require("express");
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";
import { agentClassRoutes } from "./routes/agentClass.routes";
import { agentRoutes } from "./routes/agent.routes";
import { mapItensRoutes } from "./routes/mapItem.routes";
import { specialAbilitiesRoutes } from "./routes/specialAbilities.routes";
import { tutorialRoutes } from "./routes/tutorial.routes";


const app = express();

AppDataSource.initialize().then(async () => {
  app.listen(3131);

  app.use(express.json());
  app.use(cors());
  
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use("/user", usersRoutes);
  app.use("/login", authRoutes);
  app.use("/agentClass", agentClassRoutes);
  app.use("/agent", agentRoutes);
  app.use("/mapItem", mapItensRoutes);
  app.use("/specialAbilities", specialAbilitiesRoutes);
  app.use("/tutorial", tutorialRoutes);

  app.get("/", (request, response) => {
    return response.send("API Valorant V.1.0");
  });


}).catch(error => console.log(error))
