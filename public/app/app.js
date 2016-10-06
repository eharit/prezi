angular.module('app', []);

angular.module('app')
  .controller('appController', appCtrl);

function appCtrl() {
  this.message = 'Hello';
}