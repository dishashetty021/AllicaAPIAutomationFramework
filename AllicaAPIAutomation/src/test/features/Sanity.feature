Feature: Sanity Tests including Experience, System and Process API
    
    
@experienceAPI @L1 @Sanity @RegisterUser @Positive @sprint9 @UserScenario 
Scenario Outline: Register Users 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/users
    And all valid Experience headers 
    And all valid fields in request body  { "username": "<username>"  , "phoneNo": "<phoneNo>" , "email": "<email>" , "password": "<password>" }
    When I request for creation of User
    Then the status code is <Status>
    And extract sessionId  
    Examples:
    | username 			|	phoneNo 	|email 							|password     		| Status 	|
    | dynamicUsername	|+919003611976	|shiva.palaniappan@allica.co.uk	|Allica123$			| 201 		|
  
@experienceAPI @L1 @Sanity  @LoginPing @Positive @sprint9 @UserScenario
Scenario Outline: Login Ping 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/users/{username}/login
    And all valid Experience headers 
    And a mandatory valid URI param username as <username>
    And all valid fields in request body  { "password": "<password>" }
    When I request for creation of User
    Then the status code is <Status>
    Examples:
    | username 	|password     		| Status 	|
    | APIUSER17	|Allica123$			| 201 		|  
    
@experienceAPI @L1 @Sanity @SendOTP @Positive @sprint9 @UserScenario
Scenario Outline: Send OTP
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/devices/{sessionIdVar}/otp
    And all valid Experience headers 
    And a mandatory valid URI param sessionIdVar as <sessionIdVar>
    And all valid fields in request body  { "otp": "<otp>" }
    When I request for creation of User
    Then the status code is <Status>
    Examples:
    | sessionIdVar 	|otp    		| Status 	|
    | 				|410030			| 201 		|  
    
@experienceAPI @L1 @Sanity @GetKeyManagementDetails @Positive @sprint6 
Scenario Outline: This API method is used to retrieve the manager details of a business customer 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/customers/{customerID}/managers
    And all valid Experience headers 
    And a mandatory valid URI param customerID as <customerID>
    When I request for retrieval of managerDetails
    Then the status code is <Status> 
    Examples:
    |customerID | Status	|
    |1003001    | 200 	    |
    
    
@experienceAPI @L1 @Sanity @ValidateIPAddress @Positive @sprint9
Scenario Outline: ValidateIPAddress
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/validate/fraud/device
    And all valid Experience headers 
    And all valid fields in request body  {  "applicationType" : "<applicationType>",  "blackBoxId" : "<blackBoxId>",  "ipAddress" : "<ipAddress>" }
    When I request for creation of ValidateIPAddress
    Then the status code is <Status>
    Examples:
    |applicationType| blackBoxId 	| ipAddress 	|Status	|
    |DEPOSITS 		| 1234			| 81.178.135.98	|200	|
    
@experienceAPI @L1 @Sanity @T&C @Positive @sprint7
Scenario Outline: T&C and FSCS Consent Detail to FMS 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/applications/{applicationefNo}/consents
    And all valid Experience headers 
    And a mandatory valid URI param applicationefNo as 00000093000003
    And all valid fields in request body  { "applicationType" : "<applicationType>", "documentType" : "<documentType>", "documentVersion" :  "<documentVersion>"}
    When I request for creation of T&C and FSCS Consent Detail to FMS
    Then the status code is <Status>
    Examples:
    |applicationType| documentType	| documentVersion 	|Status		| 
    |DEPOSITS 		| FSCS			| 0.1				|200		|
        
@experienceAPI @L1 @Sanity @GetKeyManagementDetails @Positive @sprint9 
Scenario Outline: This API method is used to retrieve the manager details of a business customer 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/customers/{customerID}/managers
    And all valid Experience headers 
    And a mandatory valid URI param customerID as 1003001
    And non-mandatory valid query params roles as <roles> and applyBusinessRules as boolean <applyBusinessRule
    When I request for retrieval of managerDetails
    Then the status code is <Status> 
   Examples:
    |roles 		| applyBusinessRules|customerID | Status	|
  	| Director 	|	false			|1003001    | 200 	    |
    

    
