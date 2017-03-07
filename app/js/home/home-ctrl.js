angular.module( 'home', ['list','cart','item','data-list','student','list'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope ) {
  $scope.hctrl = {
  };
  
} );