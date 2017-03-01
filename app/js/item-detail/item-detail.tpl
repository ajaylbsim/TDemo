    <div layout="column" style="height:600px" ng-cloak>
      <md-toolbar>
        <div>
          <h3>
            <span>Angular Store</span>
          </h3>
        </div>
      </md-toolbar>
      <div layout layout-padding><div><img ng-src="{{itemCtrl.fruit.imgPath}}" class="md-avatar"></div> <div layout-padding class="margin-auto"> {{itemCtrl.fruit.name}} {{itemCtrl.fruit.detail}}</div></div>
      <md-content flex layout layout-margin>
      <div flex>
          <md-toolbar layout-padding layout-align="center end">
            <div><h5 class="m-p-0">This item in your cart</h5></div>
            <div> Price : {{itemCtrl.fruit.price}}</div>
          </md-toolbar>
          <md-list>
            <md-list-item class="md-3-line">
              <div class="md-list-item-text">
                <h3 class="blue">Calories</h3>
              </div>
              <div layout-padding class=" margin-auto">{{itemCtrl.fruit.calorie}}</div>
              <md-divider inset></md-divider>
            </md-list-item>
            <md-list-item class="md-3-line">
              <div class="md-list-item-text">
                <h3 class="blue">Fibre</h3>
              </div>
              <div layout-padding class=" margin-auto">{{itemCtrl.fruit.fibre}}</div>
              <md-divider inset></md-divider>
            </md-list-item>
            <md-list-item class="md-3-line">
              <div class="md-list-item-text">
                <h3 class="blue">Folates</h3>
              </div>
              <div layout-padding class=" margin-auto">{{itemCtrl.fruit.folates}}</div>
              <md-divider inset></md-divider>
            </md-list-item>
            <md-list-item class="md-3-line">
              <div class="md-list-item-text">
                <h3 class="blue">Vitamin C</h3>
              </div>
              <div layout-padding class=" margin-auto">{{itemCtrl.fruit.vitaminc}}</div>
              <md-divider inset></md-divider>
            </md-list-item>
          </md-list>
        </div>
        <div layout="column"><md-button ng-if="itemCtrl.fruit.inCart" ng-click="addToCart(itemCtrl.fruit)" class="md-primary">Add to cart</md-button>
          <md-button class="md-warn"  ng-if=" !itemCtrl.fruit.inCart" ng-click="removeFromCart(itemCtrl.fruit)">Remove from cart</md-button>
          <md-button  ui-sref="home.list">Back to store</md-button>
        </div>
      </md-content>
    </div>
