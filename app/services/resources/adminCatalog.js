'use strict';

angular.module('adsApp').factory('adminCatalog', ['resource',
    function (resource) {
        return {
            getAds: function (adsParams) {
                return resource.use('admin/ads').get(adsParams).$promise;
            }
        }
    }
]);