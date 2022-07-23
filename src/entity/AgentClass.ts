import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { Agent } from "./Agent"

@Entity()
class AgentClass {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name!: string

    @OneToMany(() => Agent, (agent) => agent.agentClass)
    agent: Agent[]



}

export { AgentClass }