angular.module('MainCtrl', []).controller('MainController',['$scope','PostService', function($scope, PostService){

	$scope.message = 'Everything is good :)';
	$scope.post = {};

	function getPosts (){
		PostService.get().then(function(res){
			//data comes back
			$scope.data = res.data;
			console.log(res.data);
		}, function(){
			//show error message
			$scope.message = 'Error';
		});
	}

	$scope.deletePost = function(id){
		PostService.remove(id).then(function(){
			getPosts();
		}, function(){
			//show error message
			$scope.message = 'Did not delete';
		});
	};

	$scope.save = function(post){

		if(post._id){
			PostService.update(post).then(function(){
				getPosts();
				$scope.message = 'saved';
				$scope.post = {};
			}, function(){
				$scope.message = 'Not updated';
			});
		} else {
			PostService.create(post).then(function(){
				getPosts();
				$scope.post = {};
			}, function(){
				$scope.message = 'Not saved';
			});
		}
	}

	$scope.updatePost = function(id){
		PostService.getOne(id).then(function(res){
			$scope.post = res.data[0];
		});
	}


	getPosts();

}]);
