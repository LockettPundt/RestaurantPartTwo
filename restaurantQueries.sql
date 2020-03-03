--List all restaurants.
    SELECT * FROM restaurant;
-- List a single restaurant by ID.
    SELECT name FROM restaurant WHERE id = 1;
--List all the reviews for a given restaurant given a specific restaurant ID.
    SELECT * FROM review WHERE restaurant_id = 1;
--List all the reviews for a given restaurant, given a specific restaurant name.
    SELECT review FROM review JOIN restaurant ON restaurant_id = restaurant.id WHERE restaurant.name = 'Dulce Vegan';
-- List all the reviews for a given reviewer, given a specific author name.
    SELECT review FROM review JOIN reviewer ON reviewer_id = reviewer.id WHERE reviewer.name = 'Lockett Pundt';
-- List all the reviews along with the restaurant they were written for.
-- In the query result, select the restaurant name and the review
    SELECT review.review, restaurant.name AS restaurant FROM review JOIN restaurant ON restaurant_id = restaurant.id WHERE restuarant.name = 'Dulce Vegan';

-- List all the reviews along with the restaurant, and the reviewer's name.
-- The result should have the restaurant name, the review text, and the reviewer name.
-- Hint: you might need to do a three-way join - i.e. joining all three tables together.
    SELECT
    restaurant.name AS restaurant,
    reviewer.name AS reviewer,
    review.review
    FROM
    review
    JOIN 
    restaurant
    ON
    restaurant_id = restaurant.id
    JOIN 
    reviewer
    ON
    reviewer_id = reviewer.id
    ORDER by
    reviewer.name,
    restaurant.name,
    review.review;