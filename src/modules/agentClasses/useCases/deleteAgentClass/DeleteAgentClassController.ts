import { Request, Response } from "express";
import { DeleteAgentClassService } from "../../services/DeleteAgentClassService";



class DeleteAgentClassController{
  private DeleteAgentClassService: DeleteAgentClassService;

  constructor(DeleteAgentClassService: DeleteAgentClassService){
    this.DeleteAgentClassService = DeleteAgentClassService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;

    const wasDeleted = await this.DeleteAgentClassService.execute(parseInt(id));
    if(wasDeleted){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao deletar. Ou classe não existe.");
    }
  }
}

export {DeleteAgentClassController}
