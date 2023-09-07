import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import 'dotenv/config';
import { Network } from "./entity/Network";
import { Node } from "./entity/Node";
import { TypeData } from "./entity/TypeData";
import { CollectedData } from "./entity/CollectedData";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: (process.env.DB_LOGGING === 'true'),
    entities: [User, Network, Node, TypeData, CollectedData ],
    migrations: [],
    subscribers: [],
})
