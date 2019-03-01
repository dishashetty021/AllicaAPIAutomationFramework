$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sanity.feature");
formatter.feature({
  "line": 1,
  "name": "Sanity Tests including Experience, System and Process API",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register Users",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;register-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@experienceAPI"
    },
    {
      "line": 4,
      "name": "@L1"
    },
    {
      "line": 4,
      "name": "@RegisterUser"
    },
    {
      "line": 4,
      "name": "@Positive"
    },
    {
      "line": 4,
      "name": "@sprint9"
    },
    {
      "line": 4,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "all valid fields in request body  { \"username\": \"\u003cusername\u003e\"  , \"phoneNo\": \"\u003cphoneNo\u003e\" , \"email\": \"\u003cemail\u003e\" , \"password\": \"\u003cpassword\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "extract sessionId",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;register-users;",
  "rows": [
    {
      "cells": [
        "username",
        "phoneNo",
        "email",
        "password",
        "Status"
      ],
      "line": 13,
      "id": "sanity-tests-including-experience,-system-and-process-api;register-users;;1"
    },
    {
      "cells": [
        "dynamicUsername",
        "+919003611976",
        "shiva.palaniappan@allica.co.uk",
        "Allica123$",
        "201"
      ],
      "line": 14,
      "id": "sanity-tests-including-experience,-system-and-process-api;register-users;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Register Users",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;register-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Positive"
    },
    {
      "line": 4,
      "name": "@sprint9"
    },
    {
      "line": 4,
      "name": "@experienceAPI"
    },
    {
      "line": 4,
      "name": "@L1"
    },
    {
      "line": 4,
      "name": "@UserScenario"
    },
    {
      "line": 4,
      "name": "@RegisterUser"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "all valid fields in request body  { \"username\": \"dynamicUsername\"  , \"phoneNo\": \"+919003611976\" , \"email\": \"shiva.palaniappan@allica.co.uk\" , \"password\": \"Allica123$\" }",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is 201",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "extract sessionId",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 91553873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 797867883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " { \"username\": \"dynamicUsername\"  , \"phoneNo\": \"+919003611976\" , \"email\": \"shiva.palaniappan@allica.co.uk\" , \"password\": \"Allica123$\" }",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 6834115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 10012684053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 42088841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sessionId",
      "offset": 8
    }
  ],
  "location": "APIStepDefinitions.extract_param(String)"
});
formatter.result({
  "duration": 408912555,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Login Ping",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;login-ping",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@experienceAPI"
    },
    {
      "line": 16,
      "name": "@L1"
    },
    {
      "line": 16,
      "name": "@LoginPing"
    },
    {
      "line": 16,
      "name": "@Positive"
    },
    {
      "line": 16,
      "name": "@sprint9"
    },
    {
      "line": 16,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users/{username}/login",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "a mandatory valid URI param username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "all valid fields in request body  { \"password\": \"\u003cpassword\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;login-ping;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Status"
      ],
      "line": 25,
      "id": "sanity-tests-including-experience,-system-and-process-api;login-ping;;1"
    },
    {
      "cells": [
        "APIUSER17",
        "Allica123$",
        "201"
      ],
      "line": 26,
      "id": "sanity-tests-including-experience,-system-and-process-api;login-ping;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login Ping",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;login-ping;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Positive"
    },
    {
      "line": 16,
      "name": "@sprint9"
    },
    {
      "line": 16,
      "name": "@experienceAPI"
    },
    {
      "line": 16,
      "name": "@L1"
    },
    {
      "line": 16,
      "name": "@UserScenario"
    },
    {
      "line": 16,
      "name": "@LoginPing"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users/{username}/login",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "a mandatory valid URI param username as APIUSER17",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "all valid fields in request body  { \"password\": \"Allica123$\" }",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the status code is 201",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users/{username}/login",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 1024091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 3460013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 28
    },
    {
      "val": "APIUSER17",
      "offset": 40
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 8282059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " { \"password\": \"Allica123$\" }",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 502542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 356584707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 2613446,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Send OTP",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;send-otp",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@experienceAPI"
    },
    {
      "line": 28,
      "name": "@L1"
    },
    {
      "line": 28,
      "name": "@SendOTP"
    },
    {
      "line": 28,
      "name": "@Positive"
    },
    {
      "line": 28,
      "name": "@sprint9"
    },
    {
      "line": 28,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/devices/{sessionIdVar}/otp",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a mandatory valid URI param sessionIdVar as \u003csessionIdVar\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "all valid fields in request body  { \"otp\": \"\u003cotp\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;send-otp;",
  "rows": [
    {
      "cells": [
        "sessionIdVar",
        "otp",
        "Status"
      ],
      "line": 37,
      "id": "sanity-tests-including-experience,-system-and-process-api;send-otp;;1"
    },
    {
      "cells": [
        "",
        "410030",
        "201"
      ],
      "line": 38,
      "id": "sanity-tests-including-experience,-system-and-process-api;send-otp;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Send OTP",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;send-otp;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@Positive"
    },
    {
      "line": 28,
      "name": "@sprint9"
    },
    {
      "line": 28,
      "name": "@experienceAPI"
    },
    {
      "line": 28,
      "name": "@L1"
    },
    {
      "line": 28,
      "name": "@SendOTP"
    },
    {
      "line": 28,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/devices/{sessionIdVar}/otp",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a mandatory valid URI param sessionIdVar as ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "all valid fields in request body  { \"otp\": \"410030\" }",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the status code is 201",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/devices/{sessionIdVar}/otp",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 1002803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 1905250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sessionIdVar",
      "offset": 28
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 793728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " { \"otp\": \"410030\" }",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 304110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 217220920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 16447035,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c404\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.verify_status_code(APIStepDefinitions.java:56)\r\n\tat ✽.Then the status code is 201(Sanity.feature:35)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@experienceAPI"
    },
    {
      "line": 40,
      "name": "@L1"
    },
    {
      "line": 40,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 40,
      "name": "@Positive"
    },
    {
      "line": 40,
      "name": "@sprint6"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "a mandatory valid URI param customerID as \u003ccustomerID\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;",
  "rows": [
    {
      "cells": [
        "customerID",
        "Status"
      ],
      "line": 48,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;1"
    },
    {
      "cells": [
        "1003001",
        "200"
      ],
      "line": 49,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Positive"
    },
    {
      "line": 40,
      "name": "@experienceAPI"
    },
    {
      "line": 40,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 40,
      "name": "@sprint6"
    },
    {
      "line": 40,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "a mandatory valid URI param customerID as 1003001",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 1528914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 3071132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerID",
      "offset": 28
    },
    {
      "val": "1003001",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 459966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "managerDetails",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 17841039357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 7980229,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "ValidateIPAddress",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;validateipaddress",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@experienceAPI"
    },
    {
      "line": 52,
      "name": "@L1"
    },
    {
      "line": 52,
      "name": "@ValidateIPAddress"
    },
    {
      "line": 52,
      "name": "@Positive"
    },
    {
      "line": 52,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/validate/fraud/device",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "all valid fields in request body  {  \"applicationType\" : \"\u003capplicationType\u003e\",  \"blackBoxId\" : \"\u003cblackBoxId\u003e\",  \"ipAddress\" : \"\u003cipAddress\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I request for creation of ValidateIPAddress",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;validateipaddress;",
  "rows": [
    {
      "cells": [
        "applicationType",
        "blackBoxId",
        "ipAddress",
        "Status"
      ],
      "line": 60,
      "id": "sanity-tests-including-experience,-system-and-process-api;validateipaddress;;1"
    },
    {
      "cells": [
        "DEPOSITS",
        "1234",
        "81.178.135.98",
        "200"
      ],
      "line": 61,
      "id": "sanity-tests-including-experience,-system-and-process-api;validateipaddress;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 61,
  "name": "ValidateIPAddress",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;validateipaddress;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@Positive"
    },
    {
      "line": 52,
      "name": "@sprint9"
    },
    {
      "line": 52,
      "name": "@experienceAPI"
    },
    {
      "line": 52,
      "name": "@L1"
    },
    {
      "line": 52,
      "name": "@ValidateIPAddress"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/validate/fraud/device",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "all valid fields in request body  {  \"applicationType\" : \"DEPOSITS\",  \"blackBoxId\" : \"1234\",  \"ipAddress\" : \"81.178.135.98\" }",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I request for creation of ValidateIPAddress",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the status code is 200",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/validate/fraud/device",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 4386029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 3779329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " {  \"applicationType\" : \"DEPOSITS\",  \"blackBoxId\" : \"1234\",  \"ipAddress\" : \"81.178.135.98\" }",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 707816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ValidateIPAddress",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 362555149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 5019718,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "T\u0026C and FSCS Consent Detail to FMS",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;t\u0026c-and-fscs-consent-detail-to-fms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@experienceAPI"
    },
    {
      "line": 63,
      "name": "@L1"
    },
    {
      "line": 63,
      "name": "@T\u0026C"
    },
    {
      "line": 63,
      "name": "@Positive"
    },
    {
      "line": 63,
      "name": "@sprint7"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/applications/{applicationefNo}/consents",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "a mandatory valid URI param applicationefNo as 00000093000003",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "all valid fields in request body  { \"applicationType\" : \"\u003capplicationType\u003e\", \"documentType\" : \"\u003cdocumentType\u003e\", \"documentVersion\" :  \"\u003cdocumentVersion\u003e\"}",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I request for creation of T\u0026C and FSCS Consent Detail to FMS",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;t\u0026c-and-fscs-consent-detail-to-fms;",
  "rows": [
    {
      "cells": [
        "applicationType",
        "documentType",
        "documentVersion",
        "Status"
      ],
      "line": 72,
      "id": "sanity-tests-including-experience,-system-and-process-api;t\u0026c-and-fscs-consent-detail-to-fms;;1"
    },
    {
      "cells": [
        "DEPOSITS",
        "FSCS",
        "0.1",
        "200"
      ],
      "line": 73,
      "id": "sanity-tests-including-experience,-system-and-process-api;t\u0026c-and-fscs-consent-detail-to-fms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 73,
  "name": "T\u0026C and FSCS Consent Detail to FMS",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;t\u0026c-and-fscs-consent-detail-to-fms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@Positive"
    },
    {
      "line": 63,
      "name": "@experienceAPI"
    },
    {
      "line": 63,
      "name": "@sprint7"
    },
    {
      "line": 63,
      "name": "@L1"
    },
    {
      "line": 63,
      "name": "@T\u0026C"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/applications/{applicationefNo}/consents",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "a mandatory valid URI param applicationefNo as 00000093000003",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "all valid fields in request body  { \"applicationType\" : \"DEPOSITS\", \"documentType\" : \"FSCS\", \"documentVersion\" :  \"0.1\"}",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I request for creation of T\u0026C and FSCS Consent Detail to FMS",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the status code is 200",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/applications/{applicationefNo}/consents",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 2329863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 3677832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applicationefNo",
      "offset": 28
    },
    {
      "val": "00000093000003",
      "offset": 47
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 1108102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " { \"applicationType\" : \"DEPOSITS\", \"documentType\" : \"FSCS\", \"documentVersion\" :  \"0.1\"}",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 420052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T\u0026C and FSCS Consent Detail to FMS",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 7400847555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1691993,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@experienceAPI"
    },
    {
      "line": 75,
      "name": "@L1"
    },
    {
      "line": 75,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 75,
      "name": "@Positive"
    },
    {
      "line": 75,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "non-mandatory valid query params roles as \u003croles\u003e and applyBusinessRules as boolean \u003capplyBusinessRule",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;",
  "rows": [
    {
      "cells": [
        "roles",
        "applyBusinessRules",
        "customerID",
        "Status"
      ],
      "line": 84,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;1"
    },
    {
      "cells": [
        "Director",
        "false",
        "1003001",
        "200"
      ],
      "line": 85,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 85,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@Positive"
    },
    {
      "line": 75,
      "name": "@sprint9"
    },
    {
      "line": 75,
      "name": "@experienceAPI"
    },
    {
      "line": 75,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 75,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "non-mandatory valid query params roles as Director and applyBusinessRules as boolean \u003capplyBusinessRule",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the status code is 200",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 3224327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 4110048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerID",
      "offset": 28
    },
    {
      "val": "1003001",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 872036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "roles",
      "offset": 33
    },
    {
      "val": "Director",
      "offset": 42
    },
    {
      "val": "applyBusinessRules",
      "offset": 55
    },
    {
      "val": "\u003capplyBusinessRule",
      "offset": 85
    }
  ],
  "location": "APIStepDefinitions.nonmandatory_valid_query_params_bool(String,String,String,String)"
});
formatter.result({
  "duration": 13121591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "managerDetails",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 2955628432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 7416105,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 90,
  "name": "Create Time Deposit Application",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;create-time-deposit-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@experienceAPI"
    },
    {
      "line": 89,
      "name": "@L1"
    },
    {
      "line": 89,
      "name": "@CreateTimeDepositApplication"
    },
    {
      "line": 89,
      "name": "@Positive"
    },
    {
      "line": 89,
      "name": "@sprint7"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "all valid fields in request body { \"customerId\": \"\u003ccustomerId\u003e\" , \"productCode\": \"\u003cproductCode\u003e\" ,\"principalAmount\": \u003cprincipalAmount\u003e , \"currencyISOCode\": \u003ccurrencyISOCode\u003e ,\"periodNo\": \u003cperiodNo\u003e ,\"periodType\": \"\u003cperiodType\u003e\" , \"sourceOfFunds\": {   \"id\": \"\u003cid\u003e\" ,  \"description\" : \"\u003cdescription\u003e\" }}",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I request for creation of Time Deposit Application",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "extract applicationRefNo",
  "keyword": "And "
});
formatter.examples({
  "line": 97,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;create-time-deposit-application;",
  "rows": [
    {
      "cells": [
        "customerId",
        "productCode",
        "principalAmount",
        "currencyISOCode",
        "periodNo",
        "periodType",
        "id",
        "description",
        "Status"
      ],
      "line": 98,
      "id": "sanity-tests-including-experience,-system-and-process-api;create-time-deposit-application;;1"
    },
    {
      "cells": [
        "1003010",
        "TD001",
        "10045",
        "826",
        "3",
        "Y",
        "12345",
        "description",
        "200"
      ],
      "line": 99,
      "id": "sanity-tests-including-experience,-system-and-process-api;create-time-deposit-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 99,
  "name": "Create Time Deposit Application",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;create-time-deposit-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@Positive"
    },
    {
      "line": 89,
      "name": "@experienceAPI"
    },
    {
      "line": 89,
      "name": "@sprint7"
    },
    {
      "line": 89,
      "name": "@L1"
    },
    {
      "line": 89,
      "name": "@CreateTimeDepositApplication"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "all valid fields in request body { \"customerId\": \"1003010\" , \"productCode\": \"TD001\" ,\"principalAmount\": 10045 , \"currencyISOCode\": 826 ,\"periodNo\": 3 ,\"periodType\": \"Y\" , \"sourceOfFunds\": {   \"id\": \"12345\" ,  \"description\" : \"description\" }}",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I request for creation of Time Deposit Application",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "the status code is 200",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "extract applicationRefNo",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 4065953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 2378141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{ \"customerId\": \"1003010\" , \"productCode\": \"TD001\" ,\"principalAmount\": 10045 , \"currencyISOCode\": 826 ,\"periodNo\": 3 ,\"periodType\": \"Y\" , \"sourceOfFunds\": {   \"id\": \"12345\" ,  \"description\" : \"description\" }}",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 411309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Time Deposit Application",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 6545262991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 7381513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applicationRefNo",
      "offset": 8
    }
  ],
  "location": "APIStepDefinitions.extract_param(String)"
});
formatter.result({
  "duration": 30973616,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@experienceAPI"
    },
    {
      "line": 102,
      "name": "@L1"
    },
    {
      "line": 102,
      "name": "@GetTimeDepositApplication"
    },
    {
      "line": 102,
      "name": "@Positive"
    },
    {
      "line": 102,
      "name": "@sprint6"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "a mandatory valid URI param applicationRefNo as \u003capplicationRefNo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I request for retrieval of TimeDepositApplication",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;",
  "rows": [
    {
      "cells": [
        "applicationRefNo",
        "Status"
      ],
      "line": 110,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;1"
    },
    {
      "cells": [
        "00001793000003",
        "200"
      ],
      "line": 111,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 111,
  "name": "This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@GetTimeDepositApplication"
    },
    {
      "line": 102,
      "name": "@Positive"
    },
    {
      "line": 102,
      "name": "@experienceAPI"
    },
    {
      "line": 102,
      "name": "@sprint6"
    },
    {
      "line": 102,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "a mandatory valid URI param applicationRefNo as 00001793000003",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I request for retrieval of TimeDepositApplication",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 2207460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 1779044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applicationRefNo",
      "offset": 28
    },
    {
      "val": "00001793000003",
      "offset": 48
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 746971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TimeDepositApplication",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 3025590867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 2317320,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 114,
  "name": "This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 113,
      "name": "@experienceAPI"
    },
    {
      "line": 113,
      "name": "@L1"
    },
    {
      "line": 113,
      "name": "@GetTimeDepositAccountDetails"
    },
    {
      "line": 113,
      "name": "@Positive"
    },
    {
      "line": 113,
      "name": "@sprint8"
    }
  ]
});
formatter.step({
  "line": 115,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "mandatory valid URI params applicationRefNo as 00001793000003 and accountId as \u003caccountId\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I request for retrieval of TimeDepositAccountDetails",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;",
  "rows": [
    {
      "cells": [
        "applicationRefNo",
        "accountId",
        "Status"
      ],
      "line": 121,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;1"
    },
    {
      "cells": [
        "00001793000003",
        "97537626",
        "200"
      ],
      "line": 122,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 122,
  "name": "This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 113,
      "name": "@sprint8"
    },
    {
      "line": 113,
      "name": "@Positive"
    },
    {
      "line": 113,
      "name": "@experienceAPI"
    },
    {
      "line": 113,
      "name": "@L1"
    },
    {
      "line": 113,
      "name": "@GetTimeDepositAccountDetails"
    }
  ]
});
formatter.step({
  "line": 115,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "mandatory valid URI params applicationRefNo as 00001793000003 and accountId as 97537626",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I request for retrieval of TimeDepositAccountDetails",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the status code is 200",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 2216583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 5061913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applicationRefNo",
      "offset": 27
    },
    {
      "val": "00001793000003",
      "offset": 47
    },
    {
      "val": "accountId",
      "offset": 66
    },
    {
      "val": "97537626",
      "offset": 79
    }
  ],
  "location": "APIStepDefinitions.mandatory_valid_URI_params(String,String,String,String)"
});
formatter.result({
  "duration": 1837585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TimeDepositAccountDetails",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 3041127853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 3432263,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e doesn\u0027t match actual status code \u003c404\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.verify_status_code(APIStepDefinitions.java:56)\r\n\tat ✽.Then the status code is 200(Sanity.feature:119)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 125,
  "name": "To get countries configured in core banking system",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;to-get-countries-configured-in-core-banking-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@experienceAPI"
    },
    {
      "line": 124,
      "name": "@L1"
    },
    {
      "line": 124,
      "name": "@GetCountryList"
    },
    {
      "line": 124,
      "name": "@Positive"
    },
    {
      "line": 124,
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/countries",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "a mandatory valid query param language as \u003clanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I request for retrieval of Countryist",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 131,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;to-get-countries-configured-in-core-banking-system;",
  "rows": [
    {
      "cells": [
        "language",
        "Status"
      ],
      "line": 132,
      "id": "sanity-tests-including-experience,-system-and-process-api;to-get-countries-configured-in-core-banking-system;;1"
    },
    {
      "cells": [
        "En",
        "200"
      ],
      "line": 133,
      "id": "sanity-tests-including-experience,-system-and-process-api;to-get-countries-configured-in-core-banking-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 133,
  "name": "To get countries configured in core banking system",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;to-get-countries-configured-in-core-banking-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@Positive"
    },
    {
      "line": 124,
      "name": "@experienceAPI"
    },
    {
      "line": 124,
      "name": "@L1"
    },
    {
      "line": 124,
      "name": "@sprint1"
    },
    {
      "line": 124,
      "name": "@GetCountryList"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/countries",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "a mandatory valid query param language as En",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I request for retrieval of Countryist",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/countries",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 3346732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 8
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 5711568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "language",
      "offset": 30
    },
    {
      "val": "En",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_query_param(String,String)"
});
formatter.result({
  "duration": 415490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Countryist",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 2855250423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 49464652,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 136,
  "name": "I want to validate CompanyName",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;i-want-to-validate-companyname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@experienceAPI"
    },
    {
      "line": 135,
      "name": "@L1"
    },
    {
      "line": 135,
      "name": "@D\u0026B"
    },
    {
      "line": 135,
      "name": "@Positive"
    },
    {
      "line": 135,
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "line": 137,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/companies",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "a mandatory valid query param companyName as \u003ccompanyName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I request for retrieval of companyDetails",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "companyName",
        "ALLICA LIMITED"
      ],
      "line": 143
    },
    {
      "cells": [
        "companyID",
        "217364896"
      ],
      "line": 144
    },
    {
      "cells": [
        "registrationNumber",
        "07706156"
      ],
      "line": 145
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 146,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;i-want-to-validate-companyname;",
  "rows": [
    {
      "cells": [
        "companyName",
        "Status"
      ],
      "line": 147,
      "id": "sanity-tests-including-experience,-system-and-process-api;i-want-to-validate-companyname;;1"
    },
    {
      "cells": [
        "ALLICA",
        "200"
      ],
      "line": 148,
      "id": "sanity-tests-including-experience,-system-and-process-api;i-want-to-validate-companyname;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 148,
  "name": "I want to validate CompanyName",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;i-want-to-validate-companyname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@Positive"
    },
    {
      "line": 135,
      "name": "@experienceAPI"
    },
    {
      "line": 135,
      "name": "@L1"
    },
    {
      "line": 135,
      "name": "@sprint1"
    },
    {
      "line": 135,
      "name": "@D\u0026B"
    }
  ]
});
formatter.step({
  "line": 137,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/companies",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "a mandatory valid query param companyName as ALLICA",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I request for retrieval of companyDetails",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "companyName",
        "ALLICA LIMITED"
      ],
      "line": 143
    },
    {
      "cells": [
        "companyID",
        "217364896"
      ],
      "line": 144
    },
    {
      "cells": [
        "registrationNumber",
        "07706156"
      ],
      "line": 145
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/companies",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 2065668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 8
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 1135471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName",
      "offset": 30
    },
    {
      "val": "ALLICA",
      "offset": 45
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_query_param(String,String)"
});
formatter.result({
  "duration": 187028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyDetails",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 877688429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1796151,
  "status": "passed"
});
formatter.match({
  "location": "APIStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 131704393,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 151,
  "name": "This API method is used to create list of tax information of a customer into the core banking system",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 150,
      "name": "@experienceAPI"
    },
    {
      "line": 150,
      "name": "@L1"
    },
    {
      "line": 150,
      "name": "@SaveTaxInfoToFMS"
    },
    {
      "line": 150,
      "name": "@Positive"
    },
    {
      "line": 150,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerId}/taxInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "a mandatory valid URI param customerId as \u003ccustomerId\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "all valid fields in request body [  { \"nationalInsuranceNo\": \"\u003cnationalInsuranceNo\u003e\", \"countryISOCode\": \u003ccountryISOCode\u003e , \"taxReferenceNo\": \"\u003ctaxReferenceNo\u003e\"  }    ]",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I request for creation of TaxInfoToFMS",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 158,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;",
  "rows": [
    {
      "cells": [
        "customerId",
        "nationalInsuranceNo",
        "countryISOCode",
        "taxReferenceNo",
        "Status"
      ],
      "line": 159,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;1"
    },
    {
      "cells": [
        "1003009",
        "QQ1206C",
        "826",
        "11191314",
        "200"
      ],
      "line": 160,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 160,
  "name": "This API method is used to create list of tax information of a customer into the core banking system",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 150,
      "name": "@Positive"
    },
    {
      "line": 150,
      "name": "@sprint9"
    },
    {
      "line": 150,
      "name": "@experienceAPI"
    },
    {
      "line": 150,
      "name": "@L1"
    },
    {
      "line": 150,
      "name": "@SaveTaxInfoToFMS"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerId}/taxInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "a mandatory valid URI param customerId as 1003009",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "all valid fields in request body [  { \"nationalInsuranceNo\": \"QQ1206C\", \"countryISOCode\": 826 , \"taxReferenceNo\": \"11191314\"  }    ]",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I request for creation of TaxInfoToFMS",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "the status code is 200",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerId}/taxInfo",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 1958850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Experience",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 1497362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerId",
      "offset": 28
    },
    {
      "val": "1003009",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 413590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[  { \"nationalInsuranceNo\": \"QQ1206C\", \"countryISOCode\": 826 , \"taxReferenceNo\": \"11191314\"  }    ]",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 328819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaxInfoToFMS",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 3277949431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 4539984,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e doesn\u0027t match actual status code \u003c500\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.verify_status_code(APIStepDefinitions.java:56)\r\n\tat ✽.Then the status code is 200(Sanity.feature:157)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 174,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@systemAPI"
    },
    {
      "line": 173,
      "name": "@L1"
    },
    {
      "line": 173,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 173,
      "name": "@Positive"
    },
    {
      "line": 173,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 175,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "non-mandatory valid query params roles as Director and applyBusinessRules as boolean false",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 181,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 182,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 183,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 183,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@Positive"
    },
    {
      "line": 173,
      "name": "@sprint9"
    },
    {
      "line": 173,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 173,
      "name": "@systemAPI"
    },
    {
      "line": 173,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 175,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "non-mandatory valid query params roles as Director and applyBusinessRules as boolean false",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 299549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "System",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 2205178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerID",
      "offset": 28
    },
    {
      "val": "1003001",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 803231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "roles",
      "offset": 33
    },
    {
      "val": "Director",
      "offset": 42
    },
    {
      "val": "applyBusinessRules",
      "offset": 55
    },
    {
      "val": "false",
      "offset": 85
    }
  ],
  "location": "APIStepDefinitions.nonmandatory_valid_query_params_bool(String,String,String,String)"
});
formatter.result({
  "duration": 807412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "managerDetails",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 21026660954,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.security.ssl.SSLSocketImpl.connect(Unknown Source)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:542)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:412)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1434)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1221)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_retrieval_of_details(APIStepDefinitions.java:104)\r\n\tat ✽.When I request for retrieval of managerDetails(Sanity.feature:179)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 186,
  "name": "This API method is used to retrieve the Time Deposit/Savings product details based on a productCode and currency ISO Code",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-time-deposit/savings-product-details-based-on-a-productcode-and-currency-iso-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 185,
      "name": "@systemAPI"
    },
    {
      "line": 185,
      "name": "@L1"
    },
    {
      "line": 185,
      "name": "@GetTimeDepositProductsInfo"
    },
    {
      "line": 185,
      "name": "@Positive"
    },
    {
      "line": 185,
      "name": "@sprint6"
    }
  ]
});
formatter.step({
  "line": 187,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/products/{productCode}/{currencyISOCode}",
  "keyword": "Given "
});
formatter.step({
  "line": 188,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "mandatory valid URI params productCode as TD001 and currencyISOCode as 826",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I request for retrieval of TimeDepositProductsInfo",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 192,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-time-deposit/savings-product-details-based-on-a-productcode-and-currency-iso-code;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 193,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-time-deposit/savings-product-details-based-on-a-productcode-and-currency-iso-code;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 194,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-time-deposit/savings-product-details-based-on-a-productcode-and-currency-iso-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 194,
  "name": "This API method is used to retrieve the Time Deposit/Savings product details based on a productCode and currency ISO Code",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-time-deposit/savings-product-details-based-on-a-productcode-and-currency-iso-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 185,
      "name": "@Positive"
    },
    {
      "line": 185,
      "name": "@sprint6"
    },
    {
      "line": 185,
      "name": "@systemAPI"
    },
    {
      "line": 185,
      "name": "@GetTimeDepositProductsInfo"
    },
    {
      "line": 185,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 187,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/products/{productCode}/{currencyISOCode}",
  "keyword": "Given "
});
formatter.step({
  "line": 188,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "mandatory valid URI params productCode as TD001 and currencyISOCode as 826",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I request for retrieval of TimeDepositProductsInfo",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/products/{productCode}/{currencyISOCode}",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 348586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "System",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 8265713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "productCode",
      "offset": 27
    },
    {
      "val": "TD001",
      "offset": 42
    },
    {
      "val": "currencyISOCode",
      "offset": 52
    },
    {
      "val": "826",
      "offset": 71
    }
  ],
  "location": "APIStepDefinitions.mandatory_valid_URI_params(String,String,String,String)"
});
formatter.result({
  "duration": 1741791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TimeDepositProductsInfo",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 21024038004,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.security.ssl.SSLSocketImpl.connect(Unknown Source)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:542)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:412)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1434)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1221)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_retrieval_of_details(APIStepDefinitions.java:104)\r\n\tat ✽.When I request for retrieval of TimeDepositProductsInfo(Sanity.feature:190)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 198,
  "name": "This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 197,
      "name": "@systemAPI"
    },
    {
      "line": 197,
      "name": "@L1"
    },
    {
      "line": 197,
      "name": "@GetTimeDepositApplication"
    },
    {
      "line": 197,
      "name": "@Positive"
    },
    {
      "line": 197,
      "name": "@sprint6"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "a mandatory valid URI param applicationRefNo as 00001793000003",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I request for retrieval of TimeDepositApplication",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 204,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 205,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 206,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 206,
  "name": "This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 197,
      "name": "@GetTimeDepositApplication"
    },
    {
      "line": 197,
      "name": "@Positive"
    },
    {
      "line": 197,
      "name": "@sprint6"
    },
    {
      "line": 197,
      "name": "@systemAPI"
    },
    {
      "line": 197,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "a mandatory valid URI param applicationRefNo as 00001793000003",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I request for retrieval of TimeDepositApplication",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 2212781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "System",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 12310378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applicationRefNo",
      "offset": 28
    },
    {
      "val": "00001793000003",
      "offset": 48
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 814255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TimeDepositApplication",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 21044596990,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.security.ssl.SSLSocketImpl.connect(Unknown Source)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:542)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:412)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1434)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1221)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_retrieval_of_details(APIStepDefinitions.java:104)\r\n\tat ✽.When I request for retrieval of TimeDepositApplication(Sanity.feature:202)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 209,
  "name": "This API method is used to create list of tax information of a customer into the core banking system",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@systemAPI"
    },
    {
      "line": 208,
      "name": "@L1"
    },
    {
      "line": 208,
      "name": "@SaveTaxInfoToFMS"
    },
    {
      "line": 208,
      "name": "@Positive"
    },
    {
      "line": 208,
      "name": "@sprint8"
    },
    {
      "line": 208,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerId}/taxInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 211,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "a mandatory valid URI param customerId as 1003009",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "all valid fields in request body [  { \"nationalInsuranceNo\": \"QQ123806C\", \"countryISOCode\": 826 , \"taxReferenceNo\": \"11191314\"  }    ]",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I request for creation of TaxInfoToFMS",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 216,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 217,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 218,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 218,
  "name": "This API method is used to create list of tax information of a customer into the core banking system",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@sprint8"
    },
    {
      "line": 208,
      "name": "@Positive"
    },
    {
      "line": 208,
      "name": "@systemAPI"
    },
    {
      "line": 208,
      "name": "@L1"
    },
    {
      "line": 208,
      "name": "@sanity"
    },
    {
      "line": 208,
      "name": "@SaveTaxInfoToFMS"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerId}/taxInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 211,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "a mandatory valid URI param customerId as 1003009",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "all valid fields in request body [  { \"nationalInsuranceNo\": \"QQ123806C\", \"countryISOCode\": 826 , \"taxReferenceNo\": \"11191314\"  }    ]",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I request for creation of TaxInfoToFMS",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerId}/taxInfo",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 619244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "System",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 5137940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerId",
      "offset": 28
    },
    {
      "val": "1003009",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 1069327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[  { \"nationalInsuranceNo\": \"QQ123806C\", \"countryISOCode\": 826 , \"taxReferenceNo\": \"11191314\"  }    ]",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 692611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaxInfoToFMS",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_creation_of_details(String)"
});
formatter.result({
  "duration": 21049584775,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.security.ssl.SSLSocketImpl.connect(Unknown Source)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:542)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:412)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1202)\r\n\tat sun.reflect.GeneratedMethodAccessor105.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.GeneratedMethodAccessor96.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.GeneratedMethodAccessor95.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:170)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_creation_of_details(APIStepDefinitions.java:118)\r\n\tat ✽.When I request for creation of TaxInfoToFMS(Sanity.feature:214)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 222,
  "name": "This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 221,
      "name": "@systemAPI"
    },
    {
      "line": 221,
      "name": "@L1"
    },
    {
      "line": 221,
      "name": "@GetTimeDepositAccountDetails"
    },
    {
      "line": 221,
      "name": "@Positive"
    },
    {
      "line": 221,
      "name": "@sprint8"
    }
  ]
});
formatter.step({
  "line": 223,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
  "keyword": "Given "
});
formatter.step({
  "line": 224,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "mandatory valid URI params applicationRefNo as 00001793000003 and accountId as 97537626",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I request for retrieval of TimeDepositAccountDetails",
  "keyword": "When "
});
formatter.step({
  "line": 227,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 228,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 229,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 230,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 230,
  "name": "This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 221,
      "name": "@sprint8"
    },
    {
      "line": 221,
      "name": "@Positive"
    },
    {
      "line": 221,
      "name": "@systemAPI"
    },
    {
      "line": 221,
      "name": "@L1"
    },
    {
      "line": 221,
      "name": "@GetTimeDepositAccountDetails"
    }
  ]
});
formatter.step({
  "line": 223,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
  "keyword": "Given "
});
formatter.step({
  "line": 224,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "mandatory valid URI params applicationRefNo as 00001793000003 and accountId as 97537626",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I request for retrieval of TimeDepositAccountDetails",
  "keyword": "When "
});
formatter.step({
  "line": 227,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 439819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "System",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 6293179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "applicationRefNo",
      "offset": 27
    },
    {
      "val": "00001793000003",
      "offset": 47
    },
    {
      "val": "accountId",
      "offset": 66
    },
    {
      "val": "97537626",
      "offset": 79
    }
  ],
  "location": "APIStepDefinitions.mandatory_valid_URI_params(String,String,String,String)"
});
formatter.result({
  "duration": 14753522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TimeDepositAccountDetails",
      "offset": 27
    }
  ],
  "location": "APIStepDefinitions.request_for_retrieval_of_details(String)"
});
formatter.result({
  "duration": 21035320870,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.security.ssl.SSLSocketImpl.connect(Unknown Source)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:542)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:412)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1434)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1221)\r\n\tat sun.reflect.GeneratedMethodAccessor105.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.GeneratedMethodAccessor96.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.GeneratedMethodAccessor95.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_retrieval_of_details(APIStepDefinitions.java:104)\r\n\tat ✽.When I request for retrieval of TimeDepositAccountDetails(Sanity.feature:226)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 234,
  "name": "This API is used to update the key managementdetails of a customer/company into the FMS System",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 233,
      "name": "@systemAPI"
    },
    {
      "line": 233,
      "name": "@L1"
    },
    {
      "line": 233,
      "name": "@UpdateKeyManagementDetails"
    },
    {
      "line": 233,
      "name": "@Positive"
    },
    {
      "line": 233,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 235,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 236,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "all valid fields in request body {    \"details\": [      {        \"seqNo\": 0,        \"title\": 0,        \"firstName\": \"updatefname\",        \"lastName\": \"updatelname\",        \"dateOfBirth\": \"2001-01-02\",        \"isLegalDirector\": 0,        \"jobTitle\": \"\",        \"currentShareholdingPercentage\": 0,        \"personalFundingAmount\": 0,        \"personalFundingLoanPercentage\": 0,        \"otherBusinessDevotionOver25\": 0,        \"otherBusinessDevotionDetails\": \"\",        \"offersPersonalGuarantee\": 0,        \"biography\": \"\",        \"managementTeamExpSummary\": \"\",        \"cvPath\": \"\",        \"roles\": [\"Director\",\"Shareholder\",\"UBO\",\"PSC\"]      }    ]  }",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I request for updation of KeyManagementDetails",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 241,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 242,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 243,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 243,
  "name": "This API is used to update the key managementdetails of a customer/company into the FMS System",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 233,
      "name": "@Positive"
    },
    {
      "line": 233,
      "name": "@sprint9"
    },
    {
      "line": 233,
      "name": "@systemAPI"
    },
    {
      "line": 233,
      "name": "@L1"
    },
    {
      "line": 233,
      "name": "@UpdateKeyManagementDetails"
    }
  ]
});
formatter.step({
  "line": 235,
  "name": "we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 236,
  "name": "all valid System headers",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "all valid fields in request body {    \"details\": [      {        \"seqNo\": 0,        \"title\": 0,        \"firstName\": \"updatefname\",        \"lastName\": \"updatelname\",        \"dateOfBirth\": \"2001-01-02\",        \"isLegalDirector\": 0,        \"jobTitle\": \"\",        \"currentShareholdingPercentage\": 0,        \"personalFundingAmount\": 0,        \"personalFundingLoanPercentage\": 0,        \"otherBusinessDevotionOver25\": 0,        \"otherBusinessDevotionDetails\": \"\",        \"offersPersonalGuarantee\": 0,        \"biography\": \"\",        \"managementTeamExpSummary\": \"\",        \"cvPath\": \"\",        \"roles\": [\"Director\",\"Shareholder\",\"UBO\",\"PSC\"]      }    ]  }",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I request for updation of KeyManagementDetails",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 316655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "System",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 2645758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerID",
      "offset": 28
    },
    {
      "val": "1003001",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 910430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{    \"details\": [      {        \"seqNo\": 0,        \"title\": 0,        \"firstName\": \"updatefname\",        \"lastName\": \"updatelname\",        \"dateOfBirth\": \"2001-01-02\",        \"isLegalDirector\": 0,        \"jobTitle\": \"\",        \"currentShareholdingPercentage\": 0,        \"personalFundingAmount\": 0,        \"personalFundingLoanPercentage\": 0,        \"otherBusinessDevotionOver25\": 0,        \"otherBusinessDevotionDetails\": \"\",        \"offersPersonalGuarantee\": 0,        \"biography\": \"\",        \"managementTeamExpSummary\": \"\",        \"cvPath\": \"\",        \"roles\": [\"Director\",\"Shareholder\",\"UBO\",\"PSC\"]      }    ]  }",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 665621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KeyManagementDetails",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_updation_of_details(String)"
});
formatter.result({
  "duration": 21058110503,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat sun.security.ssl.SSLSocketImpl.connect(Unknown Source)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:542)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:412)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1434)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1221)\r\n\tat sun.reflect.GeneratedMethodAccessor105.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.GeneratedMethodAccessor96.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.GeneratedMethodAccessor95.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.put(RequestSpecificationImpl.groovy:174)\r\n\tat io.restassured.internal.RequestSpecificationImpl.put(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_updation_of_details(APIStepDefinitions.java:111)\r\n\tat ✽.When I request for updation of KeyManagementDetails(Sanity.feature:239)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 247,
  "name": "This API is used to update the key managementdetails of a customer/company into the FMS System",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 246,
      "name": "@ProcessAPI"
    },
    {
      "line": 246,
      "name": "@L1"
    },
    {
      "line": 246,
      "name": "@UpdateKeyManagementDetails"
    },
    {
      "line": 246,
      "name": "@Positive"
    },
    {
      "line": 246,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 248,
  "name": "we have Endpoint https://\u003csys_ip_port\u003e/api/ab-p-customers-api/v1/deposits/companies/customers",
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "all valid Process headers",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "all valid fields in request body {    \"details\": [      {        \"seqNo\": 0,        \"title\": 0,        \"firstName\": \"updatefname\",        \"lastName\": \"updatelname\",        \"dateOfBirth\": \"2001-01-02\",        \"isLegalDirector\": 0,        \"jobTitle\": \"\",        \"currentShareholdingPercentage\": 0,        \"personalFundingAmount\": 0,        \"personalFundingLoanPercentage\": 0,        \"otherBusinessDevotionOver25\": 0,        \"otherBusinessDevotionDetails\": \"\",        \"offersPersonalGuarantee\": 0,        \"biography\": \"\",        \"managementTeamExpSummary\": \"\",        \"cvPath\": \"\",        \"roles\": [\"Director\",\"Shareholder\",\"UBO\",\"PSC\"]      }    ]  }",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I request for updation of KeyManagementDetails",
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 254,
  "name": "",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;",
  "rows": [
    {
      "cells": [
        "Status"
      ],
      "line": 255,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 256,
      "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 256,
  "name": "This API is used to update the key managementdetails of a customer/company into the FMS System",
  "description": "",
  "id": "sanity-tests-including-experience,-system-and-process-api;this-api-is-used-to-update-the-key-managementdetails-of-a-customer/company-into-the-fms-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 246,
      "name": "@Positive"
    },
    {
      "line": 246,
      "name": "@sprint9"
    },
    {
      "line": 246,
      "name": "@ProcessAPI"
    },
    {
      "line": 246,
      "name": "@L1"
    },
    {
      "line": 246,
      "name": "@UpdateKeyManagementDetails"
    }
  ]
});
formatter.step({
  "line": 248,
  "name": "we have Endpoint https://\u003csys_ip_port\u003e/api/ab-p-customers-api/v1/deposits/companies/customers",
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "all valid Process headers",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "all valid fields in request body {    \"details\": [      {        \"seqNo\": 0,        \"title\": 0,        \"firstName\": \"updatefname\",        \"lastName\": \"updatelname\",        \"dateOfBirth\": \"2001-01-02\",        \"isLegalDirector\": 0,        \"jobTitle\": \"\",        \"currentShareholdingPercentage\": 0,        \"personalFundingAmount\": 0,        \"personalFundingLoanPercentage\": 0,        \"otherBusinessDevotionOver25\": 0,        \"otherBusinessDevotionDetails\": \"\",        \"offersPersonalGuarantee\": 0,        \"biography\": \"\",        \"managementTeamExpSummary\": \"\",        \"cvPath\": \"\",        \"roles\": [\"Director\",\"Shareholder\",\"UBO\",\"PSC\"]      }    ]  }",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I request for updation of KeyManagementDetails",
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "the status code is 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://\u003csys_ip_port\u003e/api/ab-p-customers-api/v1/deposits/companies/customers",
      "offset": 17
    }
  ],
  "location": "APIStepDefinitions.we_have_endpoint(String)"
});
formatter.result({
  "duration": 2539319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 0
    },
    {
      "val": "Process",
      "offset": 10
    }
  ],
  "location": "APIStepDefinitions.valid_headers(String,String)"
});
formatter.result({
  "duration": 3012591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customerID",
      "offset": 28
    },
    {
      "val": "1003001",
      "offset": 42
    }
  ],
  "location": "APIStepDefinitions.a_mandatory_valid_URI_param(String,String)"
});
formatter.result({
  "duration": 662200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{    \"details\": [      {        \"seqNo\": 0,        \"title\": 0,        \"firstName\": \"updatefname\",        \"lastName\": \"updatelname\",        \"dateOfBirth\": \"2001-01-02\",        \"isLegalDirector\": 0,        \"jobTitle\": \"\",        \"currentShareholdingPercentage\": 0,        \"personalFundingAmount\": 0,        \"personalFundingLoanPercentage\": 0,        \"otherBusinessDevotionOver25\": 0,        \"otherBusinessDevotionDetails\": \"\",        \"offersPersonalGuarantee\": 0,        \"biography\": \"\",        \"managementTeamExpSummary\": \"\",        \"cvPath\": \"\",        \"roles\": [\"Director\",\"Shareholder\",\"UBO\",\"PSC\"]      }    ]  }",
      "offset": 33
    }
  ],
  "location": "APIStepDefinitions.fields_in_request_body(String)"
});
formatter.result({
  "duration": 408648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KeyManagementDetails",
      "offset": 26
    }
  ],
  "location": "APIStepDefinitions.request_for_updation_of_details(String)"
});
formatter.result({
  "duration": 2078973,
  "error_message": "java.net.MalformedURLException: For input string: \"8083\"\"\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat sun.reflect.GeneratedConstructorAccessor17.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.RequestSpecificationImpl.getTargetURI(RequestSpecificationImpl.groovy:1526)\r\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.partiallyApplyPathParams(RequestSpecificationImpl.groovy:1659)\r\n\tat sun.reflect.GeneratedMethodAccessor29.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.newFilterContext(RequestSpecificationImpl.groovy:1084)\r\n\tat sun.reflect.GeneratedMethodAccessor41.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1629)\r\n\tat sun.reflect.GeneratedMethodAccessor96.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.GeneratedMethodAccessor95.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.put(RequestSpecificationImpl.groovy:174)\r\n\tat io.restassured.internal.RequestSpecificationImpl.put(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_updation_of_details(APIStepDefinitions.java:111)\r\n\tat ✽.When I request for updation of KeyManagementDetails(Sanity.feature:252)\r\nCaused by: java.lang.NumberFormatException: For input string: \"8083\"\"\r\n\tat java.lang.NumberFormatException.forInputString(Unknown Source)\r\n\tat java.lang.Integer.parseInt(Unknown Source)\r\n\tat java.lang.Integer.parseInt(Unknown Source)\r\n\tat java.net.URLStreamHandler.parseURL(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat sun.reflect.GeneratedConstructorAccessor17.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.RequestSpecificationImpl.getTargetURI(RequestSpecificationImpl.groovy:1526)\r\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.partiallyApplyPathParams(RequestSpecificationImpl.groovy:1659)\r\n\tat sun.reflect.GeneratedMethodAccessor29.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.newFilterContext(RequestSpecificationImpl.groovy:1084)\r\n\tat sun.reflect.GeneratedMethodAccessor41.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1629)\r\n\tat sun.reflect.GeneratedMethodAccessor96.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.GeneratedMethodAccessor95.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.put(RequestSpecificationImpl.groovy:174)\r\n\tat io.restassured.internal.RequestSpecificationImpl.put(RequestSpecificationImpl.groovy)\r\n\tat com.alica.test.stepdefs.APIStepDefinitions.request_for_updation_of_details(APIStepDefinitions.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
});