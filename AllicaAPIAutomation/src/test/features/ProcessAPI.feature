Feature: ProcessAPIs (All cases)

@ProcessAPI @L1 @UpdateKeyManagementDetails @Positive @sprint9 
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
    