@experienceAPI @L1 @Sanity @CreateTimeDepositApplication @Positive @sprint7
Scenario Outline: Create Time Deposit Application 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/deposits/applications
    And all valid Experience headers 
    And all valid fields in request body { "customerId": "<customerId>" , "productCode": "<productCode>" ,"principalAmount": <principalAmount> , "currencyISOCode": <currencyISOCode> ,"periodNo": <periodNo> ,"periodType": "<periodType>" , "sourceOfFunds": {   "id": "<id>" ,  "description" : "<description>" }}
    When I request for creation of Time Deposit Application
    Then the status code is <Status>
    And extract applicationRefNo
    Examples:
    |customerId | productCode| principalAmount  | currencyISOCode | periodNo    | periodType| id    | description   | Status |
    |1003010    | TD001      | 10045            | 826             | 3           | Y         | 12345 | description   | 200    |
    
        
@experienceAPI @L1 @Sanity @GetTimeDepositApplication @Positive @sprint6
Scenario Outline: This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}
    And all valid Experience headers 
    And a mandatory valid URI param applicationRefNo as <applicationRefNo>
    When I request for retrieval of TimeDepositApplication
    Then the status code is <Status> 
    Examples:
    |applicationRefNo	| Status	|
    |00001793000003 	| 200 		|
    
@experienceAPI @L1 @Sanity @GetTimeDepositAccountDetails @Positive @sprint8
Scenario Outline: This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}
    And all valid Experience headers 
    And mandatory valid URI params applicationRefNo as 00001793000003 and accountId as <accountId>
    When I request for retrieval of TimeDepositAccountDetails
    Then the status code is <Status> 
    Examples:
    |applicationRefNo 	|accountId	| Status	|
    |00001793000003 	|97537626	| 200 		|
    
@experienceAPI @L1 @Sanity @GetCountryList @Positive @sprint1
Scenario Outline: To get countries configured in core banking system
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/countries
    And 4 valid Experience headers 
    And a mandatory valid query param language as <language>
    When I request for retrieval of Countryist
    Then the status code is <Status>
    Examples:
    |language 	|	Status	|
    |En			|	200 	|
    
@experienceAPI @L1 @Sanity @D&B @Positive @sprint1 
Scenario Outline: I want to validate CompanyName 
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/companies 
    And 4 valid Experience headers 
    And a mandatory valid query param companyName as <companyName>
    When I request for retrieval of companyDetails
    Then the status code is <Status> 
    And response includes the following 
        | companyName           | ALLICA LIMITED     |
        | companyID             | 217364896          | 
        | registrationNumber    | 07706156           |
   Examples:
    |companyName 	|	Status	|
    |ALLICA			|	200 	| 
        
@experienceAPI @L1 @Sanity @SaveTaxInfoToFMS @Positive @sprint9
Scenario Outline: This API method is used to create list of tax information of a customer into the core banking system
    Given we have Endpoint https://<exp_ip_port>/api/ab-e-mobile-interface/v1/customers/{customerId}/taxInfo
    And all valid Experience headers 
    And a mandatory valid URI param customerId as <customerId>
    And all valid fields in request body [  { "nationalInsuranceNo": "<nationalInsuranceNo>", "countryISOCode": <countryISOCode> , "taxReferenceNo": "<taxReferenceNo>"  }    ]
    When I request for creation of TaxInfoToFMS
    Then the status code is <Status> 
    Examples:
    |customerId	|nationalInsuranceNo 	|countryISOCode	| taxReferenceNo 	|Status	|
    |1003009	|QQ1206C 				|826			| 11191314 			| 200	|
    
  
