var app = angular.module('PokedexApp', []);

app.controller('PokedexController', function( $scope , $http ){

    const baseUrl = `https://crudcrud.com/api/7f27d7d143544564b6c27dd33d80e075/pokemon`

    $scope.pokemones = []

    $http.get( baseUrl )
    .then( ({ data }) => {
        $scope.pokemones = data
        console.log(
            $scope.pokemones
        );
    })

    $scope.borrar = function( id )
    {
        let b = confirm('Estas seguro que lo quieres borrar?')
        if( b )
        {
            $http.delete(`${baseUrl}/${id}`)
            .then( () => {
                $scope.pokemones = $scope.pokemones.filter( p => p._id !== id)
                alert('borrado!')
            })
        }
        // alert(b)
    }

})