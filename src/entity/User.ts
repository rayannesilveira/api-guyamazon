import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
}

export { User }