@systemAPI @L1 @Sanity @GetKeyManagementDetails @Positive @sprint9 
Scenario Outline: This API method is used to retrieve the manager details of a business customer 
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers
    And all valid System headers 
    And a mandatory valid URI param customerID as 1003001
    And non-mandatory valid query params roles as Director and applyBusinessRules as boolean false
    When I request for retrieval of managerDetails
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
@systemAPI @L1 @Sanity @GetTimeDepositProductsInfo @Positive @sprint6
Scenario Outline: This API method is used to retrieve the Time Deposit/Savings product details based on a productCode and currency ISO Code
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/products/{productCode}/{currencyISOCode}
    And all valid System headers 
    And mandatory valid URI params productCode as TD001 and currencyISOCode as 826
    When I request for retrieval of TimeDepositProductsInfo
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    
@systemAPI @L1 @Sanity @GetTimeDepositApplication @Positive @sprint6
Scenario Outline: This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}
    And all valid System headers 
    And a mandatory valid URI param applicationRefNo as 00001793000003
    When I request for retrieval of TimeDepositApplication
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
@systemAPI @L1 @Sanity @SaveTaxInfoToFMS @Positive @sprint8 @sanity
Scenario Outline: This API method is used to create list of tax information of a customer into the core banking system
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerId}/taxInfo
    And all valid System headers 
    And a mandatory valid URI param customerId as 1003009
    And all valid fields in request body [  { "nationalInsuranceNo": "QQ123806C", "countryISOCode": 826 , "taxReferenceNo": "11191314"  }    ]
    When I request for creation of TaxInfoToFMS
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    
@systemAPI @L1 @Sanity @GetTimeDepositAccountDetails @Positive @sprint8
Scenario Outline: This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on
Given we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}
    And all valid System headers 
    And mandatory valid URI params applicationRefNo as 00001793000003 and accountId as 97537626
    When I request for retrieval of TimeDepositAccountDetails
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    
@systemAPI @L1 @Sanity @UpdateKeyManagementDetails @Positive @sprint9 
Scenario Outline: This API is used to update the key managementdetails of a customer/company into the FMS System 
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-customers-api/v1/customers/{customerID}/managers
    And all valid System headers 
    And a mandatory valid URI param customerID as 1003001
    And all valid fields in request body {    "details": [      {        "seqNo": 0,        "title": 0,        "firstName": "updatefname",        "lastName": "updatelname",        "dateOfBirth": "2001-01-02",        "isLegalDirector": 0,        "jobTitle": "",        "currentShareholdingPercentage": 0,        "personalFundingAmount": 0,        "personalFundingLoanPercentage": 0,        "otherBusinessDevotionOver25": 0,        "otherBusinessDevotionDetails": "",        "offersPersonalGuarantee": 0,        "biography": "",        "managementTeamExpSummary": "",        "cvPath": "",        "roles": ["Director","Shareholder","UBO","PSC"]      }    ]  }
    When I request for updation of KeyManagementDetails
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    
@ProcessAPI @L1 @Sanity @UpdateKeyManagementDetails @Positive @sprint9 
Scenario Outline: This API is used to update the key managementdetails of a customer/company into the FMS System
    Given we have Endpoint https://<sys_ip_port>/api/ab-p-customers-api/v1/deposits/companies/customers
    And all valid Process headers 
    And a mandatory valid URI param customerID as 1003001
    And all valid fields in request body {    "details": [      {        "seqNo": 0,        "title": 0,        "firstName": "updatefname",        "lastName": "updatelname",        "dateOfBirth": "2001-01-02",        "isLegalDirector": 0,        "jobTitle": "",        "currentShareholdingPercentage": 0,        "personalFundingAmount": 0,        "personalFundingLoanPercentage": 0,        "otherBusinessDevotionOver25": 0,        "otherBusinessDevotionDetails": "",        "offersPersonalGuarantee": 0,        "biography": "",        "managementTeamExpSummary": "",        "cvPath": "",        "roles": ["Director","Shareholder","UBO","PSC"]      }    ]  }
    When I request for updation of KeyManagementDetails
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    