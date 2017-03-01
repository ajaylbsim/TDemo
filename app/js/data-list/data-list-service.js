angular.module('app').service('DataListService', ['$http','Constants','$q', function($http,Constants,$q){
	var cart = {};
	var myLimit = 5;
	var randomList = [0,1,3];
	var that = this;
	var defered = $q.defer();

	this.moveToList=function(item){
		cart.push(item);
		that.updateOnAdd(item);
	};

	this.getPaginatedData=function(pageNo,pageSize){
		if(cart[pageNo]){
			defered.resolve(cart);
		}else{
			$http.get(Constants.APP_URL+"/item/list").then(function(res){
				watch (pageNo);
				cart[pageNo] = { name: "vehicle"+pageNo};
				defered.resolve(cart);
			},function(){
				console.log("error in api response");
			});

		}
		return defered.promise;

	};


	function watch (currentPage) {
		if(getLength(cart)>=myLimit){
			for (var i = 0 ;i<randomList.length;i++) {
				console.log(" remove >> ",randomList[i]);
				if((cart[randomList[i]])&&(cart[randomList[i]] !=currentPage )){
					delete cart[randomList[i]];

				}
			}

		}
	}

	function getLength(cart){
		var count =0;
		for(var key in cart)count++;
			return count;
	}


}]);