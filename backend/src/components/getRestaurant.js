const yelp = require('yelp-fusion');

// Set Yelp API key
require('dotenv').config({ path: './keys.env' });
const apiKey = process.env.yelpAPI;
const client = yelp.client(apiKey);

// Get restaurants from Yelp API
exports.getRestaurants = async (searchRequest) => {
    try {
        const response = await client.search(searchRequest);
        return response.jsonBody.businesses;
    } catch (error) {
        console.log("Error fetching restaurants from Yelp API");
        throw error;
    }
};
