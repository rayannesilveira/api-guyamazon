import { ITypeDataRepository } from "../repositories/ITypeDataRepository";

interface IRequest {
  name: string;
  type: string;
}

class CreateTypeDataService {
  private typeDataRepository: ITypeDataRepository;

  constructor(typeDataRepository: ITypeDataRepository) {
    this.typeDataRepository = typeDataRepository;
  }

  async execute({ name, type }: IRequest): Promise<boolean>{
    const typeDataAlreadyExists = await this.typeDataRepository.findByName(name);
    if(typeDataAlreadyExists != null){
      return false;

    }

    await this.typeDataRepository.create({ name, type });
    return true;

  }
}

export { CreateTypeDataService };
