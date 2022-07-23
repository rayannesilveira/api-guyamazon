import { Router } from "express";
import { createAgentClassController } from "../modules/agentClasses/useCases/createAgentClass";
import { deleteAgentClassController } from "../modules/agentClasses/useCases/deleteAgentClass";
import { updateAgentClassController } from "../modules/agentClasses/useCases/updateAgentClass";

const agentClassRoutes = Router();

agentClassRoutes.post("/", (request, response) => {
  return createAgentClassController.handle(request,response);
});

agentClassRoutes.delete("/:id", (request, response) => {
  return deleteAgentClassController.handle(request,response);
});

agentClassRoutes.put("/:id", (request, response) => {
  return updateAgentClassController.handle(request,response);
});



export { agentClassRoutes };
