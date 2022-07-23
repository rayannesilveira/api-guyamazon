import { Router } from "express";
import { updateAgentClassController } from "../modules/agentClasses/useCases/updateAgentClass";
import { createMapItensController } from "../modules/mapItem/useCases/createMapItem";
import { deleteMapItensController } from "../modules/mapItem/useCases/deleteMapItem";
import { updateMapItensController } from "../modules/mapItem/useCases/updateMapItem";

const mapItensRoutes = Router();

mapItensRoutes.post("/", (request, response) => {
  return createMapItensController.handle(request,response);
});

mapItensRoutes.put("/:id", (request, response) => {
  return updateMapItensController.handle(request,response);
});

mapItensRoutes.delete("/:id", (request, response) => {
  return deleteMapItensController.handle(request,response);
});


export { mapItensRoutes };
