Feature: System APIs (All cases)

@systemAPI @L1  @GetKeyManagementDetails @Positive @sprint9 
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
    
@systemAPI @L1  @GetTimeDepositProductsInfo @Positive @sprint6
Scenario Outline: This API method is used to retrieve the Time Deposit/Savings product details based on a productCode and currency ISO Code
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/products/{productCode}/{currencyISOCode}
    And all valid System headers 
    And mandatory valid URI params productCode as TD001 and currencyISOCode as 826
    When I request for retrieval of TimeDepositProductsInfo
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    
@systemAPI @L1  @GetTimeDepositApplication @Positive @sprint6
Scenario Outline: This API method is used to get the details of a time deposit/savings application from the core banking system based on the application reference number retruned during the creation of a time deposit application
    Given we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}
    And all valid System headers 
    And a mandatory valid URI param applicationRefNo as 00001793000003
    When I request for retrieval of TimeDepositApplication
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
@systemAPI @L1  @SaveTaxInfoToFMS @Positive @sprint8 
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
    
    
@systemAPI @L1  @GetTimeDepositAccountDetails @Positive @sprint8
Scenario Outline: This API method is used to retrieve the nominated account details of a time deposit/savings application from the core banking system based on
Given we have Endpoint https://192.168.35.70:8083/api/ab-s-deposits-api/v1/deposits/applications/{applicationRefNo}/accounts/{accountId}
    And all valid System headers 
    And mandatory valid URI params applicationRefNo as 00001793000003 and accountId as 97537626
    When I request for retrieval of TimeDepositAccountDetails
    Then the status code is <Status> 
    Examples:
    |Status	|
    |200 	|
    
    
@systemAPI @L1  @UpdateKeyManagementDetails @Positive @sprint9 
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
    
    