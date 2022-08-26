import { Router } from "express";
import { createCollectedDataController } from "../modules/collectedData/useCases/createCollectedData";
import { getAllCollectedDataController } from "../modules/collectedData/useCases/getAllCollectedData";


const collectedDataRoutes = Router();

collectedDataRoutes.post("/", (request, response) =>{
  return createCollectedDataController.handle(request, response);
});

collectedDataRoutes.get("/", (request, response) =>{
  return getAllCollectedDataController.handle(request, response);
});


export { collectedDataRoutes };
