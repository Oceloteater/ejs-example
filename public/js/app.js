angular.module('NgApp', []);

angular.module('NgApp').controller('NgController', ctrlFunc);

function ctrlFunc () {
    this.message = 'Thank you for connecting';

    this.people = clientPeople;
}