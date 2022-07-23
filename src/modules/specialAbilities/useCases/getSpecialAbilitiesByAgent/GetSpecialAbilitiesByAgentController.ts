import { Request, Response } from "express";
import { GetSpecialAbilitiesByAgentService } from "../../services/GetSpecialAbilitiesByAgent";



class GetSpecialAbilitiesByAgentController{
  private getSpecialAbilitiesByAgentService: GetSpecialAbilitiesByAgentService;

  constructor(getSpecialAbilitiesByAgentService: GetSpecialAbilitiesByAgentService){
    this.getSpecialAbilitiesByAgentService = getSpecialAbilitiesByAgentService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;

    const wasUpdated = await this.getSpecialAbilitiesByAgentService.execute(parseInt(id));
    if(wasUpdated){
      return response.status(201).send(wasUpdated);
    }
    else{
      return response.status(422).send("Agente não possui habilidade ou não existe.");
    }
  }
}

export {GetSpecialAbilitiesByAgentController}
