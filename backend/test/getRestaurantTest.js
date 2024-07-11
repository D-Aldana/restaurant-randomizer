const axios = require('axios');
const fs = require('fs');

// Load test cases from JSON file
const testCases = require('./data/test_data_suite.json');

testCases.forEach(async (testCase) => {
  const {
    test_num,
    latitude,
    longitude,
    limit,
    radius,
    categories,
    price,
    open_now,
    expected_status_code,
  } = testCase;

  try {
    const response = await axios.get('http://localhost:3000/api/restaurants', {
      params: {
        latitude,
        longitude,
        limit,
        radius,
        categories,
        price,
        open_now,
      },
    });

    if (response.status === expected_status_code) {
      console.log(`Test case passed: ${test_num}`);
    } else {
      console.log(`Test case failed: ${test_num}`);
    }
  } catch (error) {
    console.log(`Test case error: ${test_num}`);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
});
