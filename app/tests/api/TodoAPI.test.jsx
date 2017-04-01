var expect = require('expect');

var TodoAPI = require('TodoAPI');

var todos = [{
  id: 23,
  test: 'test all files',
  completed: false
}];

describe('TodoAPI', function() {
  beforeEach(() => {
      localStorage.removeItem('todos');
  });

  it('should exits', function() {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', function() {
    it('should set valid todos array', function() {

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalida todos array', function() {
      var badTodos = {a: 'b'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', function() {
    it('should return empty array for bad localStorage data', function() {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in localStorage', function() {
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
