
<div id="page" ng-controller="HeaderCtrl">
	<md-toolbar sticky-subheader show-after="50" toggle-class="scroll-height" id="parent-header" class="min-header-height scroll-height" ng-include="'header/header.tpl'"> </md-toolbar>
	<md-content id="home" md-scroll-y>

	<div ui-view="" autoscroll='!isUnlimited' flex="noshrink">


	</div>

	<div ng-include="'footer/footer.tpl'"></div>
</div>