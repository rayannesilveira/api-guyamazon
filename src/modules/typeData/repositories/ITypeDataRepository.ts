import { TypeData } from "../../../entity/TypeData";


interface ITypeDataRepository{

  create(data: ICreateTypeDataDTO): Promise<void>;
  findById( id: number ): Promise<TypeData>;
  findByName( name: string ): Promise<TypeData>;
  update( id: number, data: ICreateTypeDataDTO ): Promise<TypeData>;
  delete( id: number ): Promise<boolean>;
}

export { ITypeDataRepository };
