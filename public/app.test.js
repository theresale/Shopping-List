describe('myApp', function () {
		
	beforeEach(module('myApp'));

	var $controller, $scope, $httpBackend;

	beforeEach(inject(function($controller, $rootScope){
	    $scope = $rootScope.$new();
	    createController = function(ctrl){
	  		return $controller(ctrl,{"$scope": $scope});
	    }
	}));

	describe('toBuyCtrl.toBuyAdd', function () {
		it('should add items to toBuyList array', function () {
			var controller = createController('toBuyCtrl');
			$scope.toBuyList = [];
    		$scope.toBuyItems = [];
			$scope.toBuyInput = 'test1';
			$scope.toBuyAdd();
       		expect($scope.toBuyList[0].toBuyText).toBe('test1');
		});
		it('should add items to toBuyItems array', function () {
			var controller = createController('toBuyCtrl');
			$scope.toBuyList = [];
    		$scope.toBuyItems = [];
			$scope.toBuyInput = 'test1';
			$scope.toBuyAdd();
       		expect($scope.toBuyItems[0]).toBe('test1');
		});	
	});

	describe('toBuyCtrl.remove', function () {
		it('removes deselected from toBuyList array', function () {
			var controller = createController('toBuyCtrl');
			$scope.toBuyList = [{toBuyText:'test1', done:true},{toBuyText:'test2', done:false},{toBuyText:'test3', done:true}];
    		$scope.toBuyItems = [];
			$scope.remove();
       		expect($scope.toBuyList[0].toBuyText).toBe('test2');
		});
		it('removes deselected from toBuyItems', function () {
		 	var controller = createController('toBuyCtrl');
			$scope.toBuyList = [{toBuyText:'test1', done:true},{toBuyText:'test2', done:false},{toBuyText:'test3', done:true}];
    		$scope.toBuyItems = [];
			$scope.remove();
       		expect($scope.toBuyItems[0]).toBe('test2');
		});	
	});

	describe('registerCtrl.addRegistrants', function () {
		it('adds username and password to database', function() {
			var controller = createController('registerCtrl');
			
			$httpBackend
				.when('POST', '/users', {
					username: 'userx',
					password: 'password'
				})
				.respond({
					usename: 'userx',
					password: 'password'
				});
		
			$httpBackend.flush();
			$scope.addRegistrants();
			expect(successCallack(data)).toBe(true);
		});
	});
});

$httpBackend
    .when('GET', 'http://localhost/foo')
    .respond(200, { foo: 'bar' });

  $httpBackend.flush();

  expect($scope.valid).toBe(true);
  expect($scope.response).toEqual({ foo: 'bar' });

