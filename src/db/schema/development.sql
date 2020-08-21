
INSERT INTO users
    (first_name, last_name, email, phone, profile_img)
VALUES
    ('Tommy', 'Lim', 'lim1017@hotmailcom', '416-453-8894', 'https://dcist.com/wp-content/uploads/sites/3/2020/02/wilford_newsletter.jpg');

INSERT INTO companies
    (name, email, address, contact, notes, issues, userID)
VALUES
    ('Personals', 'lim1017@hotmail.com', '{"address":"56 oakley blvd", "city":"toronto"}', '{"firstName":"Tom", "lastName":"Lim", "Title":"President"}', 'no notes', '[]', 1),
    ('Lim TFX','limtfx@gmail.com', '{"address":"56 oakley blvd", "city":"toronto"}', '{"firstName":"Tom", "lastName":"Lim", "Title":"President"}', 'lots of notes', '[]', 1);


INSERT INTO properties
    (name, address, description, manager, issues, image, companyID)
VALUES
    ('Home', '{
"street":"56 oakley blvd",
"city":"Toronto",
"postal":"M1P 3P4"
}', 'Bungalow converted into a triplex located in the heart of Scarbrough' , '{}', '[]', 'https://www.newstreet.ca/property-images/E4185556-1.jpeg', 1),
('Condo', '{
"street":"151 dan leckie way",
"city":"Toronto",
"postal":"M1M 3R3"
}', '2 Bedroom condo located downtown Toronto CityPlace' , '{}', '[]', 'https://img.huffingtonpost.com/asset/5cd70dc62100005800c96717.jpeg?ops=1778_1000', 1),
    ('Hamilton Mutiplex', '{
"street":"211 Garside ave south",
"city":"Hamilton",
"postal":"L8K 2W6"
}', '11 unit multiplex in the Rosedale area of Hamilton', '{"name":"Jenny Perira", "phone":"905-223-1234", "email":"jperira@hotmail.com"}', '[{"title":"need new boiler", "status":"pending", "notes":["quotes range from 15-23k"] }]', 'https://photos.zolo.ca/2-229-bay-street-south-hamilton-h4069563-largephoto-1-processed-orig.jpg?2019-12-21+21%3A55%3A25', 2);


INSERT INTO units
    (unit, sqft, rent, bedroom, tmi, notes, issues, occupied, propertyID)
VALUES
    ('Apt A' , 1000, 1000, 1 , '{}','no notes', '[{"title":"leaking sink", "date": "06/22/2020", "status": "complete"}]', true, 1 ),
    ('Apt B' , 700, 900, 1 , '{}','no notes', '[{"title":"leaking sink", "date": "07/11/2019", "status": "pending"}]', true, 1 ),
    ('808' , 800, 2300, 1 , '{}','no notes', '[{"title":"window not opening", "date": "06/22/2020", "status": "pending"}]', true, 2 ),
    ('1' , 860, 1000, 1 , '{"hydro":"true"}',' ', '[]', true, 3 ),
    ('2' , 925, 800, 1 , '{}',' ', '[]', false, 3 ),
    ('3' , 700, 700, 0 , '{"hydro":"true"}',' ', '[]', true, 3 ),
    ('4' , 970, 700, 1 , '{"hydro":"true"}',' ', '[]', true, 3 );


    

-- INSERT INTO tenants
--     (fname, lname, email, phone, gender, unitID)
-- VALUES
--     ('Nick', 'Tasse', 'nick@hotmail.com', '416-333-1234', 'Male', 1),
--     ('Meily', 'Moscco', 'Meily@hotmail.com', '416-333-4321', 'Female', 1);



