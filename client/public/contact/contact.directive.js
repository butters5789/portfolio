(function() {
    'use strict';

    angular.module('portfolio')
        .directive('portfolioContact', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: './contact/contact.directive.html',
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
