angular.module('app').service('AppUtils', [
    function() {
        var _this = this;
        _this.removeFromArrayByField = function(array,fieldName,value){
           for(var i=0;i<array.length; i++){
            console.log("array,fieldName,value",array[i],fieldName,value);
            if(array[i][fieldName] == value[fieldName]){
                array.splice(i,1);
            }
        }
        return array;
    };
}
    ]);

