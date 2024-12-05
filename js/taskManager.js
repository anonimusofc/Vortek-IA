// taskManager.js
class TaskManager {
    constructor() {
      this.tasks = [];
      this.completedTasks = [];
    }
  
    // Adiciona uma nova tarefa
    addTask(task) {
      this.tasks.push(task);
      this._saveTasks();
    }
  
    // Marca uma tarefa como concluída
    completeTask(taskId) {
      const taskIndex = this.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const task = this.tasks.splice(taskIndex, 1)[0];
        task.completed = true;
        this.completedTasks.push(task);
        this._saveTasks();
      }
    }
  
    // Remove uma tarefa
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this._saveTasks();
    }
  
    // Busca tarefas por status
    getTasksByStatus(status) {
      return status === 'completed' ? this.completedTasks : this.tasks;
    }
  
    // Salva as tarefas no armazenamento local
    _saveTasks() {
      localStorage.setItem('tasks', JSON.stringify({ tasks: this.tasks, completedTasks: this.completedTasks }));
    }
  
    // Carrega as tarefas do armazenamento local
    _loadTasks() {
      const data = JSON.parse(localStorage.getItem('tasks'));
      if (data) {
        this.tasks = data.tasks;
        this.completedTasks = data.completedTasks;
      }
    }
  }
  
  const taskManager = new TaskManager();
  taskManager._loadTasks();
  export default taskManager;
  