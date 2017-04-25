// Define the `walletApp` module
angular.module('WalletApp', [
    'balancePanel',
    'withdrawPanel',
    'transactionPanel'
]).run(function($rootScope, $http) {
    $rootScope.isDaemonRunningBool = true;
    $rootScope.utilities = {
        isDaemonRunning: function() {
            $http({
                method: 'POST',
                url: 'http://localhost:5279/lbryapi',
                headers: { 'content-type': 'application/json; charset=UTF-8' },
                data: { "method": "wallet_balance" }
            }).then(successCallback, errorCallback);

            function successCallback(response) {
                console.log("Running");
                $rootScope.isDaemonRunningBool = true;
                $rootScope.$broadcast('updateBalance');
            }

            function errorCallback(error) {
                console.log("Not running");
                $rootScope.isDaemonRunningBool = false;
            }
        }

    }
});