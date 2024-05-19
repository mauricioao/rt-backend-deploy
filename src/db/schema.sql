CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email varchar(255) NOT NULL UNIQUE,
	password varchar(60) NOT NULL,
    role varchar(255) NOT NULL DEFAULT 'user'
);

INSERT INTO users (email, password, role)
VALUES ('codeable@example.com', '$2b$10$mGvE0s4A4fGAAesZ8ZRPoOrDyi.Ui2/tjF8nTmq4/tL7kfC8blcla', 'admin');