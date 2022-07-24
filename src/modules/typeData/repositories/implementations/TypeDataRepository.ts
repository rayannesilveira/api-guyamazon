import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { TypeData } from "../../../../entity/TypeData";
import { ITypeDataRepository } from "../ITypeDataRepository";


class TypeDataRepository implements ITypeDataRepository{
  private repository: Repository<TypeData>;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeData);
  }
  
  async update(id: number, { name, type }: ICreateTypeDataDTO): Promise<TypeData> {
    const typeData = await this.repository.findOneBy({ id: id});

    typeData.name = name;
    typeData.type = type;
    await this.repository.save(typeData);
    return typeData;
  }

  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }


  async findByName(name: string): Promise<TypeData> {
     const hasTypeData = await this.repository.findOne({where: { name: name }});
     return hasTypeData;
  }

  async create({ name, type }: ICreateTypeDataDTO): Promise<void> {
    const typeData = this.repository.create({
      name, type
    });

    await this.repository.save(typeData);

  }
  
  async findById(id: number): Promise<TypeData> {
    const typeData = await this.repository.findOneBy({ id: id});

   
    return typeData;
  }

}

export {TypeDataRepository };
