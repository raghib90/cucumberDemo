package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class FacebookLoginTest {
	WebDriver driver;
	

	@Given("^user is present in login fb page$")
	public void user_is_present_in_login_fb_page()
	{
		 System.setProperty("webdriver.chrome.driver", "E:\\Driver Exc Folder1\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("https://www.facebook.com/");
		 //String Expected_title="Facebook - Log In or Sign Up";
		 String Actual_title=driver.getTitle();
		 System.out.println("actual_title is"+Actual_title);
		// Assert.assertEquals(Expected_title, Actual_title);
			
		
	}
	@When("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_user_and_password(String username,String password)
	{
		WebElement userName=driver.findElement(By.id("email"));
		           userName.sendKeys(username);
		WebElement pass=driver.findElement(By.id("pass"));
		           pass.sendKeys(password);
		  	}
	@Then("^user click on login buttons$")
	public void user_click_on_login_buttons() throws InterruptedException
	{
        Thread.sleep(3000);
		WebElement login=driver.findElement(By.xpath("//*[@id='u_0_b']"));
		           login.click();
		
   driver.close();
	}
	
	@Then("^user is in facebook homepage$")
	public void user_is_in_facebook_homepage()  {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("user is in Home page");
	   
	}
}
