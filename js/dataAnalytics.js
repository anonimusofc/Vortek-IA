// dataAnalytics.js
class DataAnalytics {
    constructor() {
      this.analytics = {
        totalInteractions: 0,
        totalUsers: 0,
        userInteractions: {},
      };
    }
  
    // Registra uma nova interação
    logInteraction(userId) {
      this.analytics.totalInteractions++;
      if (!this.analytics.userInteractions[userId]) {
        this.analytics.userInteractions[userId] = 1;
      } else {
        this.analytics.userInteractions[userId]++;
      }
    }
  
    // Gera um relatório de uso
    generateReport() {
      return {
        totalInteractions: this.analytics.totalInteractions,
        totalUsers: Object.keys(this.analytics.userInteractions).length,
        userInteractions: this.analytics.userInteractions,
      };
    }
  }
  
  const dataAnalytics = new DataAnalytics();
  export default dataAnalytics;
  