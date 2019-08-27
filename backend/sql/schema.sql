-- CryptoNative Schema

CREATE TABLE users (
	user_id 		serial 			PRIMARY KEY	,
	first_name 		varchar(255) 				,
	last_name 		varchar(255) 				,
	email 			varchar(255) 				,
	password 		varchar(1000) 		
);


CREATE TABLE portfolios (
	portfolio_id 	serial 			PRIMARY KEY					,
	name 			varchar(255) 								,
	user_id 		integer 		REFERENCES users (user_id)
);

CREATE TABLE coins (
	coin_id 		serial 		PRIMARY KEY								,
	portfolio_id 	integer 	REFERENCES portfolios (portfolio_id)	,
	user_id 		integer 	REFERENCES users (user_id)				,
	name 			varchar(255) 										,
	symbol 			varchar(255) 										,
	amount 			float(4) 											,
	price 			float(8)									
);