package com.allica.common.methods;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItem;

import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.RandomStringUtils;

import com.allica.propertyvalues.PropertyValues;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class CommonFunctions {

	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;
	String uriParam = "", uriParam2 = "";
	String newEndpoint = "";
	String responseParamVar = "";
	PropertyValues properties = new PropertyValues();

	/* Fetch from Config */
	String expClientID = "10f17ccb2ed44baeac09e852f0835c68";
	String expClientSecret = "2C5f53cDd3c845F596C305884bfFc0B0";
	String sysClientID = "10f17ccb2ed44baeac09e852f0835c68";
	String sysClientSecret = "1baD8806B7d8463fA525F6E8993ea169";
	String authToken = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNpZ25pbmdLZXkiLCJ4NXQiOiI5bTc3bVVoZml5VGRFLXVEbGJpRG1WY2c2YWcifQ.eyJzY29wZSI6WyJvcGVuaWQiXSwiY2xpZW50X2lkIjoidGVzdF9jbGllbnQiLCJpc3MiOiJodHRwczovL2Rldi1hcy5jaXZpbGlzZWRiYW5rLmNvbSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoiVEVTVDAxIiwiZXhwIjoyMjY5NjM1NzQzfQ.nI5Zc8hKH4_0IJVji39Je7vFJxWbq6jHGR8J7K3Fa2OtJdyNT5QXGnXNX8Ddr4XG-dKuX2hocdQYFWOgdWqgVPYTw387oJtM5ApUdJZc0wIqKs1m9APiVespsOyiKn7rv3qrL0M1roVKEvVkRJps_DzrdglTXD4qw4VwQWNUf8xLsl2bXEuSW8m795tMVm7S850MKKeSouXp9CfQWCqS_H_yi5bqCJBbai20POczZYakh1Q42ZxQ_FjU0tuA_CkBQPGATpNimBhXpcfwQwpEHJ97h87OZAfXnm2y-Smg9b2jokRPRdbaf8nKL622B-dFeDj7UXTdrNwsomz7CvEtcg";

	/* Fetch Headers */

	public RequestSpecification allHeaders(String count, String APIType) throws Exception {

		request = given().header("X-TRANSACTION-ID", UUID.randomUUID()).header("X-REQUEST-ID", UUID.randomUUID());
		if (count.equals("all")) {
			request = request.headers("Authorization", authToken);
		}

		if (APIType.equals("Experience")) {
			request = request.header("client_id", expClientID).header("client_secret", expClientSecret).log().all();
		}

		else if (APIType.equals("System") | APIType.equals("Process")) {

			request = request.header("client_id", sysClientID).header("client_secret", sysClientSecret).log().all();
		}
		return request;
	}

	/* Generate random alphanum for params in Payload */

	public RequestSpecification sendRequestBody(String payload) {

		if (payload.contains("phoneNo")) {
			String dynamicUsername = RandomStringUtils.randomAlphanumeric(8);
			payload = payload.replace("dynamicUsername", dynamicUsername);

		} else if (payload.contains("nationalInsuranceNo")) {
			payload = payload.replace("\"nationalInsuranceNo\": \"",
					"\"nationalInsuranceNo\": \"" + RandomStringUtils.randomAlphanumeric(4));
		}
		request = request.contentType("application/json").body(payload);
		return request;
	}

	/* Fetch env IP and port from Config file */

	public String getEndpoint(String endpoint) throws Exception {
		if (endpoint.contains("<exp_ip_port>")) {
			String result = properties.getPropValues("Exp_IP_PORT");
			endpoint = endpoint.replace("<exp_ip_port>", result);
		} else if (endpoint.contains("<sys_ip_port>")) {
			String result = properties.getPropValues("Sys_IP_PORT");
			endpoint = endpoint.replace("<sys_ip_port>", result);
		} else if (endpoint.contains("<pro_ip_port>")) {
			String result = properties.getPropValues("Pro_IP_PORT");
			endpoint = endpoint.replace("<pro_ip_port>", result);
		}
		newEndpoint = endpoint;
		System.out.println(newEndpoint);
		return newEndpoint;
	}

}
