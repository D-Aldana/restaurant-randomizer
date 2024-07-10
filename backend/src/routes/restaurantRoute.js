const express = require('express');
const router = express.Router();
const restaurantRetriever = require('../components/getRestaurant')
const redisClient = require('../utils/redisClient');

redisClient.connect();

// Restaurant Route
router.get('/restaurants', async (req, res) => {
    const searchRequest = {
        term = 'food',
        latitude,
        longitude,
        location,
        categories,
        radius,
        price,
        open_now,
        limit
    } = req.query;

    console.log("Request from client: ", searchRequest);

    if ((!location && (!latitude || !longitude))) {
        return res.status(400).json({ error: 'Location or latitude/longitude required' });
    }

    // // Redis cache key
    const cacheKey = `restaurants:${categories}:${radius}:${location}:${latitude}:${longitude}:${price}:${open_now}:${limit}`;
    
    // Check if the data is in the cache
    restaurants = await redisClient.get(cacheKey);

    if (restaurants) {
        console.log('Data from Redis');
        return res.send(JSON.parse(restaurants));
    } else {
        console.log('Data not in Redis');
        try {
            // Get restaurants from Yelp API
            console.log('Data from Yelp API');
            const restaurants = await restaurantRetriever.getRestaurants(searchRequest);
            console.log('Set data in Redis');
            // Save the data in the cache
            redisClient.set(cacheKey, JSON.stringify(restaurants));
            res.send(restaurants);
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching restaurants from Yelp API' });
        }
    }

});
   
module.exports = router;
