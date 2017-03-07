angular.module( 'app', [ 'ui.router','ngMaterial','ngAnimate', 'ngAria', 'home','login','header', 'footer'
] ).config( function($urlRouterProvider,$locationProvider) {
  $urlRouterProvider.otherwise( '/home/list222' );
  $locationProvider.html5Mode(true);
} ).run( [ '$rootScope',
  function( $rootScope) {
  }
] );
