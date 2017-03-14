class myAppController {
  constructor() {
    this.todos = [];
  }
}

export const myApp = {
  template: require('./myApp.html'),
  controller: myAppController
};
