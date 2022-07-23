import { Router } from "express";
import { createAgentController } from "../modules/agents/useCases/createAgent";
import { getAgentByIdController } from "../modules/agents/useCases/getById";

const agentRoutes = Router();

agentRoutes.post("/", (request, response) => {
  return createAgentController.handle(request,response);
});

agentRoutes.get("/:id", (request, response) => {
  return getAgentByIdController.handle(request,response);
});



export { agentRoutes };
