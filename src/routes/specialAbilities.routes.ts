import { Router } from "express";
import { createSpecialAbilitiesController } from "../modules/specialAbilities/useCases/createSpecialAbilities";
import { getSpecialAbilitiesByAgentController } from "../modules/specialAbilities/useCases/getSpecialAbilitiesByAgent";


const specialAbilitiesRoutes = Router();

specialAbilitiesRoutes.post("/", (request, response) => {
  return createSpecialAbilitiesController.handle(request,response);
});

specialAbilitiesRoutes.get("/agent/:id", (request, response) => {
  return getSpecialAbilitiesByAgentController.handle(request,response);
});


export { specialAbilitiesRoutes };
