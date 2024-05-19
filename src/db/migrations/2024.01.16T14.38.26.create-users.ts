import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  return params.context.query(`CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email varchar(255) NOT NULL UNIQUE,
	password varchar(60) NOT NULL,
    role varchar(255) NOT NULL DEFAULT 'user'
);
`);
};

export const down: Migration = async (params) => {
  return params.context.query(`DROP TABLE users;`);
};