import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CollectedData } from "./CollectedData"

@Entity()
class TypeData {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    type: string

    @OneToMany(() => CollectedData, (collectedData) => collectedData.typeData)
    collectedData: CollectedData[]
}

export { TypeData }