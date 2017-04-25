// Register `balancePanel` component, along with its associated controller and template
angular.
module('balancePanel').
component('balancePanel', {
    templateUrl: 'Components/balance-panel/balance-panel.component.html',
    controller: function BalancePanelController($http, $scope) {
        this.ConfirmedBalance;
        $scope.$on('updateBalance', function(e) {
            $scope.getConfirmedBalance();
            $scope.getUnconfirmedBalance();
        });
        $scope.getConfirmedBalance = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:5279/lbryapi',
                headers: { 'content-type': 'application/json; charset=UTF-8' },
                data: { "method": "wallet_balance" }
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                $("#ConfirmedBalance").text(response.data.result);
                $("#TotalBalance").text(response.data.result);
            }

            function errorCallback(error) {
                $("#ConfirmedBalance").text('Unable to get balance.');
            }
        }

        $scope.getUnconfirmedBalance = function($http) {
            $("#UnconfirmedBalance").text("0");
        }

        $scope.balances = [{
            label: 'Confirmed Balance',
            id: 'ConfirmedBalance',
            value: 'Loading balance...'
        }, {
            label: 'Unconfirmed Balance',
            id: 'UnconfirmedBalance',
            value: 'Loading balance...'
        }, {
            label: 'Total Balance',
            id: 'TotalBalance',
            value: 'Loading balance...'
        }];
    }
});