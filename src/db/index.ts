import "dotenv/config"
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    allowExitOnIdle: true,
});

export const query = (text: string, params?: (string | number | boolean)[])=>{
    return pool.query(text,params)
}