var mercadoApp = angular.module('MercadoApp', ['ui.router', 'angularUtils.directives.dirPagination', 'textAngular']);

mercadoApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise = ('collections');

    $stateProvider
        .state('collections', {
            url: '/collections',
            params: {
                department: 'Collections',
                teams: ['Credit Card Collections', 'Personal Loans Collections', 'Motor Loans Collections', 'Equity Loans Collections', 'Hardship', 'Litigation', 'Loss Recoveries Centre', 'Comprehensive Credit Reporting', 'Skip Trace', 'Asset Management', 'Skip', 'Inbound Cards and Personal Loans', 'Issuance and Custody', 'Specials', 'Outbound PL', 'Outbound Cards'],
            },
            views: {
                '': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/main.html',
                    controller: 'MainCtrl'
                },
                'contacts@collections': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/components/contacts.html',
                    controller: 'ContactsCtrl'
                },
                'pp@collections': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-collections.html'
                },
                'toolkit@collections': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html',
                    controller: 'ToolkitCtrl'
                },
                'documents@collections': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html',
                    controller: 'DocumentCtrl'
                }
            }
        })

    .state('originations', {
        url: '/originations',
        params: {
            department: 'Originations',
            teams: ['New Accounts', 'Lending', 'SupportLine', 'Central Compliance Team', 'Retail Finance', 'NZ Originations'],
        },
        views: {
            '': {
                templateUrl: 'wp-content/themes/mercado-wp/views/main.html',
                controller: 'MainCtrl'
            },
            'contacts@originations': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/contacts.html',
                controller: 'ContactsCtrl'
            },
            'pp@originations': {
                templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-originations.html'
            },
            'toolkit@originations': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html',
                controller: 'ToolkitCtrl'
            },
            'documents@originations': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html',
                controller: 'DocumentCtrl'
            }
        }
    })

    .state('cs-support', {
        url: '/cs-support',
        params: {
            department: 'Customer Solutions & Support',
            teams: ['Customer Solutions', 'Customer Service', 'Helpline', 'Customer Support', 'Business Support'],
        },
        views: {
            '': {
                templateUrl: 'wp-content/themes/mercado-wp/views/main.html',
                controller: 'MainCtrl'
            },
            'pp@cs-support': {
                templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-cs-support.html'
            },
            'contacts@cs-support': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/contacts.html',
                controller: 'ContactsCtrl'
            },
            'toolkit@cs-support': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html',
                controller: 'ToolkitCtrl'
            },
            'documents@cs-support': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html',
                controller: 'DocumentCtrl'
            }
        }
    })

    .state('cmt', {
        url: '/cmt',
        params: {
            department: 'Complaints Management Team',
            teams: ['CRT', 'DRD'],
        },
        views: {
            '': {
                templateUrl: 'wp-content/themes/mercado-wp/views/main.html',
                controller: 'MainCtrl'
            },
            'pp@cmt': {
                templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-cmt.html'
            },
            'contacts@cmt': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/contacts.html',
                controller: 'ContactsCtrl'
            },
            'toolkit@cmt': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html',
                controller: 'ToolkitCtrl'
            },
            'documents@cmt': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html',
                controller: 'DocumentCtrl'
            }
        }
    })

    .state('personal-loans', {
        url: '/personal-loans',
        params: {
            department: 'Personal Loans',
            teams: ['PL Sales - Outbound', 'PL Sales - Inbound', 'PL Sales - LPE', 'Direct Sales - Outbound', 'Direct Sales - Inbound', 'Direct Sales - Online'],
        },
        views: {
            '': {
                templateUrl: 'wp-content/themes/mercado-wp/views/main.html',
                controller: 'MainCtrl'
            },
            'pp@personal-loans': {
                templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-personal-loans.html',
            },
            'contacts@personal-loans': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/contacts.html',
                controller: 'ContactsCtrl'
            },
            'toolkit@personal-loans': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html',
                controller: 'ToolkitCtrl'
            },
            'documents@personal-loans': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html',
                controller: 'DocumentCtrl'
            }
        }
    })

    .state('insurance', {
        url: '/insurance',
        params: {
            department: 'Insurance',
            teams: ['Insurance'],
        },
        views: {
            '': {
                templateUrl: 'wp-content/themes/mercado-wp/views/main.html',
                controller: 'MainCtrl'
            },
            'pp@insurance': {
                templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-insurance.html'
            },
            'contacts@insurance': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/contacts.html',
                controller: 'ContactsCtrl'
            },
            'toolkit@insurance': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html',
                controller: 'ToolkitCtrl'
            },
            'documents@insurance': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html',
                controller: 'DocumentCtrl'
            }
        }
    })

    .state('fraud', {
        url: '/fraud',
        params: {
          department: 'Fraud',
          teams: ['Fraud Falcon Prevention', 'Application Fraud Prevention (Instinct)', 'Claims and Dispute Team', 'Fraud Investigation']
        },
        views: {
            '': {
                templateUrl: 'wp-content/themes/mercado-wp/views/fraud.html'
            }
        }
    })
});

