package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdefination {
	
	WebDriver driver;
	@Given("^user is present in login page$")
	public void user_is_present_in_login_page()
	{   System.setProperty("webdriver.chrome.driver", "E:\\Driver Exc Folder\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://freecrm.com/");
	}
   
	@When("^tittle of login page is freecrm$")
	public void title_of_login_is_freecrm()
	{
	String Actual_title=driver.getTitle();
	System.out.println("the title is"+ Actual_title);
	//Assert.assertEquals("CRMPRO Log In Screen", Actual_title);
	
	}
	
 @Then("^user enter UserName and password$")
 public void user_enter_UserName_and_password()
 {
	 System.out.println("Enter user Name and Password");
 }
 @Then("^user click on login button$")
 public void user_click_on_login_button(){
    
     System.out.println("user click on login page");
 }



}
