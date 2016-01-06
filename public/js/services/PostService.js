angular.module('PostService', []).factory('PostService', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/posts');
        },

        getOne : function(id){
            return $http.get('/api/post/'+id);
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new post
        create : function(post) {
            return $http.post('/api/newpost', post);
        },

        remove : function(id){
            return $http.delete('/api/deletepost/'+id);
        },

        update : function(post){
            return $http.put('/api/updatepost', post);
        }
    }       

}]);