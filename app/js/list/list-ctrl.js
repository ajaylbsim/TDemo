angular.module( 'list', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.list', {
		url: '/list',
		templateUrl: 'list/list-tpl.tpl',
		controller: 'ListCtrl',
		resolve:{
			data:function(CartService){
				return CartService.getList();
			}
		}
	} );
} ).controller( 'ListCtrl', function( $scope,CartService,AppUtils,data,$state) {
	$scope.listCtrl = {
		fruits:data.data,
		imgPath:'http://lorempixel.com/60/60/'

	};
	$scope.listCtrl.cartItemCount = count();
	$scope.removeFromCart= removeFromCart;
	$scope.addToCart= addToCart;
	$scope.changeState= changeState;

	function removeFromCart(item,index){
	if(!CartService.isPresent(item.id)){
		$scope.listCtrl.fruits = AppUtils.removeFromArrayByField($scope.listCtrl.fruits,"id",item);
	}
	
}

function changeState(name){
	if($scope.listCtrl.cartItemCount>0)
		$state.go(name);
}
function addToCart(item){
	CartService.isPresent(item.id).success(function(res){
		if(!res){
			item.inCart =true;
			CartService.moveToCart(item);
		$scope.listCtrl.cartItemCount = count();
		}else{
			alert("Already added");	
		}

	});
	

	$scope.listCtrl.cartItemCount =  count();
}

function count(){
	var length = 0;
	for (var i = $scope.listCtrl.fruits.length - 1; i >= 0; i--) {

		if($scope.listCtrl.fruits[i].inCart){
			length+=1;
		}
	}
	return length;
}


} );