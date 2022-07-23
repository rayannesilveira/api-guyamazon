import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Network } from "./Network"

@Entity()
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string

    @Column({default: false})
    isAdmin: boolean

    @Column({default: ""})
    token: string

    @Column({default: ""})
    profileImage: string

    @ManyToMany(type => Network, {eager: true})
    @JoinTable()
    networks: Network[]


}

export { User }