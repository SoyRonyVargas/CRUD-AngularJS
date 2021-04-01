var app = angular.module('CreateApp', []);

app.controller('CrearController', function ($scope, $http) {

    const baseUrl = `https://crudcrud.com/api/7f27d7d143544564b6c27dd33d80e075/pokemon`

    $scope.name = ""
    $scope.ataque = ""
    $scope.defensa = ""
    $scope.imagen = ""

    $scope.enviar = function () {

        const data = {
            name: $scope.name,
            ataque: $scope.ataque,
            defensa: $scope.defensa,
            imagen: $scope.imagen
        }
        $http.post(baseUrl, data)
        .then(function (d) {
            alert('¡Creado correctamente!')
            console.log(d);
            $scope.name = ""
            $scope.ataque = ""
            $scope.defensa = ""
            $scope.imagen = ""
        })
        console.log('xd');
    }

})