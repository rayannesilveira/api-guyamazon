import { Router } from "express";
import { createCollectedDataController } from "../modules/collectedData/useCases/createCollectedData";

const collectedDataRoutes = Router();

collectedDataRoutes.post("/", (request, response) =>{
  return createCollectedDataController.handle(request, response);
});


export { collectedDataRoutes };
