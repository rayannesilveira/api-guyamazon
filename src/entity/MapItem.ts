import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { Agent } from "./Agent"
import { Tutorial } from "./Tutorial"

@Entity()
class MapItem {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name!: string

    @Column({default: ""})
    imageURL: string

    @OneToMany(() => Tutorial, (tutorial) => tutorial.map)
    tutorial: Tutorial[]



}

export { MapItem }