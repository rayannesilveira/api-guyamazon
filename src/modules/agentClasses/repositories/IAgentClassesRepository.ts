import { AgentClass } from "../../../entity/AgentClass";

interface IAgentClassesRepository{

  create( data: ICreateAgentClassDTO) : Promise<void>;
  findByName( name: string ) : Promise<AgentClass>;
  findById( id: number ) : Promise<AgentClass>;
  deleteById( id: number ): Promise<Boolean>;
  updateById( id: number, name: string): Promise<Boolean>;
}

export { IAgentClassesRepository }
