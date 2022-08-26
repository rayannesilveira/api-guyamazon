import { Request, Response } from "express";
import { GetAllNetworkService } from "../../services/GetAllNetworkService";
import { GetNetworkByIdService } from "../../services/GetNetworkByIdService";


class GetByIdNetworkController{
  private getNetworkById: GetNetworkByIdService;

  constructor(getNetworkById: GetNetworkByIdService){
    this.getNetworkById = getNetworkById;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;

  
    const allNetwork = await this.getNetworkById.execute({id});

    return response.status(200).json(allNetwork);
  }
}

export { GetByIdNetworkController };
