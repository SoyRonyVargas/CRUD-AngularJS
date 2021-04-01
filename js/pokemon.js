var app = angular.module('AppModule' , [])

app.controller('PKController' , function($self) {

    $self.pokemon = {
        name: 'pikachu',
        species: 'no se cual',
        img: 'https://www.cinemascomics.com/wp-content/uploads/2020/06/pokemon-pikachu.jpg',
        height: "2'4 (0.71m)"
    }

})