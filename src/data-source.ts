import "reflect-metadata"
import { DataSource } from "typeorm"
import { Agent } from "./entity/Agent"
import { AgentClass } from "./entity/AgentClass"
import { MapItem } from "./entity/MapItem"
import { User } from "./entity/User"
import 'dotenv/config';
import { SpecialAbilities } from "./entity/SpecialAbilities"
import { Tutorial } from "./entity/Tutorial"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: (process.env.DB_LOGGING === 'true'),
    entities: [User, Agent, AgentClass, MapItem, Tutorial, SpecialAbilities, ],
    migrations: [],
    subscribers: [],
})
