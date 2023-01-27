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