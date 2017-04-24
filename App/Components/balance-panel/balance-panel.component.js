// Register `balancePanel` component, along with its associated controller and template
angular.
module('balancePanel').
component('balancePanel', {
    templateUrl: 'Components/balance-panel/balance-panel.component.html',
    controller: function BalancePanelController($http, $scope) {
        this.ConfirmedBalance;
        this.getConfirmedBalance = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:5279/lbryapi',
                headers: { 'content-type': 'application/json; charset=UTF-8' },
                data: { "method": "wallet_balance" }
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                $("#ConfirmedBalance").text(response.data.result);
            }

            function errorCallback(error) {
                console.log(error);
            }
        }

        $scope.getUnconfirmedBalance = function($http) {
            return 0;
        }
        $scope.getTotalBalance = function($http) {
            $http({
                method: 'POST',
                url: 'http://localhost:5279/lbryapi',
                headers: { 'content-type': 'application/json; charset=UTF-8' },
                data: { "method": "wallet_balance" }
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                $("#TotalBalance").text(response.data.result);
            }

            function errorCallback(error) {
                console.log(error);
            }
        }

        $scope.balances = [{
            label: 'Confirmed Balance',
            id: 'ConfirmedBalance',
            value: this.getConfirmedBalance($http)
        }, {
            label: 'Unconfirmed Balance',
            id: 'UnconfirmedBalance',
            value: $scope.getUnconfirmedBalance($http)
        }, {
            label: 'Total Balance',
            id: 'TotalBalance',
            value: $scope.getTotalBalance($http)
        }];
    }
});