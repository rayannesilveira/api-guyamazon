import { TypeData } from "../../../entity/TypeData";
import { ITypeDataRepository } from "../repositories/ITypeDataRepository";

class GetTypeDataByIdService {

  private typeDataRepository: ITypeDataRepository;

  constructor(typeDataRepository: ITypeDataRepository){
    this.typeDataRepository = typeDataRepository;
  }
  async execute({ id }): Promise<TypeData> {
    const typeData = await this.typeDataRepository.findById(id);

    return typeData;
  }
}

export { GetTypeDataByIdService };
