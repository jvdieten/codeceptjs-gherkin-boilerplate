const { I } = inject();
const todoPage = require('./../pages/todo');

Given('I have an empty todo list', () => {
  I.amOnPage('http://todomvc.com/examples/vue');
});

When('I create new todo item {string}', (task) => {
  I.fillField('.new-todo', task);
  I.pressKey('Enter');
});

Then('Todo list has {int} item', (nrOfItems) => {
  I.seeNumberOfVisibleElements(todoPage.todoItems, nrOfItems)
});
