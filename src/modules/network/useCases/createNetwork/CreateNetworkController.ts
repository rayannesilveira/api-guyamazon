import { Request, Response } from "express";
import { CreateNetworkService } from "../../services/CreateNetworkService";



class CreateNetworkController{
  private createNetworkService: CreateNetworkService;

  constructor(createNetworkService: CreateNetworkService){
    this.createNetworkService = createNetworkService;
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, description, created_at } = request.body;

    const wasCreated = await this.createNetworkService.execute({name,description, created_at});
    if(wasCreated){
      return response.status(201).send();
    }
    else{
      return response.status(422).send("Erro ao cadastrar a rede.");
    }
  }
}

export {CreateNetworkController}
