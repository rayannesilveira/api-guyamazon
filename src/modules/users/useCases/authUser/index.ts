import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateUserService } from "../../services/AuthenticateUserService";
import { UserAuthenticateController } from "./AuthUserController";



const usersRepository = new UsersRepository;
const userService = new AuthenticateUserService(usersRepository);
const userAuthenticateController = new UserAuthenticateController(userService);

export { userAuthenticateController };
