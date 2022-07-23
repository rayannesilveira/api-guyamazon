import { Request, Response } from "express";
import { CreateAgentClassService } from "../../services/CreateAgentClassService";



class CreateAgentClassController{
  private createAgentClassService: CreateAgentClassService;

  constructor(createAgentClassService: CreateAgentClassService){
    this.createAgentClassService = createAgentClassService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name} = request.body;

    const wasCreated = await this.createAgentClassService.execute(name);
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar. Ou classe com esse nome já existe.");
    }
  }
}

export {CreateAgentClassController}
