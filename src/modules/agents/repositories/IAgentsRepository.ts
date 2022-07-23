import { Agent } from "../../../entity/Agent";

interface IAgentsRepository{

  create(data: ICreateAgentDTO) : Promise<void>;
  findByName( name: string ) : Promise<Agent>;
  findById( id: number ) : Promise<Agent>;
  findByClassId( idClass: number ) : Promise<Agent[]>;
  getAll(): Promise<Agent[]>;
  deleteById( id: number ): Promise<Boolean>;
  updateById( id: number, data: ICreateAgentDTO): Promise<Boolean>;
}

export { IAgentsRepository }
