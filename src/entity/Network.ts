import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Node } from "./Node"
import { TypeData } from "./TypeData"

@Entity()
class Network {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column({type:"timestamp"})
    created_at!: string

    @OneToMany(() => Node, (node) => node.network)
    nodes: Node[]

    @ManyToMany(type => TypeData, {eager: true})
    @JoinTable()
    typesData: TypeData[]

}

export { Network }