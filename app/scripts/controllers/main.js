'use strict';

angular.module('pinpoint').controller('MainCtrl', function ($scope) {

    $scope.initMap = function() {
        $scope.dayton = {
            lat: 39.76849,
            lng: -84.06005,
            zoom: 17
        };

        $scope.events = {};
        $scope.markers = [];
    };

    $scope.initMap();

});
