'use strict';
class cache {
  constructor() {
    const Redis = require('ioredis');
    const redis = new Redis();
    return redis;
  }
}


module.exports = new cache();