'use strict';

angular.module('adsApp').factory('resource', ['$resource', 'config', 'authorization',
    function ($resource, config, authorization) {
        return {
            use: function (resource) {
                var headers = authorization.getAuthorizationHeader();

                return $resource(config.app.api + 'admin/' + resource, {},
                    {
                        get: {
                            method: 'GET',
                            headers: headers
                        },
                        update: {
                            method: 'PUT',
                            headers: headers
                        },
                        delete: {
                            method: 'DELETE',
                            headers: headers
                        }
                    }
                );
            }
        }
    }
]);