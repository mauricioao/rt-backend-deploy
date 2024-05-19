import "dotenv/config"
import pg, { Client } from "pg";
const { Pool } = pg;

const pool = new Pool({
    allowExitOnIdle: true,
});

export const query = (text: string, params?: (string | number | boolean)[])=>{
    return pool.query(text,params)
}

export const adminClient = new Client({
    host: process.env["PGHOST"],
    port: Number(process.env["PGPORT"]),
    database: process.env["PGUSER"],
    user: process.env["PGUSER"],
    password: process.env["PGPASSWORD"],
  });