package com.allica.test.runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(plugin =  { "pretty", "json:target/cucumber-reports/Cucumber.json",
    "junit:target/cucumber-reports/Cucumber.xml",
    "html:target/cucumber-reports"},
monochrome = true ,  glue = { "com.alica.test.stepdefs" }, features = { "src/test/features" },  tags = { "@experienceAPI" , "~@Sanity"}  )

	
public class CucumberTests {
    

}