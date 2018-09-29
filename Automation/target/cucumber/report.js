$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1142240,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#Given validate the browser"
    },
    {
      "line": 5,
      "value": "#When Browser is triggered"
    },
    {
      "line": 6,
      "value": "#Then check if browser is displayed"
    },
    {
      "line": 8,
      "value": "#If you are using hooks, you can not use background in the same feature"
    },
    {
      "line": 10,
      "value": "#Passando texto hardcodede"
    }
  ],
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User login into application with \"Jim\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 149951642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 3921168,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 62787,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 560857,
  "status": "passed"
});
formatter.after({
  "duration": 90558,
  "status": "passed"
});
formatter.before({
  "duration": 81502,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User login into application with \"john\" and password \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 107463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 34
    },
    {
      "val": "4321",
      "offset": 54
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 210095,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 230017,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 68825,
  "status": "passed"
});
formatter.after({
  "duration": 62787,
  "status": "passed"
});
formatter.before({
  "duration": 63391,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#Passando texto DataTable Concept"
    }
  ],
  "line": 28,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "abcd",
        "john@abcd.com",
        "Australia",
        "3242353"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 126781,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1636084,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 135837,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 52523,
  "status": "passed"
});
formatter.after({
  "duration": 94180,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 35,
      "value": "#Passando texto KeyWord Concept"
    }
  ],
  "line": 37,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User login in to application with \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 44,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "User1",
        "Pass1"
      ],
      "line": 45,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "User2",
        "Pass2"
      ],
      "line": 46,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "User3",
        "Pass3"
      ],
      "line": 47,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "User4S",
        "Pass4"
      ],
      "line": 48,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 407512,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User login in to application with User1 and Pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 108066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 34
    },
    {
      "val": "Pass1",
      "offset": 44
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 273486,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 250544,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 237866,
  "status": "passed"
});
formatter.after({
  "duration": 81502,
  "status": "passed"
});
formatter.before({
  "duration": 249336,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User login in to application with User2 and Pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 112292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User2",
      "offset": 34
    },
    {
      "val": "Pass2",
      "offset": 44
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 554216,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 77276,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 64598,
  "status": "passed"
});
formatter.after({
  "duration": 330235,
  "status": "passed"
});
formatter.before({
  "duration": 159382,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User login in to application with User3 and Pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 192587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User3",
      "offset": 34
    },
    {
      "val": "Pass3",
      "offset": 44
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 1213479,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 1034778,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 77276,
  "status": "passed"
});
formatter.after({
  "duration": 63995,
  "status": "passed"
});
formatter.before({
  "duration": 88747,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User login in to application with User4S and Pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 94784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User4S",
      "offset": 34
    },
    {
      "val": "Pass4",
      "offset": 45
    }
  ],
  "location": "stepDefinitions.user_login_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 157572,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 79691,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cards_are_displayed()"
});
formatter.result({
  "duration": 70635,
  "status": "passed"
});
formatter.after({
  "duration": 63994,
  "status": "passed"
});
});