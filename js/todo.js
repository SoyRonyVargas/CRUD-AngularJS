var app = angular.module('TodoApp', []);

app.controller('TodoController', function( $scope ){
    

    $scope.todo = []

    if( window.localStorage.getItem('todo-list') ){
        $scope.todo = JSON.parse(localStorage.getItem('todo-list'))
    }

    $scope.newActivity = {
        name: '',
        desc: '',
        date: '',
        done: false,
        id: null
    }

    $scope.addToDo = function()
    {
        if( $scope.newActivity.name === '' ){
            return alert('Enter a name')
        }
        if( $scope.newActivity.desc === '' ){
            return alert('Enter a description')
        }
        if( $scope.newActivity.date === '' ){
            return alert('Enter a date')
        }

        if( $scope.todo.length === 0 ){
            $scope.newActivity.id = 1
        }
        else
        {
            $scope.newActivity.id = $scope.todo.length + 1
        }
        
        $scope.todo.push( $scope.newActivity )
        
        $scope.newActivity = {
            name: '',
            desc: '',
            date: '',
        }

        localStorage.setItem('todo-list', JSON.stringify($scope.todo))

        alert('created successfuly')

    }

    $scope.deleteToDo = function(n)
    {
        const r = confirm('do you want to delete?')
        if( r ){
            $scope.todo = $scope.todo.filter( td => td.id !== n)
            window.localStorage.setItem('todo-list' , JSON.stringify($scope.todo))
            alert('Deleted successfuly')
        }
    }

    $scope.editToDo = function(obj)
    {
        const __td = {
            ...$scope.todo.find( td => td.id === obj.id ),
            ...obj
        }
        
        $scope.todo = $scope.todo.map( td => {
            if( td.id === __td.id ){
                console.log('sustituir');
                return __td
            }
            return td
        })

        window.localStorage.setItem('todo-list' , JSON.stringify($scope.todo))

    }


})