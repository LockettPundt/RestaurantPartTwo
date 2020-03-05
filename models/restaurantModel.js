'use strict'

const db = require('./conn');

class RestaurantModel {

    constructor (id, name, distance, stars, category, favorite_dish, last_time_you_ate_there, does_takeout, address) {
        this.id = id;
        this.name = name;
        this.distance = distance;
        this.stars = stars;
        this.category = category;
        this.favorite_dish = favorite_dish;
        this.last_time_you_ate_there = last_time_you_ate_there;
        this.does_takeout = does_takeout;
        this.address = address;
    }
    static async getRestaurant(id) {
        try {
            const response = db.any(`SELECT * FROM restaurant WHERE id = ${id};`);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM restaurant;`);
            return response;
        } catch(error) {
            return error;
        }
    }

    static async getAllReviews(id) {
        try {
            const response = await db.any(`SELECT
            restaurant.id,
            restaurant.name AS restaurant,
            reviewer.name AS reviewer,
            review.review,
            review.title,
            review.stars
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
            WHERE 
            restaurant.id = ${id};`);
            return response;
        } catch(error) {
            return error;
        }
    }

    static async createReview(restaurant_id, review_title, stars, review_text) {
        try {
            const response = db.one(`INSERT INTO
             review (reviewer_id, title, review, stars, restaurant_id) VALUES 
             ($1, $2, $3, $4, $5) 
             RETURNING id`, [2, review_title, review_text, stars, restaurant_id]);
            return response;
        } catch(error) {
            return error;
        }
    }

}

module.exports = RestaurantModel;