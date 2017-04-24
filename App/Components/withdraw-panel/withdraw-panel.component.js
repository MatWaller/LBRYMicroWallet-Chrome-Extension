// Register `balancePanel` component, along with its associated controller and template
angular.
module('withdrawPanel').
component('withdrawPanel', {
    templateUrl: 'Components/withdraw-panel/withdraw-panel.component.html',
    controller: function WithdrawPanelController($scope, $http) {
        $scope.submit = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:5279/lbryapi',
                headers: { 'content-type': 'application/json; charset=UTF-8' },
                data: {
                    "method": "send_amount_to_address",
                    "params": {
                        "amount": $scope.qty,
                        "address": $scope.add
                    }
                }
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                if (response.data.result === true) {
                    $('form')[0].reset();
                    alert("Transaction Complete");
                }
            }

            function errorCallback(error) {
                $('form')[0].reset();
                alert("A error occurred while sending.");
            }
        }
    }
});