import './style.css';
import angular from 'angular';

var app = angular.module('navTest', [

]);

app.controller('NavTestCtrl', function ($scope, $location, $http) {

  $scope.aoClicar = function($event) {

    var elem = angular.element($event.srcElement);

    alert('Oi do Angular ' + elem);

  };

  $scope.noEntrarDoMouse = function($event){
   angular.element($event.srcElement).addClass('botao-laranja');
   angular.element($event.srcElement).removeClass('botao-azul');   
  };

  $scope.noSairDoMouse = function($event){
   angular.element($event.srcElement).addClass('botao-azul');
   angular.element($event.srcElement).removeClass('botao-laranja');   
  };

});
