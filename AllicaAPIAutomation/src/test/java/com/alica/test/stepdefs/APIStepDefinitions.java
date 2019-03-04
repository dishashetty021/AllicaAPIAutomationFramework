
package com.alica.test.stepdefs;

import static io.restassured.RestAssured.given;
import java.util.UUID;
import io.restassured.RestAssured.*;
import io.restassured.matcher.RestAssuredMatchers.*;

import org.apache.commons.lang3.RandomStringUtils;
import org.hamcrest.Matchers.*;
import org.hamcrest.core.Every;

import com.allica.common.methods.CommonFunctions;
import com.allica.propertyvalues.PropertyValues;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.hasItem;
import java.lang.Character.Subset;
import java.util.Map;
import java.util.Random;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class APIStepDefinitions {

	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;
	String uriParam = "", uriParam2 = "";
	String endpoint = "";
	String responseParamVar = "";
	CommonFunctions CF = new CommonFunctions();
	

	@Given("we have Endpoint (.*)")
	public void we_have_endpoint(String endpointVar) throws Exception {
		
		endpoint = CF.getEndpoint(endpointVar);
	}

	@And("(.*) valid (.*) headers")
	public void valid_headers(String count, String APIType) throws Exception {
		request = CF.allHeaders(count, APIType);

	}

	@Then("the status code is (.*)")
	public void verify_status_code(int statusCode) {
		json = response.then().statusCode(statusCode).log().all();

	}

	@And("response includes the following$")
	public void response_equals(Map<String, String> responseFields) {
		for (Map.Entry<String, String> field : responseFields.entrySet()) {

			json.body(field.getKey(), hasItem(field.getValue()));
		}
	}

	@And("a mandatory valid URI param (.*) as (.*)")
	public void a_mandatory_valid_URI_param(String var, String geturiparam) {
		uriParam = geturiparam;

		request = request.pathParams(var, uriParam);
	}

	@And("mandatory valid URI params (.*) as (.*) and (.*) as (.*)")
	public void mandatory_valid_URI_params(String var, String geturiparam, String var2, String geturiparam2) {
		uriParam = geturiparam;
		uriParam2 = geturiparam2;

		request = request.pathParams(var, uriParam).pathParams(var2, uriParam2);
	}

	@And("a mandatory valid query param (.*) as (.*)")
	public void a_mandatory_valid_query_param(String firstParameterName, String firstParameterValue) {
		request.queryParam(firstParameterName, firstParameterValue);
	}

	@And("non-mandatory valid query params (.*) as (.*) and (.*) as boolean (.*)")
	public void nonmandatory_valid_query_params_bool(String firstParameterName, String firstParameterValue,
			String secondParameterName, String secondParameterValue) {
		request = request.queryParam(firstParameterName, firstParameterValue).queryParam(secondParameterName,
				Boolean.valueOf(secondParameterValue));
	}

	@And("extract (.*)")
	public void extract_param(String responseParam) {
		responseParamVar = json.extract().path(responseParam);
		System.out.println(responseParamVar);
	}

	@When("I request for retrieval of (.*)")
	public void request_for_retrieval_of_details(String property) {

		response = request.when().get(endpoint);
		System.out.println("response: " + response.prettyPrint());
	}

	@When("I request for updation of (.*)")
	public void request_for_updation_of_details(String property) {

		response = request.when().put(endpoint);
		System.out.println("response: " + response.prettyPrint());
	}

	@When("I request for creation of (.*)")
	public void request_for_creation_of_details(String property) {

		response = request.when().post(endpoint);
		System.out.println("response: " + response.prettyPrint());
	}

	@When("all valid fields in request body (.*)")
	public void fields_in_request_body(String payload) {

		request = CF.sendRequestBody(payload);

	}

}
