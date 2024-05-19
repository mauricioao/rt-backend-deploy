import "dotenv/config";
import { adminClient } from "..";

const dbName = process.env["PGDATABASE"];

adminClient.connect();

adminClient.query(`DROP DATABASE IF EXISTS "${dbName}"`, (err) => {
  if (err) {
    console.error("Error deleting the database", err.stack);
  } else {
    console.log(`Database "${dbName}" successfully deleted`);
  }
  adminClient.end();
});