const yelp = require('yelp-fusion');
const express = require('express');

// Load environment variables
require('dotenv').config({ path: '../keys.env' });
const apiKey = process.env.yelpAPI;

//48.481613182408985, -123.32600414521778
const searchRequest = {
    term: 'food',
    latitude: 48.481613182408985,
    longitude: -123.32600414521778,
    limit: 50  
};

const client = yelp.client(apiKey);

// Make a request to the Yelp API and export json response to file called yelp.json
client.search(searchRequest).then(response => {
    const prettyJson = JSON.stringify(response.jsonBody, null, 4);

    // Write to file
    const fs = require('fs');
    fs.writeFile('yelp.json', prettyJson, (err) => {
        if (err) throw err;
        //print number of businesses found
        console.log('Number of businesses found: ' + response.jsonBody.total);
        console.log('The file has been saved!');
    });

}).catch(e => {
    console.log(e);
});
