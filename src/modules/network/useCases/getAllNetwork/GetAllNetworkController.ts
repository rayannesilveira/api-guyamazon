import { Request, Response } from "express";
import { GetAllNetworkService } from "../../services/GetAllNetworkService";


class GetAllNetworkController{
  private getAllNetworkService: GetAllNetworkService;

  constructor(getAllNetworkService: GetAllNetworkService){
    this.getAllNetworkService = getAllNetworkService;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const allNetwork = await this.getAllNetworkService.execute();

    return response.status(200).json(allNetwork);
  }
}

export { GetAllNetworkController };
