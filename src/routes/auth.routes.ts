import { Router } from "express";
import { userAuthenticateController } from "../modules/users/useCases/authUser";

const authRoutes = Router();

authRoutes.post("/", (request, response) => {
  return userAuthenticateController.handle(request,response);
});


export { authRoutes };
