import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createNodeController } from "../modules/node/useCases/createNode";
import { getNodeByIdController } from "../modules/node/useCases/getNodeById";


const nodeRoutes = Router();

nodeRoutes.get("/:id", (request, response) => {
  return getNodeByIdController.handle(request, response);
});

nodeRoutes.use(isAuthenticated);
nodeRoutes.post("/", (request, response) =>{
  return createNodeController.handle(request, response);
});


export { nodeRoutes };
