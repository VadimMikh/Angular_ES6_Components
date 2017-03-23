export class MyTodoService {
  constructor($log) {
    'ngInject';

    this.tasks = [];
    this.doneTasks = [];

    this.$log = $log;
  }

  addItem(val) {
    if (val !== '' && val) {
      this.tasks.push(val);
      return this.tasks;
    }
    return this.tasks;
  }
  removeItem(el) {
    const ind = el.$index;
    this.tasks.splice(ind, 1);
    return this.tasks;
  }
  doneItem(el) {
    const ind = el.$index;
    this.tasks.splice(ind, 1);
    this.doneTasks.push(el);
    this.tasksT = this.tasks;
    this.tasksTDone = this.doneTasks;
  }
  unDoneItem(el) {
    const ind = el.$index;
    this.doneTasks.splice(ind, 1);
    this.tasks.push(el);
    this.tasksT = this.tasks;
    this.tasksTDone = this.doneTasks;
  }
  removeDoneItem(el) {
    const ind = el.$index;
    this.doneTasks.splice(ind, 1);
    return this.doneTasks;
  }

}
