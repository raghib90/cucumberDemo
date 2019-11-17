package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\pc\\Desktop\\Ikokas Document\\demoCucumber\\src\\main\\java\\Features\\fblogin.feature"
,glue={"stepDefination"},
format={"pretty","html:test-outout"},
monochrome=true
)


public class TestRunner {

}
