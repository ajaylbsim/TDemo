<style type="text/css">
   .login-form {
md-card {
  padding: 0!important;

  md-card-title {
    background-color: blue;
  }
}
}
</style>
<div>

  <md-content  layout="row" layout-align="space-around" layout-padding="layout-padding" ng-cloak="ng-cloak" class="login-form">
    <md-card flex="flex" flex-gt-sm="50" flex-gt-md="33">
      <md-toolbar>
        <div class="md-toolbar-tools">
          <h2><span>Login</span></h2>
        </div>
      </md-toolbar>
      <md-card-content>
        <form name="Form" novalidate>
          <md-input-container class="md-block">
            <label>Login</label>
            <input type="text" name="email" ng-model="loginCtrl.user.email" placeholder="login" required/>
            <div ng-messages="Form.email.$error"  multiple="">
              <div ng-message="required" class="my-message">Please enter your email.</div>
            </div>
          </md-input-container>
          <md-input-container class="md-block">
            <label>Password</label>
            <input type="password" name="password" ng-model="loginCtrl.user.password" placeholder="password" required md-maxlength="16"/>
            <div ng-messages="Form.password.$error" ng-if="Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)" >
              <div ng-message="required" class="my-message">Please enter your password.</div>
              <div ng-message="md-maxlength" class="my-message">Too long.</div>
            </div>
          </md-input-container>
          <md-button ng-disabled="!Form.$valid" ng-click="submit(Form)" class="md-raised md-primary">&nbsp Login &nbsp</md-button>
        </form>
      </md-card-content>
    </md-card>
  </md-content>
  <!-- Angular Material Dependencies-->

</div>