DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS units CASCADE;
DROP TABLE IF EXISTS tenants CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20)

);

CREATE TABLE companies (
  company_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  issues json,
  userID int references users(user_id) not null

);

CREATE TABLE properties (
  property_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR (255),
  address json,
  manager json,
  issues json,
  image VARCHAR(255),
  companyID int references companies(company_id) not null

);

CREATE TABLE units (
  unit_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  tenants json,
  issues json,
  propertyID int references properties(property_id) not null

);


CREATE TABLE tenants (
  tenant_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),  address VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  gender VARCHAR(255),
  unitID int references units(unit_id) not null
);










