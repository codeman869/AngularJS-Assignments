(function(){
    var app = angular.module("LunchContainer", []);

    app.controller = app.controller("LunchController", LunchController);

    LunchController.$inject = ["$scope"];

    function LunchController($scope) {
        $scope.message = "";
        $scope.list = "";
        initialize();
        

        $scope.checkList = function() {
            initialize();
            var items = $scope.list.split(",");
            if (items.length > 3) {
                $scope.error = true;
                updateMessage("too-much");
            } else if (items.length === 1 && items[0] === "") {
                updateMessage("none");
            } else {
                $scope.success = true;
                updateMessage("good");
            }
        }

        function updateMessage(msg) {
            switch (msg) {
                case "good":
                    $scope.message = "Enjoy!";
                    break;
                case "none":
                    $scope.message = "Please enter data first!"
                    break;
                case "too-much":
                    $scope.message = "Too much!";
                    break;
                default: 


            }
        }

        function initialize() {
            $scope.error = false;
            $scope.success = false;
        }


    }

    
})();