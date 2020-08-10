
INSERT INTO users
    (first_name, last_name, email, phone)
VALUES
    ('Tommy', 'Lim', 'lim1017@hotmailcom', '416-453-8894'),
    ('Le', 'ma', 'gandglm@hotmail.com', '416-993-9161');


INSERT INTO companies
    (name, issues, userID)
VALUES
    ('Personal', '[]', 1),
    ('Lim TFX', '[]', 1),
    ('G and G LM', '[]', 2);



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
    (name, tenants, issues, propertyID)
VALUES
    ('Apt A', '[1]', '[{"title":"leaking sink", "date": "06/22/2020", "status": "pending"}]', 1 ),
    ('Apt B', '[2]', '[]', 1 );


INSERT INTO tenants
    (first_name, last_name, email, phone, gender, unitID)
VALUES
    ('Nick', 'Tasse', 'nick@hotmail.com', '416-333-1234', 'Male', 1),
    ('Meily', 'Moscco', 'Meily@hotmail.com', '416-333-4321', 'Female', 2);



