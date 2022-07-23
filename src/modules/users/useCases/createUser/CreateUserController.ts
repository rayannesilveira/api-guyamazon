import { Request, Response } from "express";
import { CreateUserService } from "../../services/CreateUserService";



class CreateUserController{
  private createUserService: CreateUserService;

  constructor(createUserService: CreateUserService){
    this.createUserService = createUserService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { name, email, password, isAdmin } = request.body;

    const wasCreated = await this.createUserService.execute({name, email, password, isAdmin});
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Usuário já existe.");
    }
  }
}

export {CreateUserController}
