import angular from 'angular';
import 'todomvc-app-css/index.css';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

// import {TodoService} from './app/todos/todos';
import {myTodoService} from './app/myTodos/myTodos';
// import {App} from './app/containers/App';
import {myApp} from './app/myContainers/myApp';
// import {Header} from './app/components/Header';
// import {MainSection} from './app/components/MainSection';
import {WrapSection} from './app/myComponents/MyMainSection';
// import {TodoTextInput} from './app/components/TodoTextInput';
import {TextInput} from './app/myComponents/TextInput';
// import {TodoItem} from './app/components/TodoItem';
import {MyTaskList} from './app/myComponents/MyTaskList';
import {MyTaskListDone} from './app/myComponents/MyTaskList_d';
// import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', ngMaterial])
  .config(routesConfig)
  // .service('todoService', TodoService)
  .service('mytodoService', myTodoService)
  // .component('app', App)
  .component('myApp', myApp)
  // .component('headerComponent', Header)
  // .component('footerComponent', Footer)
  .component('wrapSection', WrapSection)
  // .component('todoTextInput', TodoTextInput)
  .component('textInput', TextInput)
  // .component('todoItem', TodoItem)
  .component('taskList', MyTaskList)
  .component('taskListdone', MyTaskListDone);
