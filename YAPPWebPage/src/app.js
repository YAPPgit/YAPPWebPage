/**
 * Created by aliwo on 2018-03-31.
 */

var YappApp;

(function () {
    'use strict';

    YappApp = angular.module('YappApp', [])

        .controller('MainController', function ($scope) {

            $scope.greet = function () {
                console.log('반갑다! 난 새로 들어온 mainController 라고 한다!')
            }
        });

})();