/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("myApp", ["ngRoute"]);
app.controller("personController", ['$routeParams', function ($routeParams) {
    var self = this;
    var person = function (firstname, lastname, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    };
    self.id = $routeParams;
    self.persons = [new person("Phillip", "Brink", 1), new person("Mikkel", "Ziemer", 2), new person("Kasper", "Vetter", 3), new person("Ørvur", "Gutterson", 4)];
    self.addPerson = function(firstname, lastname){
        var newPerson = new person(firstname, lastname, self.persons.length +1);
        self.persons.push(newPerson);
        console.log(self.persons);
    };
    
}]);
app.controller("viewController", ["$http", "MyService", function ($http, myService, MyFactory) {
        var self = this;
    }]).config(["$routeProvider", function ($routeProvider) {
        $routeProvider
                .when("/allPersons", {
                    templateUrl: "allPersons.html",
                    controller: "personController as personCtrl"
                })
                .when("/addPerson", {
                    templateUrl: "addPerson.html",
                    controller: "personController as personCtrl"
                })
                .when("/personId/:id", {
                    templateUrl: "personId.html",
                    controller: "personController as personCtrl"
                })
                .otherwise("/");

    }]);
