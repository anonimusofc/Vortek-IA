// feedbackSystem.js
class FeedbackSystem {
    constructor() {
      this.feedbacks = [];
    }
  
    // Adiciona um novo feedback
    addFeedback(userId, feedback) {
      this.feedbacks.push({ userId, feedback });
    }
  
    // Retorna todos os feedbacks
    getFeedbacks() {
      return this.feedbacks;
    }
  
    // Filtra feedbacks de um usuário específico
    getFeedbackByUser(userId) {
      return this.feedbacks.filter(f => f.userId === userId);
    }
  }
  
  const feedbackSystem = new FeedbackSystem();
  export default feedbackSystem;
  