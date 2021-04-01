var app = angular.module('MyFirstApp', []);

app.controller('FirstController', [ "$scope" , ($s) => {
    
    // var $todoList = this
    $s.algo = "xxx";
    $s.name = "mario";
    $s.nuevo_comentario = ""
    $s.comentarios = [
        { comentario: 'buen tutorial!' , user: "mariopija"},
        { comentario: 'buen qlo de mario :D' , user: "cesarmora"},
        { comentario: 'mario comeme el pito' , user: "cvander"}
    ];
    $s.allTodos = [
        { name: 'hacer pipi' , done: false },
        { name: 'hacer popo' , done: true },
        { name: 'hacer diarrea' , done: true },
        { name: 'comer a mario' , done: false },
    ];
    $s.agregarComentario = function(){
        $s.comentarios.push({ comentario: $s.nuevo_comentario , user: 'pinga' })
        $s.nuevo_comentario = ""
    }
}])