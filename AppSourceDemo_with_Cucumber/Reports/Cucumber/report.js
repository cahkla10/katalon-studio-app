$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user, I want to login in Swag Labs app.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "LGI005 - User want to login using correct credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LGI005"
    }
  ]
});
formatter.step({
  "name": "User input registered username \"standard_user\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_registered_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input registered password \"secret_sauce\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_registered_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap on LOGIN button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_tap_on_LOGIN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see \"PRODUCTS\" title page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_see_products_title_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "  As a user, I want to logout from Swag Labs app. ",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "LGO001 - User want to logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LGO001"
    }
  ]
});
formatter.step({
  "name": "User tap burger menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.user_click_burger_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap on LOGOUT",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.user_click_on_LOGOUT()"
});
formatter.result({
  "status": "passed"
});
});