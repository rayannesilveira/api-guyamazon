import { Request, Response } from "express";
import { CreateAgentService } from "../../services/CreateAgentService";



class CreateAgentController{
  private createAgentService: CreateAgentService;

  constructor(createSpecialAbilitiesService: CreateAgentService){
    this.createAgentService = createSpecialAbilitiesService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, agentClassId, image } = request.body;

    const wasCreated = await this.createAgentService.execute({name, agentClassId, image});
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar. Ou agente com esse nome já existe.");
    }
  }
}

export {CreateAgentController}
