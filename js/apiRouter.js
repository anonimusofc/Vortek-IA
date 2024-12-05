// apiRouter.js
class ApiRouter {
    constructor() {
      this.routes = {};
    }
  
    // Define uma rota
    addRoute(path, handler) {
      this.routes[path] = handler;
    }
  
    // Executa a rota correspondente
    handleRequest(path, data) {
      if (this.routes[path]) {
        return this.routes[path](data);
      } else {
        throw new Error(`Route ${path} not found`);
      }
    }
  }
  
  const apiRouter = new ApiRouter();
  export default apiRouter;
  