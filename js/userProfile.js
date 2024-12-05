// userProfile.js
class UserProfile {
    constructor() {
      this.profiles = {};
    }
  
    // Cria ou atualiza o perfil do usuário
    updateProfile(userId, preferences) {
      this.profiles[userId] = { ...this.profiles[userId], ...preferences };
      this._saveProfiles();
    }
  
    // Obtém as preferências de um usuário
    getProfile(userId) {
      return this.profiles[userId] || {};
    }
  
    // Salva os perfis no armazenamento local
    _saveProfiles() {
      localStorage.setItem('userProfiles', JSON.stringify(this.profiles));
    }
  
    // Carrega os perfis do armazenamento local
    _loadProfiles() {
      const data = JSON.parse(localStorage.getItem('userProfiles'));
      if (data) {
        this.profiles = data;
      }
    }
  }
  
  const userProfile = new UserProfile();
  userProfile._loadProfiles();
  export default userProfile;
  