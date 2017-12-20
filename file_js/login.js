var app = angular.module('indexApp',[]);

app.controller('indexController',function ($scope,$window) {
	
	var urlBuy = "buy.html";
	
	$scope.doLogin = function() {
		if($scope.login.email == null){
			alert('email tidak valid')
		}
		else if($scope.login.password == null){
			alert('password Kosong')
		}
		else if ($scope.login.email != 'ciazhar.id@gmail.com' && $scope.login.password!= '123') {
			alert('email & password salah');
		}
		else{
			$window.location.href=urlBuy;
		}	
	}

})