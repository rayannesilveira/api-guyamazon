import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm"
import { AgentClass } from "./AgentClass"
import { SpecialAbilities } from "./SpecialAbilities"
import { Tutorial } from "./Tutorial"

@Entity()
class Agent {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name!: string

    @Column()
    agentClassId!: number

    @ManyToOne(type => AgentClass, agentClass => agentClass.agent, { onDelete: "CASCADE"})
    agentClass: AgentClass

    @OneToMany(() => SpecialAbilities, (specialAbilities) => specialAbilities.agent)
    specialAbilities: SpecialAbilities[]

    @Column({default: ""})
    image: string

    @OneToMany(() => Tutorial, (tutorial) => tutorial.agent)
    tutorials: Tutorial[]

}

export { Agent }