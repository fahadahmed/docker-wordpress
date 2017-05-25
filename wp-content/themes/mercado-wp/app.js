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
                'pp@collections': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/pnps/pp-collections.html'
                },
                'toolkit@collections': {
                    templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html'
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
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html'
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
            department: 'Customer Solutions',
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
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html'
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
            },
            'documents@cmt': {
                templateUrl: 'wp-content/themes/mercado-wp/views/components/documents.html'
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
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html'
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
                templateUrl: 'wp-content/themes/mercado-wp/views/components/toolkit.html'
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

mercadoApp.factory('mercadoService', function($http, $q) {

  return {

    // getting the results for the Toolkit
    getToolkit: function() {
      return $q.all([
        $http.get('http://homepage.lfs.local/mercado-v2/wp-json/wp/v2/toolkit?per_page=100'),
        $http.get('http://homepage.lfs.local/mercado-v2/wp-json/wp/v2/toolkit?per_page=100&page=2')
      ])

      .then(function(results) {
        var data = [];
        angular.forEach(results, function(result) {
          console.log(result.data);
          data = data.concat(result.data);
        });
        return data;
      });
    },

    // getting the results for DocHub
    getDocuments: function() {
      return $q.all([
        $http.get('http://homepage.lfs.local/mercado-v2/wp-json/wp/v2/documents?per_page=100'),
        $http.get('http://homepage.lfs.local/mercado-v2/wp-json/wp/v2/documents?per_page=100&page=2'),
        $http.get('http://homepage.lfs.local/mercado-v2/wp-json/wp/v2/documents?per_page=100&page=3'),
        $http.get('http://homepage.lfs.local/mercado-v2/wp-json/wp/v2/documents?per_page=100&page=4')
      ])

      .then(function(results) {
        var data = [];
        angular.forEach(results, function(result) {
          console.log(result.data);
          data = data.concat(result.data);
        });
        return data;
      });
    }

  };
});

mercadoApp.controller('RootCtrl', function($scope, mercadoService) {

  $scope.message = "Please wait while we get your data..";

  mercadoService.getToolkit().then(function(data) {
    $scope.toolkit = data;
    $scope.message = "";
  });

  mercadoService.getDocuments().then(function(data) {
    $scope.documents = data;
  });
});

mercadoApp.controller('MainCtrl', function($scope, $stateParams) {
    $scope.selected_department = $stateParams.department;
});


mercadoApp.controller('DocumentCtrl', function($scope, $http, $stateParams, mercadoService) {

    $scope.teams = $stateParams.teams;
    $scope.selected_department = $stateParams.department;

    console.log($scope.selected_department);
    console.log($scope.teams);

    var searchDocuments = function() {
        console.log("This function was called when the search button was clicked!");
    }
});

mercadoApp.controller('CommsHubCtrl', function($scope, $http) {

    $http({
        method: 'GET',
        url: 'http://homepage.lfs.local/communications/wp-json/wp/v2/posts'
    }).then(function successCallback(response) {
        $scope.response = response;
        // console.log($scope.response);
        $scope.message = "";
    }, function errorCallback(response) {
        console.log("Cannot get the data from the communications file.")
    });
});
