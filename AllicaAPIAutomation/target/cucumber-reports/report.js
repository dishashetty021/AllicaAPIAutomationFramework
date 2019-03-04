$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExperienceAPI.feature");
formatter.feature({
  "line": 1,
  "name": "ExperienceAPIs (All cases)",
  "description": "",
  "id": "experienceapis-(all-cases)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Register Users",
  "description": "",
  "id": "experienceapis-(all-cases);register-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@experienceAPI"
    },
    {
      "line": 3,
      "name": "@L1"
    },
    {
      "line": 3,
      "name": "@RegisterUser"
    },
    {
      "line": 3,
      "name": "@Positive"
    },
    {
      "line": 3,
      "name": "@sprint9"
    },
    {
      "line": 3,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "all valid fields in request body  { \"username\": \"\u003cusername\u003e\"  , \"phoneNo\": \"\u003cphoneNo\u003e\" , \"email\": \"\u003cemail\u003e\" , \"password\": \"\u003cpassword\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "extract sessionId",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);register-users;",
  "rows": [
    {
      "cells": [
        "username",
        "phoneNo",
        "email",
        "password",
        "Status"
      ],
      "line": 12,
      "id": "experienceapis-(all-cases);register-users;;1"
    },
    {
      "cells": [
        "dynamicUsername",
        "+919003611976",
        "shiva.palaniappan@allica.co.uk",
        "Allica123$",
        "201"
      ],
      "line": 13,
      "id": "experienceapis-(all-cases);register-users;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Register Users",
  "description": "",
  "id": "experienceapis-(all-cases);register-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Positive"
    },
    {
      "line": 3,
      "name": "@sprint9"
    },
    {
      "line": 3,
      "name": "@experienceAPI"
    },
    {
      "line": 3,
      "name": "@L1"
    },
    {
      "line": 3,
      "name": "@UserScenario"
    },
    {
      "line": 3,
      "name": "@RegisterUser"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
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
  "line": 8,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the status code is 201",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
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
  "duration": 87915678,
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
  "duration": 436775442,
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
  "duration": 3932656,
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
  "duration": 8890570364,
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
  "duration": 21096943,
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
  "duration": 265680674,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Login Ping",
  "description": "",
  "id": "experienceapis-(all-cases);login-ping",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@experienceAPI"
    },
    {
      "line": 15,
      "name": "@L1"
    },
    {
      "line": 15,
      "name": "@LoginPing"
    },
    {
      "line": 15,
      "name": "@Positive"
    },
    {
      "line": 15,
      "name": "@sprint9"
    },
    {
      "line": 15,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users/{username}/login",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a mandatory valid URI param username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "all valid fields in request body  { \"password\": \"\u003cpassword\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);login-ping;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Status"
      ],
      "line": 24,
      "id": "experienceapis-(all-cases);login-ping;;1"
    },
    {
      "cells": [
        "APIUSER17",
        "Allica123$",
        "201"
      ],
      "line": 25,
      "id": "experienceapis-(all-cases);login-ping;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Login Ping",
  "description": "",
  "id": "experienceapis-(all-cases);login-ping;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Positive"
    },
    {
      "line": 15,
      "name": "@sprint9"
    },
    {
      "line": 15,
      "name": "@experienceAPI"
    },
    {
      "line": 15,
      "name": "@L1"
    },
    {
      "line": 15,
      "name": "@UserScenario"
    },
    {
      "line": 15,
      "name": "@LoginPing"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/users/{username}/login",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a mandatory valid URI param username as APIUSER17",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "all valid fields in request body  { \"password\": \"Allica123$\" }",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 22,
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
  "duration": 580831,
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
  "duration": 2029432,
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
  "duration": 3800918,
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
  "duration": 330609,
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
  "duration": 240799519,
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
  "duration": 1293280,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Send OTP",
  "description": "",
  "id": "experienceapis-(all-cases);send-otp",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@experienceAPI"
    },
    {
      "line": 27,
      "name": "@L1"
    },
    {
      "line": 27,
      "name": "@SendOTP"
    },
    {
      "line": 27,
      "name": "@Positive"
    },
    {
      "line": 27,
      "name": "@sprint9"
    },
    {
      "line": 27,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/devices/{sessionIdVar}/otp",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "a mandatory valid URI param sessionIdVar as \u003csessionIdVar\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "all valid fields in request body  { \"otp\": \"\u003cotp\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);send-otp;",
  "rows": [
    {
      "cells": [
        "sessionIdVar",
        "otp",
        "Status"
      ],
      "line": 36,
      "id": "experienceapis-(all-cases);send-otp;;1"
    },
    {
      "cells": [
        "",
        "410030",
        "201"
      ],
      "line": 37,
      "id": "experienceapis-(all-cases);send-otp;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Send OTP",
  "description": "",
  "id": "experienceapis-(all-cases);send-otp;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Positive"
    },
    {
      "line": 27,
      "name": "@sprint9"
    },
    {
      "line": 27,
      "name": "@experienceAPI"
    },
    {
      "line": 27,
      "name": "@L1"
    },
    {
      "line": 27,
      "name": "@SendOTP"
    },
    {
      "line": 27,
      "name": "@UserScenario"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/devices/{sessionIdVar}/otp",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "a mandatory valid URI param sessionIdVar as ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "all valid fields in request body  { \"otp\": \"410030\" }",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I request for creation of User",
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 313461,
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
  "duration": 1439152,
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
  "duration": 567112,
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
  "duration": 263287,
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
  "duration": 121281567,
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
  "duration": 5779990,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c404\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\n\tat com.alica.test.stepdefs.APIStepDefinitions.verify_status_code(APIStepDefinitions.java:56)\n\tat ✽.Then the status code is 201(ExperienceAPI.feature:34)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@experienceAPI"
    },
    {
      "line": 39,
      "name": "@L1"
    },
    {
      "line": 39,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 39,
      "name": "@Positive"
    },
    {
      "line": 39,
      "name": "@sprint6"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "a mandatory valid URI param customerID as \u003ccustomerID\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;",
  "rows": [
    {
      "cells": [
        "customerID",
        "Status"
      ],
      "line": 47,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;1"
    },
    {
      "cells": [
        "1003001",
        "200"
      ],
      "line": 48,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@Positive"
    },
    {
      "line": 39,
      "name": "@experienceAPI"
    },
    {
      "line": 39,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 39,
      "name": "@sprint6"
    },
    {
      "line": 39,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "a mandatory valid URI param customerID as 1003001",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 45,
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
  "duration": 322358,
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
  "duration": 1087419,
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
  "duration": 277384,
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
  "duration": 2853112577,
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
  "duration": 1150994,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "ValidateIPAddress",
  "description": "",
  "id": "experienceapis-(all-cases);validateipaddress",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@experienceAPI"
    },
    {
      "line": 51,
      "name": "@L1"
    },
    {
      "line": 51,
      "name": "@ValidateIPAddress"
    },
    {
      "line": 51,
      "name": "@Positive"
    },
    {
      "line": 51,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/validate/fraud/device",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "all valid fields in request body  {  \"applicationType\" : \"\u003capplicationType\u003e\",  \"blackBoxId\" : \"\u003cblackBoxId\u003e\",  \"ipAddress\" : \"\u003cipAddress\u003e\" }",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I request for creation of ValidateIPAddress",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);validateipaddress;",
  "rows": [
    {
      "cells": [
        "applicationType",
        "blackBoxId",
        "ipAddress",
        "Status"
      ],
      "line": 59,
      "id": "experienceapis-(all-cases);validateipaddress;;1"
    },
    {
      "cells": [
        "DEPOSITS",
        "1234",
        "81.178.135.98",
        "200"
      ],
      "line": 60,
      "id": "experienceapis-(all-cases);validateipaddress;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "ValidateIPAddress",
  "description": "",
  "id": "experienceapis-(all-cases);validateipaddress;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@Positive"
    },
    {
      "line": 51,
      "name": "@sprint9"
    },
    {
      "line": 51,
      "name": "@experienceAPI"
    },
    {
      "line": 51,
      "name": "@L1"
    },
    {
      "line": 51,
      "name": "@ValidateIPAddress"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/validate/fraud/device",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "all valid fields in request body  {  \"applicationType\" : \"DEPOSITS\",  \"blackBoxId\" : \"1234\",  \"ipAddress\" : \"81.178.135.98\" }",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I request for creation of ValidateIPAddress",
  "keyword": "When "
});
formatter.step({
  "line": 57,
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
  "duration": 306714,
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
  "duration": 1155847,
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
  "duration": 243529,
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
  "duration": 301417655,
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
  "duration": 601290,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "T\u0026C and FSCS Consent Detail to FMS",
  "description": "",
  "id": "experienceapis-(all-cases);t\u0026c-and-fscs-consent-detail-to-fms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@experienceAPI"
    },
    {
      "line": 62,
      "name": "@L1"
    },
    {
      "line": 62,
      "name": "@T\u0026C"
    },
    {
      "line": 62,
      "name": "@Positive"
    },
    {
      "line": 62,
      "name": "@sprint7"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/applications/{applicationefNo}/consents",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "a mandatory valid URI param applicationefNo as 00000093000003",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "all valid fields in request body  { \"applicationType\" : \"\u003capplicationType\u003e\", \"documentType\" : \"\u003cdocumentType\u003e\", \"documentVersion\" :  \"\u003cdocumentVersion\u003e\"}",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I request for creation of T\u0026C and FSCS Consent Detail to FMS",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);t\u0026c-and-fscs-consent-detail-to-fms;",
  "rows": [
    {
      "cells": [
        "applicationType",
        "documentType",
        "documentVersion",
        "Status"
      ],
      "line": 71,
      "id": "experienceapis-(all-cases);t\u0026c-and-fscs-consent-detail-to-fms;;1"
    },
    {
      "cells": [
        "DEPOSITS",
        "FSCS",
        "0.1",
        "200"
      ],
      "line": 72,
      "id": "experienceapis-(all-cases);t\u0026c-and-fscs-consent-detail-to-fms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "T\u0026C and FSCS Consent Detail to FMS",
  "description": "",
  "id": "experienceapis-(all-cases);t\u0026c-and-fscs-consent-detail-to-fms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@Positive"
    },
    {
      "line": 62,
      "name": "@experienceAPI"
    },
    {
      "line": 62,
      "name": "@sprint7"
    },
    {
      "line": 62,
      "name": "@L1"
    },
    {
      "line": 62,
      "name": "@T\u0026C"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/applications/{applicationefNo}/consents",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "a mandatory valid URI param applicationefNo as 00000093000003",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "all valid fields in request body  { \"applicationType\" : \"DEPOSITS\", \"documentType\" : \"FSCS\", \"documentVersion\" :  \"0.1\"}",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I request for creation of T\u0026C and FSCS Consent Detail to FMS",
  "keyword": "When "
});
formatter.step({
  "line": 69,
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
  "duration": 307172,
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
  "duration": 1180930,
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
  "duration": 468126,
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
  "duration": 178450,
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
  "duration": 2985219745,
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
  "duration": 590593,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@experienceAPI"
    },
    {
      "line": 74,
      "name": "@L1"
    },
    {
      "line": 74,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 74,
      "name": "@Positive"
    },
    {
      "line": 74,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "non-mandatory valid query params roles as \u003croles\u003e and applyBusinessRules as boolean \u003capplyBusinessRule",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;",
  "rows": [
    {
      "cells": [
        "roles",
        "applyBusinessRules",
        "customerID",
        "Status"
      ],
      "line": 83,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;1"
    },
    {
      "cells": [
        "Director",
        "false",
        "1003001",
        "200"
      ],
      "line": 84,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 84,
  "name": "This API method is used to retrieve the manager details of a business customer",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-manager-details-of-a-business-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@Positive"
    },
    {
      "line": 74,
      "name": "@sprint9"
    },
    {
      "line": 74,
      "name": "@experienceAPI"
    },
    {
      "line": 74,
      "name": "@GetKeyManagementDetails"
    },
    {
      "line": 74,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerID}/managers",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "a mandatory valid URI param customerID as 1003001",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "non-mandatory valid query params roles as Director and applyBusinessRules as boolean \u003capplyBusinessRule",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I request for retrieval of managerDetails",
  "keyword": "When "
});
formatter.step({
  "line": 81,
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
  "duration": 338039,
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
  "duration": 830479,
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
  "duration": 248198,
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
  "duration": 6209793,
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
  "duration": 3438758015,
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
  "duration": 1143464,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Create Time Deposit Application",
  "description": "",
  "id": "experienceapis-(all-cases);create-time-deposit-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@experienceAPI"
    },
    {
      "line": 88,
      "name": "@L1"
    },
    {
      "line": 88,
      "name": "@CreateTimeDepositApplication"
    },
    {
      "line": 88,
      "name": "@Positive"
    },
    {
      "line": 88,
      "name": "@sprint7"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "all valid fields in request body { \"customerId\": \"\u003ccustomerId\u003e\" , \"productCode\": \"\u003cproductCode\u003e\" ,\"principalAmount\": \u003cprincipalAmount\u003e , \"currencyISOCode\": \u003ccurrencyISOCode\u003e ,\"periodNo\": \u003cperiodNo\u003e ,\"periodType\": \"\u003cperiodType\u003e\" , \"sourceOfFunds\": {   \"id\": \"\u003cid\u003e\" ,  \"description\" : \"\u003cdescription\u003e\" }}",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I request for creation of Time Deposit Application",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "extract applicationRefNo",
  "keyword": "And "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);create-time-deposit-application;",
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
      "line": 97,
      "id": "experienceapis-(all-cases);create-time-deposit-application;;1"
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
      "line": 98,
      "id": "experienceapis-(all-cases);create-time-deposit-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 98,
  "name": "Create Time Deposit Application",
  "description": "",
  "id": "experienceapis-(all-cases);create-time-deposit-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@Positive"
    },
    {
      "line": 88,
      "name": "@experienceAPI"
    },
    {
      "line": 88,
      "name": "@sprint7"
    },
    {
      "line": 88,
      "name": "@L1"
    },
    {
      "line": 88,
      "name": "@CreateTimeDepositApplication"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 92,
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
  "line": 93,
  "name": "I request for creation of Time Deposit Application",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the status code is 200",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 95,
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
  "duration": 393139,
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
  "duration": 813939,
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
  "duration": 161691,
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
  "duration": 6340986734,
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
  "duration": 1468375,
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
  "duration": 5961491,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 102,
  "name": "This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@experienceAPI"
    },
    {
      "line": 101,
      "name": "@L1"
    },
    {
      "line": 101,
      "name": "@GetTimeDepositApplication"
    },
    {
      "line": 101,
      "name": "@Positive"
    },
    {
      "line": 101,
      "name": "@sprint6"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "a mandatory valid URI param applicationRefNo as \u003capplicationRefNo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I request for retrieval of TimeDepositApplication",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;",
  "rows": [
    {
      "cells": [
        "applicationRefNo",
        "Status"
      ],
      "line": 109,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;1"
    },
    {
      "cells": [
        "00001793000003",
        "200"
      ],
      "line": 110,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-get-the-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on-the-application-reference-number-retruned-during-the-creation-of-a-time-deposit-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 101,
      "name": "@GetTimeDepositApplication"
    },
    {
      "line": 101,
      "name": "@Positive"
    },
    {
      "line": 101,
      "name": "@experienceAPI"
    },
    {
      "line": 101,
      "name": "@sprint6"
    },
    {
      "line": 101,
      "name": "@L1"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "a mandatory valid URI param applicationRefNo as 00001793000003",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I request for retrieval of TimeDepositApplication",
  "keyword": "When "
});
formatter.step({
  "line": 107,
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
  "duration": 319199,
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
  "duration": 1075675,
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
  "duration": 245131,
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
  "duration": 2851079611,
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
  "duration": 540904,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@experienceAPI"
    },
    {
      "line": 112,
      "name": "@L1"
    },
    {
      "line": 112,
      "name": "@GetTimeDepositAccountDetails"
    },
    {
      "line": 112,
      "name": "@Positive"
    },
    {
      "line": 112,
      "name": "@sprint8"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "mandatory valid URI params applicationRefNo as 00001793000003 and accountId as \u003caccountId\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I request for retrieval of TimeDepositAccountDetails",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;",
  "rows": [
    {
      "cells": [
        "applicationRefNo",
        "accountId",
        "Status"
      ],
      "line": 120,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;1"
    },
    {
      "cells": [
        "00001793000003",
        "97537626",
        "200"
      ],
      "line": 121,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 121,
  "name": "This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-retrieve-the-nominated-account-details-of-a-time-deposit/savings-application-from-the-core-banking-system-based-on;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@sprint8"
    },
    {
      "line": 112,
      "name": "@Positive"
    },
    {
      "line": 112,
      "name": "@experienceAPI"
    },
    {
      "line": 112,
      "name": "@L1"
    },
    {
      "line": 112,
      "name": "@GetTimeDepositAccountDetails"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "mandatory valid URI params applicationRefNo as 00001793000003 and accountId as 97537626",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I request for retrieval of TimeDepositAccountDetails",
  "keyword": "When "
});
formatter.step({
  "line": 118,
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
  "duration": 262310,
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
  "duration": 1043506,
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
  "duration": 451772,
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
  "duration": 2960956436,
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
  "duration": 684043,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e doesn\u0027t match actual status code \u003c404\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\n\tat com.alica.test.stepdefs.APIStepDefinitions.verify_status_code(APIStepDefinitions.java:56)\n\tat ✽.Then the status code is 200(ExperienceAPI.feature:118)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 124,
  "name": "To get countries configured in core banking system",
  "description": "",
  "id": "experienceapis-(all-cases);to-get-countries-configured-in-core-banking-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 123,
      "name": "@experienceAPI"
    },
    {
      "line": 123,
      "name": "@L1"
    },
    {
      "line": 123,
      "name": "@GetCountryList"
    },
    {
      "line": 123,
      "name": "@Positive"
    },
    {
      "line": 123,
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/countries",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "a mandatory valid query param language as \u003clanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I request for retrieval of Countryist",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 130,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);to-get-countries-configured-in-core-banking-system;",
  "rows": [
    {
      "cells": [
        "language",
        "Status"
      ],
      "line": 131,
      "id": "experienceapis-(all-cases);to-get-countries-configured-in-core-banking-system;;1"
    },
    {
      "cells": [
        "En",
        "200"
      ],
      "line": 132,
      "id": "experienceapis-(all-cases);to-get-countries-configured-in-core-banking-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 132,
  "name": "To get countries configured in core banking system",
  "description": "",
  "id": "experienceapis-(all-cases);to-get-countries-configured-in-core-banking-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 123,
      "name": "@Positive"
    },
    {
      "line": 123,
      "name": "@experienceAPI"
    },
    {
      "line": 123,
      "name": "@L1"
    },
    {
      "line": 123,
      "name": "@sprint1"
    },
    {
      "line": 123,
      "name": "@GetCountryList"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/countries",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "a mandatory valid query param language as En",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I request for retrieval of Countryist",
  "keyword": "When "
});
formatter.step({
  "line": 129,
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
  "duration": 341346,
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
  "duration": 666292,
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
  "duration": 136025,
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
  "duration": 2671402904,
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
  "duration": 5901354,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 135,
  "name": "I want to validate CompanyName",
  "description": "",
  "id": "experienceapis-(all-cases);i-want-to-validate-companyname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 134,
      "name": "@experienceAPI"
    },
    {
      "line": 134,
      "name": "@L1"
    },
    {
      "line": 134,
      "name": "@D\u0026B"
    },
    {
      "line": 134,
      "name": "@Positive"
    },
    {
      "line": 134,
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/companies",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "a mandatory valid query param companyName as \u003ccompanyName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I request for retrieval of companyDetails",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "companyName",
        "ALLICA LIMITED"
      ],
      "line": 142
    },
    {
      "cells": [
        "companyID",
        "217364896"
      ],
      "line": 143
    },
    {
      "cells": [
        "registrationNumber",
        "07706156"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 145,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);i-want-to-validate-companyname;",
  "rows": [
    {
      "cells": [
        "companyName",
        "Status"
      ],
      "line": 146,
      "id": "experienceapis-(all-cases);i-want-to-validate-companyname;;1"
    },
    {
      "cells": [
        "ALLICA",
        "200"
      ],
      "line": 147,
      "id": "experienceapis-(all-cases);i-want-to-validate-companyname;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 147,
  "name": "I want to validate CompanyName",
  "description": "",
  "id": "experienceapis-(all-cases);i-want-to-validate-companyname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 134,
      "name": "@Positive"
    },
    {
      "line": 134,
      "name": "@experienceAPI"
    },
    {
      "line": 134,
      "name": "@L1"
    },
    {
      "line": 134,
      "name": "@sprint1"
    },
    {
      "line": 134,
      "name": "@D\u0026B"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/companies",
  "keyword": "Given "
});
formatter.step({
  "line": 137,
  "name": "4 valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "a mandatory valid query param companyName as ALLICA",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I request for retrieval of companyDetails",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "companyName",
        "ALLICA LIMITED"
      ],
      "line": 142
    },
    {
      "cells": [
        "companyID",
        "217364896"
      ],
      "line": 143
    },
    {
      "cells": [
        "registrationNumber",
        "07706156"
      ],
      "line": 144
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
  "duration": 296924,
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
  "duration": 649339,
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
  "duration": 114634,
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
  "duration": 998098552,
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
  "duration": 541909,
  "status": "passed"
});
formatter.match({
  "location": "APIStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 39790337,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 150,
  "name": "This API method is used to create list of tax information of a customer into the core banking system",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@experienceAPI"
    },
    {
      "line": 149,
      "name": "@L1"
    },
    {
      "line": 149,
      "name": "@SaveTaxInfoToFMS"
    },
    {
      "line": 149,
      "name": "@Positive"
    },
    {
      "line": 149,
      "name": "@sprint9"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerId}/taxInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "a mandatory valid URI param customerId as \u003ccustomerId\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "all valid fields in request body [  { \"nationalInsuranceNo\": \"\u003cnationalInsuranceNo\u003e\", \"countryISOCode\": \u003ccountryISOCode\u003e , \"taxReferenceNo\": \"\u003ctaxReferenceNo\u003e\"  }    ]",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I request for creation of TaxInfoToFMS",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "the status code is \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 157,
  "name": "",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;",
  "rows": [
    {
      "cells": [
        "customerId",
        "nationalInsuranceNo",
        "countryISOCode",
        "taxReferenceNo",
        "Status"
      ],
      "line": 158,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;1"
    },
    {
      "cells": [
        "1003009",
        "QQ1206C",
        "826",
        "11191314",
        "200"
      ],
      "line": 159,
      "id": "experienceapis-(all-cases);this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 159,
  "name": "This API method is used to create list of tax information of a customer into the core banking system",
  "description": "",
  "id": "experienceapis-(all-cases);this-api-method-is-used-to-create-list-of-tax-information-of-a-customer-into-the-core-banking-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@Positive"
    },
    {
      "line": 149,
      "name": "@sprint9"
    },
    {
      "line": 149,
      "name": "@experienceAPI"
    },
    {
      "line": 149,
      "name": "@L1"
    },
    {
      "line": 149,
      "name": "@SaveTaxInfoToFMS"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "we have Endpoint https://\u003cexp_ip_port\u003e/api/ab-e-mobile-interface/v1/customers/{customerId}/taxInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "all valid Experience headers",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "a mandatory valid URI param customerId as 1003009",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "all valid fields in request body [  { \"nationalInsuranceNo\": \"QQ1206C\", \"countryISOCode\": 826 , \"taxReferenceNo\": \"11191314\"  }    ]",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I request for creation of TaxInfoToFMS",
  "keyword": "When "
});
formatter.step({
  "line": 156,
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
  "duration": 333172,
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
  "duration": 793784,
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
  "duration": 256440,
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
  "duration": 200368,
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
  "duration": 3074240025,
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
  "duration": 1287904,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e doesn\u0027t match actual status code \u003c500\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\n\tat com.alica.test.stepdefs.APIStepDefinitions.verify_status_code(APIStepDefinitions.java:56)\n\tat ✽.Then the status code is 200(ExperienceAPI.feature:156)\n",
  "status": "failed"
});
});