const axios = require('axios');

const latitude = 48.481613182408985;
const longitude = -123.32600414521778;
const limit = 10;
const radius = 10000;
const categories = [];
const price = [1, 2, 3, 4];
const open_now = true;

// Make a request to the to the backend server to get restaurants
axios.get(`http://localhost:3000/api/restaurants?latitude=${latitude}&longitude=${longitude}&limit=${limit}&radius=${radius}&categories=${categories}&price=${price}&open_now=${open_now}`)
    .then(response => {
        const fs = require('fs');
        fs.writeFile('yelp.json', JSON.stringify(response.data, null, 4), (err) => {
            if (err) throw err;
            //print number of businesses found

            console.log('The file has been saved! ' + response.data.length);
        })
    })
    .catch(error => {
        console.log(error.response.status);
        console.log(error.response.data);
    });

