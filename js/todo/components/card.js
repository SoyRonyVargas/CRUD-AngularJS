angular.module('TodoApp')
.component('cardComponent', {
    templateUrl: 'js/todo/components/card.template.html',
    bindings: {
        td: '=', // or key: '<' it depends on what binding you need
        delete: '=',
        edit: '='
    },
    controller: function cardController(){
        
        // console.log($scope);
        // console.log(this);
        // console.log(this.td);
        this.onEdit = false
        // this.name = this.td.name
        this.desc = ""
        // this.deleteToDo = function(){
        //     alert('borrado')
        // }
        this.completeEdit = function()
        {
            // alert('edit')
            this.edit({
                id: this.td.id,
                name: this.td.name,
                desc: this.td.desc
            })
            this.onEdit = false
        }
        this.handleEdit = function()
        {
            this.onEdit = !this.onEdit
        }
    }
})