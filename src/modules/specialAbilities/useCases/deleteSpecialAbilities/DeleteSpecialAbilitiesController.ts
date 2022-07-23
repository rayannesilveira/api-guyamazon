import { Request, Response } from "express";
import { DeleteSpecialAbilitiesService } from "../../services/DeleteSpecialAbilitiesService";



class DeleteSpecialAbilitiesController{
  private DeleteAgentClassService: DeleteSpecialAbilitiesService;

  constructor(DeleteAgentClassService: DeleteSpecialAbilitiesService){
    this.DeleteAgentClassService = DeleteAgentClassService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;

    const wasDeleted = await this.DeleteAgentClassService.execute(parseInt(id));
    if(wasDeleted){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao deletar. Ou habilidade não existe.");
    }
  }
}

export {DeleteSpecialAbilitiesController}
