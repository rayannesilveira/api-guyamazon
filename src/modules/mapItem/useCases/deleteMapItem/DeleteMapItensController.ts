import { Request, Response } from "express";
import { DeleteMapItensService } from "../../services/DeleteMapItensService";



class DeleteMapItensController{
  private deleteMapItensService: DeleteMapItensService;

  constructor(DeleteMapItensService: DeleteMapItensService){
    this.deleteMapItensService = DeleteMapItensService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;

    const wasDeleted = await this.deleteMapItensService.execute(parseInt(id));
    if(wasDeleted){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao deletar. Ou mapa não existe.");
    }
  }
}

export {DeleteMapItensController}
