import {Pool} from "pg";
import dotenv from "dotenv";

dotenv.config();

const databaseConnect = new Pool({
    user: process.env.db_username,
    host: process.env.host,
    database: process.env.db_name,
    password: process.env.db_password,
    port : 5432
}) 

databaseConnect.connect();

databaseConnect.on('error', (err) => {
    console.error("Database Error : ", err)
    process.exit(-1)
})


export const query = (text: string, params: any[]) => databaseConnect.query(text, params)

