// app.js
const express = require('express');
const app = express();
const restaurantRoute = require('./routes/restaurantRoute');

// Use the restaurant routes
app.use('/api', restaurantRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});