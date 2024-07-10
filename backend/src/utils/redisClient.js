const redis = require('redis');

// Initialize Redis client for external Redis server
const redisClient = redis.createClient(
  { url: process.env.REDIS_ADDR || 'redis://cache:6379' }
);

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

redisClient.on('ready', () => {
  console.log('Redis client ready');
});

redisClient.on('end', () => {
  console.log('Redis client disconnected');
});

module.exports = redisClient;
