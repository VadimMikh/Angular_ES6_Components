export class TaskListController {
  constructor($log, $scope) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
  }

  handleDone(el) {
    this.onDone({el});
  }

  handleRemove(el) {
    this.onRemove({el});
  }

}

export const MyTaskList = {
  template: require('./MyTaskList.html'),
  controller: TaskListController,
  bindings: {
    empty: '<',
    tasks: '<',
    onDone: '&',
    onRemove: '&'
  }
};
