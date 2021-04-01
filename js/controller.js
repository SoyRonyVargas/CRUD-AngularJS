var app = angular.module('MyFirstApp', []);

app.controller('FirstController', ($scope) => {
    
    // var $todoList = this
    $scope.algo = "xxx";
    $scope.name = "mario";
    $scope.nuevo_comentario = ""
    $scope.comentarios = [
        { comentario: 'buen tutorial!' , user: "mariopija"},
        { comentario: 'buen qlo de mario :D' , user: "cesarmora"},
        { comentario: 'mario comeme el pito' , user: "cvander"}
    ];
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