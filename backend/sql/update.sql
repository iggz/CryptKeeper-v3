--RESET DATABASE SCRIPT

--LOCAL DIRECTORIES
--jack: c:/Users/jcf12/dc/development/april2019dc/project_4/day10/backend/sql
--igor: /Users/igorpopenov/Repos/Week-16/cryptonative-v4.1/cryptonative-v4/backend/sql

--REMOVES
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS portfolios;
DROP TABLE IF EXISTS coins;
DROP DATABASE IF EXISTS cryptonative_app;

--CREATE & CONNECT
CREATE DATABASE cryptonative_app;
\c cryptonative_app;
\i schema.sql;
\i seed.sql;