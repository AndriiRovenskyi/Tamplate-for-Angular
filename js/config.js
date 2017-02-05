app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: "../views/home.html",
        controller: "homeCtrl",
        controllerAs: "home"
    })
    .when('/catalog',{
        templateUrl: "../views/catalog.html",
        controller: "catalogCtrl",
        controllerAs: "catalog"
    })
    .when('/contact',{
        templateUrl: "../views/contactUs.html",
        controller: "contactCtrl",
        controllerAs: "contact"
    })
    .otherwise({
        redirectTo: '/'
    })
})