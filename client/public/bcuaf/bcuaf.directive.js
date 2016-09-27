(function() {
    'use strict';

    angular.module('portfolio')
        .directive('portfolioBcuaf', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: './bcuaf/bcuaf.directive.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var vm = this;

    }

})();
