import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createTypeDataController } from "../modules/typeData/useCases/createTypeData";
import { getByIdTypeDataController } from "../modules/typeData/useCases/getTypeData";

const typeDataRoutes = Router();

typeDataRoutes.get("/:id", (request, response) => {
  return getByIdTypeDataController.handle(request, response);
});

typeDataRoutes.use(isAuthenticated);
typeDataRoutes.post("/", (request, response) =>{
  return createTypeDataController.handle(request, response);
});


export { typeDataRoutes };
