
INSERT INTO users (first_name, last_name, email, phone)
VALUES
    ('Tommy', 'Lim', 'lim1017@hotmailcom', '416-453-8894');


INSERT INTO companies (name, issues, userID)
    VALUES 
    ('Personal', '[]', 1);

INSERT INTO properties
    (name, address, manager, issues, companyID)
VALUES
    ('Home', '{
"street":"56 oakley blvd",
"city":"Toronto",
"postal":"M1P 3P4"
}', '{}', '[]', 1);


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



