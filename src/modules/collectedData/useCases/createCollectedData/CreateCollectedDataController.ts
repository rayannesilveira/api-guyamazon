import { Request, Response } from "express";
import { CreateCollectedDataService } from "../../services/CreateCollectedDataService";


class CreateCollectedDataController{
  private collectedDataCreateService: CreateCollectedDataService;

  constructor(collectedDataCreateService: CreateCollectedDataService){
    this.collectedDataCreateService = collectedDataCreateService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
      const wasCreated = await this.collectedDataCreateService.execute(request.body);
    
    if(!wasCreated){
      return response.status(422).send("Erro ao salvar.");
    }
    else{
      return response.status(201).send();

    }
  }
}

export { CreateCollectedDataController };
