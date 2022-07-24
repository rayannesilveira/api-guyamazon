import { Request, Response } from "express";
import { GetTypeDataByIdService } from "../../services/GetTypeDataByIdService";

class GetTypeDataController{
  private getTypeDataService: GetTypeDataByIdService;

  constructor(getTypeDataService: GetTypeDataByIdService){
    this.getTypeDataService = getTypeDataService;
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
  
    const typeData = await this.getTypeDataService.execute({id });

    return response.status(200).json(typeData);
  }
}

export { GetTypeDataController};
