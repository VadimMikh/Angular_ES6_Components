import {MyTodoService} from './myTodos';

describe('myTodoService', () => {
  let todoService;

  beforeEach(() => {
    todoService = new MyTodoService();
  });

  it('should add a todo to the list', () => {
    const res = todoService.addItem('Item1');
    expect(res.length).toEqual(1);
  });
});
