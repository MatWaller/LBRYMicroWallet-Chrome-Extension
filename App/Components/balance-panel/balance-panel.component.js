// Register `balancePanel` component, along with its associated controller and template
angular.
module('balancePanel').
component('balancePanel', {
    templateUrl: 'Components/balance-panel/balance-panel.component.html',
    controller: function BalancePanelController() {
        this.balances = [{
            label: 'Confirmed Balance',
            value: "Loading Balance..."
        }, {
            label: 'Unconfirmed Balance',
            value: "Loading Balance..."
        }, {
            label: 'Total Balance',
            value: "Loading Balance..."
        }];
    }
});