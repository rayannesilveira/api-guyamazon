import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Node } from "./Node"
import { TypeData } from "./TypeData"

@Entity()
class CollectedData {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value!: string

    @Column({type:"timestamp"})
    created_at!: string

    @Column()
    typeDataId!: number

    @Column()
    typeDataName!: string

    @ManyToOne(type => TypeData, typeData => typeData.collectedData)
    typeData: TypeData

    @Column()
    nodeId!: number

    @ManyToOne(type => Node, node => node.collectedData)
    node: Node

}

export { CollectedData }