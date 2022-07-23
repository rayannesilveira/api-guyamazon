import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Node } from "./Node"

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


}

export { Network }