export class InputController {
  constructor($log, $scope) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
  }

  handleAddTask(val) {
    if (val) {
      this.onAdd({val});
    }
  }

  handleClear() {
    this.onClear();
  }

}

export const TextInput = {
  template: require('./TextInput.html'),
  controller: InputController,
  bindings: {
    task: '=',
    onAdd: '&',
    onClear: '&'
  }
};
