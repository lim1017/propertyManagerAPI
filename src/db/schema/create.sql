DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS units CASCADE;
DROP TABLE IF EXISTS tenants CASCADE;
DROP TABLE IF EXISTS issues CASCADE;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  about VARCHAR(255),
  profile_img VARCHAR(255)

);

CREATE TABLE companies (
  company_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  address json,
  contact json,
  notes VARCHAR(255),
  issues json,
  userID int references users(user_id) ON DELETE CASCADE not null

);

CREATE TABLE properties (
  property_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR (255),
  address json,
  manager json,
  issues json,
  image VARCHAR(255),
  units VARCHAR(255),
  type VARCHAR(255),
  companyID int references companies(company_id) ON DELETE CASCADE not null

);

CREATE TABLE units (
  unit_id SERIAL PRIMARY KEY NOT NULL,
  unit VARCHAR(255),
  sqft VARCHAR(255),
  rent VARCHAR(255),
  bedroom VARCHAR(255),
  tmi json,
  notes VARCHAR(255),
  issues json,
  occupied BOOLEAN,
  propertyID int references properties(property_id) ON DELETE CASCADE not null 

);

CREATE TABLE issues (
  issue_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  status VARCHAR(20),
  notes VARCHAR(255),
  unitID int references units(unit_id) ON DELETE CASCADE
);


CREATE TABLE tenants (
  tenant_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  phone VARCHAR(20),
  gender VARCHAR(255),
  notes VARCHAR(255),
  unitID int references units(unit_id) ON DELETE CASCADE
);










