
<div layout="column" style="height:600px" ng-cloak>

  <md-toolbar>
  <div class="md-toolbar-tools">
    <h3>
      <span>Angular Store</span>
    </h3>
  </div>

</md-toolbar>

<md-content flex layout-margin>
<div>Cart</div>
<md-input-container >
<label>Search</label>
<input type="text" ng-model="search">
</md-input-container>
<md-list>

<md-list-item class="md-3-line" ng-repeat="item in  cartCtrl.fruits |filter: { name: search } track by $index">
<img ng-src="{{listCtrl.imgPath}}" class="md-avatar">

<div class="md-list-item-text">
  <h3 class="blue" ui-sref="home.item({id:item.id})">{{item.name}}<i class="fa fa-external-link" aria-hidden="true"></i></h3>
  <h4>..............</h4>

              </div>
              <div layout-padding class="vertical-divider margin-auto">{{item.price}}</div>
              <div class="margin-auto"><md-button  class="md-primary" ng-click="removeFromCart(item,$index);item.inCart= true">remove from cart</md-button> 
               </div>
              
              <md-divider inset></md-divider>
            </md-list-item>

          </md-list>
<div layout layout-align="center end">
  <md-button ui-sref="home.list" class="md-warn">Back to store</md-button>
</div>

        </md-content>

      </div>
