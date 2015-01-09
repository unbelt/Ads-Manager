'use strict';

angular.module('adsApp').factory('resource', ['$resource', 'config', 'authorization',
    function ($resource, config, authorization) {
        return {
            use: function (resource) {
                var headers = authorization.getAuthorizationHeader();

                return $resource(config.app.api + resource + '/:id', {id: '@id'},
                    {
                        query: {
                            method: 'GET',
                            headers: headers,
                            isArray: true
                        },
                        get: {
                            method: 'GET',
                            headers: headers,
                            isArray: false
                        },
                        put: {
                            method: 'PUT',
                            headers: headers
                        },
                        post: {
                            method: 'POST',
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