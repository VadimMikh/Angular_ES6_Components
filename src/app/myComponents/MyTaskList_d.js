export class TaskListControllerD {
  constructor($log, $scope) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
  }

  handleUnDone(el) {
    this.onUndone({el});
  }

  handleRemove(el) {
    this.onRemove({el});
  }

}

export const MyTaskListDone = {
  template: require('./MyTaskList_d.html'),
  controller: TaskListControllerD,
  bindings: {
    empty: '<',
    tasks: '<',
    onRemove: '&',
    onUndone: '&'
  }
};
