import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
    const sqlQuery = `INSERT INTO users (email, password, role) VALUES ('codeable@example.com', '$2b$10$mGvE0s4A4fGAAesZ8ZRPoOrDyi.Ui2/tjF8nTmq4/tL7kfC8blcla', 'admin');`;
    return await params.context.query(sqlQuery);
};

export const down: Migration = async (params) => {
    return params.context.query(`DELETE FROM users;`);
};