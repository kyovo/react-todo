var expect = require('expect');

var TodoAPI = require('TodoAPI');

var todos = [{
  id: 1,
  text: 'test all files',
  completed: true
}, {
  id: 2,
  text: 'this second todo',
  completed: false
}, {
  id: 3,
  text: 'this is the third todo',
  completed: true
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

  describe('filterTodos', function() {
    it('should return all items if show completed is true', function() {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only the no completed todos', function() {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', function() {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', function() {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'second');
      expect(filteredTodos[0].id).toBe(2);
    });

    it('should return all todos if search is empty', function() {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
