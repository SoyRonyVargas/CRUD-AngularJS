var app = angular.module('MyFirstApp', []);

app.controller('FirstController',  ($scope, $http) => {
    
    const baseUrl = 'https://rickandmortyapi.com/api/character'
    
    $scope.personajes = []

    $http.get( baseUrl ).then( ({ data }) => {

        $scope.personajes = data.results
        // console.log($scope.personajes);
    })

    $scope.name = "xxx";
    
    $scope.allTodos = [
        { name: 'hacer pipi' , done: false },
        { name: 'hacer popo' , done: true },
        { name: 'hacer diarrea' , done: true },
        { name: 'comer a mario' , done: false },
    ];

    $scope.agregarComentario = function(){
        $scope.comentarios.push({ comentario: $scope.nuevo_comentario , user: 'pinga' })
        $scope.nuevo_comentario = ""
    }

})