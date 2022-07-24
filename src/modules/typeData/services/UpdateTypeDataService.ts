import { TypeData } from "../../../entity/TypeData";
import { ITypeDataRepository } from "../repositories/ITypeDataRepository";

class UpdateTypeDataService {

  private typeDataRepository: ITypeDataRepository;

  constructor(typeDataRepository: ITypeDataRepository){
    this.typeDataRepository = typeDataRepository;
  }
  async execute({ id, name, type }): Promise<TypeData> {
    const typeDataUpdated = await this.typeDataRepository.update(id,{name, type});

    return typeDataUpdated;
  }
}

export { UpdateTypeDataService };
