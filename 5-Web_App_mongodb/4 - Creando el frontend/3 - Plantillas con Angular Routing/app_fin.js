angular.module('appTareas', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('alta', {
                    url: '/alta',
                    templateUrl: 'views/alta.html',
                    controller: 'ctrlAlta'
                })
                .state('editar', {
                    url: '/editar/{id}',
                    templateUrl: 'views/editar.html',
                    controller: 'ctrlEditar'
                });

            $urlRouterProvider.otherwise('alta');
        }
    )
    .controller('ctrlAlta', function(){

    })
    .controller('ctrlEditar', function(){
    	
    })
   /* .controller('ctrlAlta', [
        '$scope',
        'posts',
        function($scope, posts) {}
    ])
    .controller('ctrlEditar', [
        '$scope',
        '$stateParams'
        function($scope, $stateParams) {}
    ])*/
