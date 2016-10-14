(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['slidingPuzzle', 'wordSearchPuzzle']);

    // puzzle types
    var types = [
    
        { id: 'word-search-puzzle' }
    ];

    /**
     * Config
     */
    app.config(function($routeProvider) {
        $routeProvider.when('/:type');
    });

    /**
     * Startup
     */
    app.run(function($rootScope, $route, $filter) {
        $rootScope.types = types;
        $rootScope.type = types[0].id;

        // set type on route change
        $rootScope.$on('$routeChangeSuccess', function(event, route) {
            $rootScope.type = ($filter('filter')(types, { id: route.params.type }).length ? route.params.type : types[0].id);
        });
    });

    /**
     * Advanced sliding puzzle controller
     */
    app.controller('slidingAdvancedCtrl', function($scope) {
        $scope.puzzles = [
            { src: './img/logo.jpg', title: 'LaVerdad Logo', rows: 4, cols: 4 }
        ];
    });

    /**
     * Word search puzzle controller
     */
    app.controller('wordSearchCtrl', function($scope) {
        $scope.matrix = [
            ['N', 'I', 'G', 'O', 'R', 'A', 'G', 'S', 'A', 'T', 'A', 'D'],
            ['D', 'E', 'S', 'I', 'G', 'N', 'O', 'E', 'P', 'E', 'A', 'A'],
            ['I', 'S', 'N', 'R', 'N', 'G', 'A', 'P', 'P', 'M', 'E', 'T'],
            ['T', 'C', 'M', 'O', 'D', 'U', 'L', 'E', 'S', 'P', 'I', 'A'],
            ['C', 'O', 'M', 'P', 'I', 'L', 'E', 'R', 'C', 'L', 'N', 'B'],
            ['E', 'P', 'J', 'P', 'U', 'A', 'E', 'C', 'S', 'A', 'J', 'I'],
            ['V', 'E', 'O', 'O', 'L', 'R', 'I', 'E', 'A', 'T', 'E', 'N'],
            ['I', 'N', 'O', 'D', 'E', 'J', 'S', 'P', 'V', 'E', 'C', 'D'],
            ['E', 'X', 'P', 'R', 'E', 'S', 'S', 'I', 'O', 'N', 'T', 'I'],
            ['W', 'K', 'S', 'I', 'M', 'D', 'E', 'P', 'J', 'O', 'O', 'N'],
            ['R', 'E', 'L', 'F', 'I', 'L', 'T', 'E', 'R', 'C', 'R', 'G']
        ];
        $scope.words = [
            'ANGULARJS', 'DESIGN', 'MODULES', 'COMPILER', 'DATA', 'TEMPLATE', 'DATABINDING', 'INJECTOR',
            'SCOPE', 'VIEW', 'NODEJS', 'EXPRESSION', 'PIPE', 'FILTER', 'NGAPP'
        	
        ];
    });

})(window.angular);