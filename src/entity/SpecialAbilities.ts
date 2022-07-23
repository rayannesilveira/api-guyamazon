import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm"
import { Agent } from "./Agent"

@Entity()
class SpecialAbilities {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    key!: string

    @Column()
    videoURL!: string

    @Column()
    agentId!: number

    @ManyToOne(type => Agent, agent => agent.specialAbilities, { onDelete: "CASCADE"})
    agent!: Agent


}

export { SpecialAbilities }