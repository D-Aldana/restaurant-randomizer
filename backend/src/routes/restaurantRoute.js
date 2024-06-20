const express = require('express');
const router = express.Router();
const restaurantRetriever = require('../components/getRestaurant')

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

    if ((!location && (!latitude || !longitude))) {
        return res.status(400).json({ error: 'Location or latitude/longitude required' });
    }
    
    try {
        const restaurants = await restaurantRetriever.getRestaurants(searchRequest);
        res.send(restaurants);
    } catch (error) {
        res.status(500).send;
    }
});

module.exports = router;
