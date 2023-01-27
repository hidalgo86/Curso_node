angular.module('appTareas', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('alta', {
                url: '/alta',
                templateUrl: 'views/alta_inicio.html',
                controller: 'ctrlAlta'
            })
            .state('editar', {
                url: '/editar/{id}',
                templateUrl: 'views/editar_inicio.html',
            });

        $urlRouterProvider.otherwise('alta');
    })
    .controller('ctrlAlta', function($scope) {
        $scope.tarea = {}
        $scope.tareas = [];

        $scope.prioridades = ['Baja', 'Normal', 'Alta'];

        $scope.agregar = function() {
            $scope.tareas.push({
                nombre: $scope.tarea.nombre,
                prioridad: parseInt($scope.tarea.prioridad)
            })

            $scope.tarea.nombre = '';
            $scope.tarea.prioridad = '';
        }

        $scope.masPrioridad = function(tarea) {
            tarea.prioridad += 1;
        }

        $scope.menosPrioridad = function(tarea) {
            tarea.prioridad -= 1;
        }

        $scope.eliminar = function(tarea){
            var indice = $scope.tareas.indexOf(tarea);
            $scope.tareas.splice(indice, 1);
        }

    })