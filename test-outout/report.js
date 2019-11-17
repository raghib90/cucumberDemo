$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pc/Desktop/Ikokas Document/demoCucumber/src/main/java/Features/fblogin.feature");
formatter.feature({
  "line": 1,
  "name": "facebook loging validation",
  "description": "",
  "id": "facebook-loging-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario: login validation of facebook."
    },
    {
      "line": 3,
      "value": "#Given user is present in login fb page"
    },
    {
      "line": 4,
      "value": "#When user enters \"raghib90@gmail.com\" and \"diplomaengg@90\""
    },
    {
      "line": 5,
      "value": "#Then user click on login buttons"
    },
    {
      "line": 6,
      "value": "#Then user is in facebook homepage"
    }
  ],
  "line": 8,
  "name": "login validation of facebook.",
  "description": "",
  "id": "facebook-loging-validation;login-validation-of-facebook.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user is present in login fb page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"\u003cuserNames\u003e\" and \"\u003cpasswords\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on login buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is in facebook homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "facebook-loging-validation;login-validation-of-facebook.;",
  "rows": [
    {
      "cells": [
        "userNames",
        "passwords"
      ],
      "line": 14,
      "id": "facebook-loging-validation;login-validation-of-facebook.;;1"
    },
    {
      "cells": [
        "raghib90@gmail.com",
        "diplomaengg@90"
      ],
      "line": 15,
      "id": "facebook-loging-validation;login-validation-of-facebook.;;2"
    },
    {
      "cells": [
        "mahfoozrahi@gmail.com",
        "Jhrca@12345"
      ],
      "line": 16,
      "id": "facebook-loging-validation;login-validation-of-facebook.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "login validation of facebook.",
  "description": "",
  "id": "facebook-loging-validation;login-validation-of-facebook.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user is present in login fb page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"raghib90@gmail.com\" and \"diplomaengg@90\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on login buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is in facebook homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLoginTest.user_is_present_in_login_fb_page()"
});
formatter.result({
  "duration": 14848887400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raghib90@gmail.com",
      "offset": 13
    },
    {
      "val": "diplomaengg@90",
      "offset": 38
    }
  ],
  "location": "FacebookLoginTest.user_enters_user_and_password(String,String)"
});
formatter.result({
  "duration": 1762942800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"email\"}\n  (Session info: chrome\u003d74.0.3729.108)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-LF1R011\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54240}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}), userDataDir\u003dC:\\Users\\pc\\AppData\\Local\\Temp\\scoped_dir13744_23849}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.108, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5a3d957700b6d03e5f1f64eba63c2ffb\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefination.FacebookLoginTest.user_enters_user_and_password(FacebookLoginTest.java:33)\r\n\tat ✽.When user enters \"raghib90@gmail.com\" and \"diplomaengg@90\"(C:/Users/pc/Desktop/Ikokas Document/demoCucumber/src/main/java/Features/fblogin.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FacebookLoginTest.user_click_on_login_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FacebookLoginTest.user_is_in_facebook_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "login validation of facebook.",
  "description": "",
  "id": "facebook-loging-validation;login-validation-of-facebook.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user is present in login fb page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"mahfoozrahi@gmail.com\" and \"Jhrca@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on login buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is in facebook homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLoginTest.user_is_present_in_login_fb_page()"
});
formatter.result({
  "duration": 15355702900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahfoozrahi@gmail.com",
      "offset": 13
    },
    {
      "val": "Jhrca@12345",
      "offset": 41
    }
  ],
  "location": "FacebookLoginTest.user_enters_user_and_password(String,String)"
});
formatter.result({
  "duration": 818239600,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginTest.user_click_on_login_buttons()"
});
formatter.result({
  "duration": 12263420600,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLoginTest.user_is_in_facebook_homepage()"
});
formatter.result({
  "duration": 287700,
  "status": "passed"
});
});