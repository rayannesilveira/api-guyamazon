import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserService } from "../../services/CreateUserService";
import { CreateUserController } from "./CreateUserController";


const usersRepository = new UsersRepository;
const userService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(userService);

export { createUserController };
