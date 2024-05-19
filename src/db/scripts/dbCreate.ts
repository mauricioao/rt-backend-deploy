import "dotenv/config";
import { adminClient } from "..";

const dbName = process.env["PGDATABASE"];

adminClient.connect();

adminClient.query(`CREATE DATABASE "${dbName}"`, (err) => {
  if (err) {
    console.error("Error creating the database", err.stack);
  } else {
    console.log(`"${dbName}" database successfully created`);
  }
  adminClient.end();
});