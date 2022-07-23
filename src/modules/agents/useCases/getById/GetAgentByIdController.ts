import { Request, Response } from "express";
import { GetByIdService } from "../../services/GetByIdService";



class GetAgentByIdController{
  private getByIdService: GetByIdService;

  constructor(getByIdService: GetByIdService){
    this.getByIdService = getByIdService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;

    const agent = await this.getByIdService.execute(parseInt(id));
    if(agent){
      return response.status(201).send(agent);
    }
    else{
      return response.status(422).send("Erro ao cadastrar. Ou agente com esse nome já existe.");
    }
  }
}

export {GetAgentByIdController}
