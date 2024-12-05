// apiCache.js
class ApiCache {
    static getCache(endpoint) {
      const cache = JSON.parse(localStorage.getItem('apiCache')) || {};
      return cache[endpoint] || null;
    }
  
    static setCache(endpoint, data) {
      const cache = JSON.parse(localStorage.getItem('apiCache')) || {};
      cache[endpoint] = data;
      localStorage.setItem('apiCache', JSON.stringify(cache));
    }
  
    static clearCache() {
      localStorage.removeItem('apiCache');
    }
  }
  
  export default ApiCache;
  