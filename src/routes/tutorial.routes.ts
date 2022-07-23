import { Router } from "express";
import { createTutorialController } from "../modules/tutorial/usecases/createTutorial";


const tutorialRoutes = Router();

tutorialRoutes.post("/", (request, response) => {
  return createTutorialController.handle(request,response);
});



export { tutorialRoutes };
