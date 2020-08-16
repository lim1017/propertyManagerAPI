
INSERT INTO users
    (first_name, last_name, email, phone)
VALUES
    ('Tommy', 'Lim', 'lim1017@hotmailcom', '416-453-8894'),
    ('Le', 'ma', 'gandglm@hotmail.com', '416-993-9161');


INSERT INTO companies
    (name, email, address, contact, notes, issues, userID)
VALUES
    ('Personals', 'lim1017@hotmail.com', '{"address":"56 oakley blvd", "city":"toronto"}', '{"firstName":"Tom", "lastName":"Lim", "Title":"President"}', 'no notes', '[]', 1),
   ('Lim TFX','limtfx@gmail.com', '{"address":"56 oakley blvd", "city":"toronto"}', '{"firstName":"Tom", "lastName":"Lim", "Title":"President"}', 'lots of notes', '[]', 1),    
   ('G and G LM', 'gandglm@hotmail.com', '{}', '{}', '', '[]', 2);



INSERT INTO properties
    (name, address, description, manager, issues, image, companyID)
VALUES
    ('Home', '{
"street":"56 oakley blvd",
"city":"Toronto",
"postal":"M1P 3P4"
}', 'Bungalow converted into a triplex located in the heart of Scarbrough' , '{}', '[]', 'https://www.newstreet.ca/property-images/E4185556-1.jpeg', 1),
    ('Hamilton Mutiplex', '{
"street":"211 Garside ave south",
"city":"Hamilton",
"postal":"L8K 2W6"
}', '11 unit multiplex in the Rosedale area of Hamilton', '{"name":"Jenny Perira", "phone":"905-223-1234", "email":"jperira@hotmail.com"}', '[{"title":"need new boiler", "status":"pending", "notes":["quotes range from 15-23k"] }]', 'https://photos.zolo.ca/2-229-bay-street-south-hamilton-h4069563-largephoto-1-processed-orig.jpg?2019-12-21+21%3A55%3A25', 2);


INSERT INTO units
    (unit, sqft, rent, bedroom, tmi, notes, issues, occupied, propertyID)
VALUES
    ('Apt Z' , 1000, 2000, 1 , '{}','no notes', '[{"title":"leaking sink", "date": "06/22/2020", "status": "pending"}]', true, 1 );

-- INSERT INTO tenants
--     (fname, lname, email, phone, gender, unitID)
-- VALUES
--     ('Nick', 'Tasse', 'nick@hotmail.com', '416-333-1234', 'Male', 1),
--     ('Meily', 'Moscco', 'Meily@hotmail.com', '416-333-4321', 'Female', 1);



