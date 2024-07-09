const redis = require('redis');

// TODO: change to production Redis server
// Initialize Redis client for external Redis server
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

redisClient.on('connect', () => {
  console.log('Connected to Redis server');
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('get', (key, value) => {
    console.log('Redis get:', key, value);
    }
);

module.exports = redisClient;