mercadoApp.controller('MainCtrl', function($scope, $stateParams) {
    $scope.department = $stateParams.department;
});

mercadoApp.controller('ToolkitCtrl', function($scope, $http, $q) {

    $scope.message = "Toolkit would be awesome!";

    var tk_response, tk_response1, tk_response2, tk_response3 = "";

    tk_response = $http.get('./wp-json/wp/v2/toolkit');
    tk_response1 = $http.get('./wp-json/wp/v2/toolkit?page=2');
    tk_response2 = $http.get('./wp-json/wp/v2/toolkit?page=3');
    tk_response3 = $http.get('./wp-json/wp/v2/toolkit?page=4');


    $q.all([tk_response, tk_response1, tk_response2, tk_response3]).then(function() {
      var a = tk_response.$$state.value.data;
      var b = tk_response1.$$state.value.data;
      var c = a.concat(b);
      c = c.concat(tk_response2.$$state.value.data);
      c = c.concat(tk_response3.$$state.value.data);
      $scope.toolkit = c;
      console.log( c );
    });

});

mercadoApp.controller('ContactsCtrl', function($scope, $http, $sce) {

    $scope.message = "Contacts would be awesome!";

    $http({
        method: 'GET',
        url: './wp-json/wp/v2/contacts'
    }).then(function successCallback(response) {
        $scope.contacts = response.data;
    }, function errorCallback(response) {
        console.log("Cannot get the data from the contacts.json file." + response)
    });
});

mercadoApp.controller('DocumentCtrl', function($scope, $http, $stateParams) {

    $scope.teams = $stateParams.teams;
    $scope.department = $stateParams.department;

    console.log($scope.department);
    console.log($scope.teams);

    var searchDocuments = function() {
        console.log("This function was called when the search button was clicked!");
    }

    $http({
        method: 'GET',
        url: './wp-json/wp/v2/documents'
    }).then(function successCallback(response) {
        $scope.response = response;
        $scope.documents = $scope.response.data;
    }, function errorCallback(response) {
        console.log("Cannot get the data from the documents.json file.")
    });
});

mercadoApp.controller('CommsHubCtrl', function($scope, $http) {

    $scope.message = 'Hello from Comms Hub!';

    $http({
        method: 'GET',
        url: './wp-content/themes/mercado-wp/data/posts.json'
    }).then(function successCallback(response) {
        $scope.response = response;
        // console.log($scope.response);
    }, function errorCallback(response) {
        console.log("Cannot get the data from the communications file.")
    });

    $http({
        method: 'GET',
        url: 'http://homepage.lfs.local/communications/wp-json/wp/v2/categories'
    }).then(function successCallback(response) {
        $scope.categories = response.data;
    }, function errorCallback(response) {
        console.log("Cannot get the data from the Comms Hub Category section");
    });
});
