// apiLogger.js
class ApiLogger {
    static logRequest(endpoint, method, requestData) {
      const log = {
        timestamp: new Date(),
        endpoint,
        method,
        requestData,
      };
      this._saveApiLog(log);
    }
  
    static logResponse(endpoint, responseData) {
      const log = {
        timestamp: new Date(),
        endpoint,
        responseData,
      };
      this._saveApiLog(log);
    }
  
    static _saveApiLog(log) {
      let logs = JSON.parse(localStorage.getItem('apiLogs')) || [];
      logs.push(log);
      localStorage.setItem('apiLogs', JSON.stringify(logs));
    }
  
    static getApiLogs() {
      return JSON.parse(localStorage.getItem('apiLogs')) || [];
    }
  }
  
  export default ApiLogger;
  