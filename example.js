angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Details 2', content:'Dynamic content 1' },
    { title:'Details 3', content:'Dynamic content 2', disabled: false },
     { title:'Dates', content:'Dynamic content 2', disabled: false }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
  
  $scope.isCollapsed = true;
    $scope.status = {
    open: false
  };
  
});