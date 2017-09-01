/* USERS */

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

/* HOMES */

DROP TABLE IF EXISTS homes;

CREATE TABLE IF NOT EXISTS homes (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users,
    propertyName TEXT,
    propertyDescription TEXT, 
    address TEXT, 
    city TEXT, 
    state TEXT, 
    zip INTEGER, 
    imageUrl TEXT, 
    loanAmount MONEY, 
    monthlyMortgage MONEY, 
    recommendedRent MONEY, 
    desiredRent MONEY
);

INSERT INTO users
(username, password)
VALUES
('TrentB101', 'TB101');

INSERT INTO homes
(userid, propertyName, propertyDescription, address, city, state, zip, imageUrl, loanAmount, monthlyMortgage, recommendedRent, desiredRent)
VALUES
(1, 'Rambler', '1200sq ft', '123 DevMtn St', 'Provo', 'UT', 84601, null, 625, 400, 10000, 500);