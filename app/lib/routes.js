Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('Home', {
  name: 'Home',
  controller: 'HomeController',
  path: '/'
});

Router.route('Transportation', {
  name: 'Transportation',
  controller: 'HomeController',
  path: '/emissions/transportation'
});

Router.route('Housing', {
  name: 'Housing',
  controller: 'HomeController',
  path: '/emissions/housing'
});

Router.route('Food', {
  name: 'Food',
  controller: 'HomeController',
  path: '/emission/food'
});

Router.route('Shopping', {
  name: 'Shopping',
  controller: 'HomeController',
  path: '/emission/shopping'
});

