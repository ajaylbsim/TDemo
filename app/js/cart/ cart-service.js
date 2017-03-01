angular.module('app').service('CartService', ['$http','Constants', function($http,Constants){
	var cart = [];
	var that = this;
	this.moveToCart=function(item){
		cart.push(item);
		that.updateOnAdd(item);
	};

	this.removeFromCart=function(id){
   return $http.post(Constants.APP_URL+"/item/remove",{id:id},function(res){});
	};

	this.getCart = function(){
	return $http.get(Constants.APP_URL+"/item/cart",function(res){});
	};
	this.getList = function(){
	return $http.get(Constants.APP_URL+"/item/list",function(res){});
	};
	this.findById = function(id){
		return $http.post(Constants.APP_URL+"/item/detail",{id:id},function(res){});
	};

	this.isPresent = function(id){
		return $http.post(Constants.APP_URL+"/item/is-present",{id:id},function(res){});
	};
	this.getById = function(id){
		for (var i = cart.length - 1; i >= 0; i--) {
			if(cart[i].id== id){
				return cart[i];
			}
		}
		return null;
	};
	this.getCount = function(){
		return cart.length;
	};
	this.updateOnAdd = function(item){
     $http.post(Constants.APP_URL+"/item",item,function(res){});
	};

}]);