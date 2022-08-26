import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { addTypeToNetworkController } from "../modules/network/useCases/addType";
import { createNetworkController } from "../modules/network/useCases/createNetwork";
import { getAllNetworkController } from "../modules/network/useCases/getAllNetwork";
import { getNetworkByIdController } from "../modules/network/useCases/getByIdNetwork";


const networkRoutes = Router();

networkRoutes.get("/", (request, response) => {
  return getAllNetworkController.handle(request, response);
});

networkRoutes.get("/:id", (request, response) => {
  return getNetworkByIdController.handle(request, response);
});

networkRoutes.use(isAuthenticated);
networkRoutes.get("/:id/type/:idType", (request, response) => {
  return addTypeToNetworkController.handle(request, response);
});

networkRoutes.use(isAuthenticated);
networkRoutes.post("/", (request, response) =>{
  return createNetworkController.handle(request, response);
});


export { networkRoutes };
