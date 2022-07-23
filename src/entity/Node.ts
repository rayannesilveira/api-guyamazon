import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { CollectedData } from "./CollectedData"
import { Network } from "./Network"

@Entity()
class Node {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    latitude: string

    @Column()
    longitude: string

    @Column()
    description: string

    @Column({type:"timestamp"})
    created_at!: string

    @OneToMany(() => CollectedData, (collectedData) => collectedData.node)
    collectedData: CollectedData[]

    @Column()
    networkId: number

    @ManyToOne(type => Network, network => network.nodes)
    network: Network


}

export { Node }