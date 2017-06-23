var app = angular.module('lablist', [
  // External libs
  'ui.router',
  'oitozero.ngSweetAlert',
  'as.sortable',
  'ui.bootstrap.datetimepicker',

  // ToDoList
  'lablist.controllers.todolist',
  'lablist.services.todolist',

  // ToDoList
  'lablist.controllers.task',
  'lablist.services.task',
]);

app.config(function($stateProvider, $urlRouterProvider){
  // ToDoList routes
  $stateProvider.state('listToDoListRoute', {
    url: '/lists/',
    templateUrl: '/static/app/templates/todolist/list.html',
    controller: 'listToDoListController'
  });
  $stateProvider.state('createToDoListRoute', {
    url: '/lists/create/',
    templateUrl: '/static/app/templates/todolist/create.html',
    controller: 'createToDoListController'
  });
  $stateProvider.state('updateToDoListRoute', {
    url: '/lists/update/:id/',
    templateUrl: '/static/app/templates/todolist/update.html',
    controller: 'updateToDoListController'
  });

  // Task routes
  $stateProvider.state('listTaskRoute', {
    url: '/lists/:todolistId/tasks/',
    templateUrl: '/static/app/templates/task/list.html',
    controller: 'listTaskController',
  });
  $stateProvider.state('createTaskRoute', {
    url: '/lists/:todolistId/tasks/create/',
    templateUrl: '/static/app/templates/task/create.html',
    controller: 'createTaskController'
  });

  $urlRouterProvider.otherwise('/lists/');
});