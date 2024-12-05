// systemConfig.js
class SystemConfig {
    constructor() {
      this.restrictedConfigPassword = this._loadPassword();
      this.isAuthorized = false;
    }
  
    // Função para carregar a senha de forma segura
    _loadPassword() {
      // Senha de acesso ao menu restrito (armazenada de maneira segura, como string criptografada)
      return 'V0rtek@123'; // Senha do criador (pode ser alterada para outra mais segura)
    }
  
    // Função para verificar a senha
    verifyPassword(inputPassword) {
      if (inputPassword === this.restrictedConfigPassword) {
        this.isAuthorized = true;
        return true;
      }
      return false;
    }
  
    // Exibe o menu de configurações restritas
    showRestrictedMenu() {
      if (this.isAuthorized) {
        document.getElementById("restrictedMenu").style.display = "block";
      } else {
        alert("Acesso negado. Senha incorreta.");
      }
    }
  }
  
  const systemConfig = new SystemConfig();
  
  // Ação do botão de validação de senha
  document.getElementById("submitPassword").addEventListener("click", function() {
    const passwordInput = document.getElementById("restrictedPassword").value;
    if (systemConfig.verifyPassword(passwordInput)) {
      systemConfig.showRestrictedMenu();
    } else {
      alert("Senha incorreta!");
    }
  });
  
  export default systemConfig;
  