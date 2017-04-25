// Register `balancePanel` component, along with its associated controller and template
angular.
module('transactionPanel').
component('transactionPanel', {
    templateUrl: 'Components/transaction-panel/transaction-panel.component.html',
    controller: function TransactionPanelController($scope, $http) {

        $http({
            method: 'POST',
            url: 'http://localhost:5279/lbryapi',
            headers: { 'content-type': 'application/json; charset=UTF-8' },
            data: {
                "method": "transaction_list",
            }
        }).then(successCallback, errorCallback);

        function successCallback(response) {
            $.each(response.data.result, function(index, value) {
                $("#txTable")
                    .append(
                        "<tr><td>" + value.date + "</td><td>" + value.value + "</td><td><a class=\"view\" target=\"_blank\" href=\"https://explorer.lbry.io/tx/" + value.txid + "\">View</a></td></tr>"
                    );
            });
        }

        function errorCallback(error) {
            console.log(error);
        }
    }
});