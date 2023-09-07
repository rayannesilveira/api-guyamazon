import { Router } from "express";
import { createCollectedDataController } from "../modules/collectedData/useCases/createCollectedData";
import { getAllCollectedDataController } from "../modules/collectedData/useCases/getAllCollectedData";
import { getLastCollectedDataController } from "../modules/collectedData/useCases/getLastCollectedData";


const collectedDataRoutes = Router();

collectedDataRoutes.post("/", (request, response) =>{
  return createCollectedDataController.handle(request, response);
});

collectedDataRoutes.get("/", (request, response) =>{
  return getAllCollectedDataController.handle(request, response);
});

collectedDataRoutes.get("/last", (request, response) =>{
  return getLastCollectedDataController.handle(request, response);
});


export { collectedDataRoutes };
