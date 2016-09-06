

.controller('MyCtrl', function($scope, Camera) {

   $scope.getPicture = function (options) {
	
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 0
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
   };  

})