// errorHandling.js
class ErrorHandler {
    static logError(error) {
      console.error(error);  // Log de erro no console
      this._saveErrorLog(error);
    }
  
    static _saveErrorLog(error) {
      let logs = JSON.parse(localStorage.getItem('errorLogs')) || [];
      logs.push({ error: error.message, stack: error.stack, timestamp: new Date() });
      localStorage.setItem('errorLogs', JSON.stringify(logs));
    }
  
    static getErrorLogs() {
      return JSON.parse(localStorage.getItem('errorLogs')) || [];
    }
  }
  
  export default ErrorHandler;
  