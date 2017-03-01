
<div layout="column" style="height:600px" ng-cloak>

  <md-toolbar>
  <div class="md-toolbar-tools">
    <h3>
      <span>Data list</span>
    </h3>
  </div>

</md-toolbar>

<md-content flex layout-margin>
<div>Welcome to the Data list.</div>

<div>Datalist.</div>
<div style="magin-right:10"> {{dataListCtrl.dataset}}</div>

<div ng-show="dataListCtrl.current"> 
  <md-button class="md-primary" >Current page.</md-button>  {{dataListCtrl.current}}>>  {{dataListCtrl.dataset[dataListCtrl.current]}}</div>
  <div ng-repeat="page  in [1,2,3,4,5,6]">
    <div layout>  <md-button class="md-primary"  ng-click="dataListCtrl.onPageClick(page);dataListCtrl.current=page">Page :: {{page}}</md-button>  </div>
  </div>

</md-content>

</div>
