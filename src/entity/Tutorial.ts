import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Agent } from "./Agent"
import { MapItem } from "./MapItem"

@Entity()
class Tutorial {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title!: string

    @Column()
    description!: string

    @Column()
    link!: string

    @Column()
    mapId!: number

    @ManyToOne(type => MapItem, mapItem => mapItem.tutorial, {onDelete: "CASCADE"})
    map: MapItem

    @Column()
    agentId!: number

    @ManyToOne(type => Agent, agent => agent.tutorials, {onDelete: "CASCADE"})
    agent: Agent

}

export { Tutorial }