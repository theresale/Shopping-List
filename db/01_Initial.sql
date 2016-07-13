DROP TABLE IF EXISTS grocery_list;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
	id 			serial PRIMARY KEY,
	username 	text,
	password	text
);

ALTER TABLE profile OWNER TO shopping_server;

CREATE TABLE grocery_list (
	id 			serial PRIMARY KEY,
	item		text[],
	profile_id  integer,

		CONSTRAINT fk_grocery_list_to_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile (id)  
);

ALTER TABLE grocery_list OWNER TO shopping_server;