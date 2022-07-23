import { Request, Response } from "express";
import { UpdateAgentClassService } from "../../services/UpdateAgentClassService";



class UpdateAgentClassController{
  private updateAgentClassService: UpdateAgentClassService;

  constructor(updateAgentClassService: UpdateAgentClassService){
    this.updateAgentClassService = updateAgentClassService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name} = request.body;
    const {id} = request.params;

    const wasUpdated = await this.updateAgentClassService.execute(parseInt(id), name);
    if(wasUpdated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao atualizar. Ou classe com esse nome já existe.");
    }
  }
}

export {UpdateAgentClassController}
