import { Request, Response } from "express";
import { AddTypeService } from "../../services/AddTypeService";
import { GetAllNetworkService } from "../../services/GetAllNetworkService";
import { GetNetworkByIdService } from "../../services/GetNetworkByIdService";


class AddTypeToNetworkController{
  private addType: AddTypeService;

  constructor(addType: AddTypeService){
    this.addType = addType;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { id, idType } = request.params;

  
    const success = await this.addType.execute({id, idType});

    return response.status(200).json(success);
  }
}

export { AddTypeToNetworkController };
