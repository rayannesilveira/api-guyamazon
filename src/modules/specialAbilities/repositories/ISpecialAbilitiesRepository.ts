import { SpecialAbilities } from "../../../entity/SpecialAbilities";

interface ISpecialAbilitiesRepository{

  create( agentId: number, data: ICreateSpecialAbilityDTO) : Promise<void>;
  findByName( name: string ) : Promise<SpecialAbilities>;
  getAllByAgent( id: number): Promise<SpecialAbilities[]>;
  findById( id: number ) : Promise<SpecialAbilities>;
  deleteById( id: number ): Promise<Boolean>;
  updateById( id: number, { name, description, key, videoURL}: ICreateSpecialAbilityDTO): Promise<Boolean>;
}

export { ISpecialAbilitiesRepository }
