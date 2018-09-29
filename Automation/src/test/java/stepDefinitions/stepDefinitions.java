package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinitions {

	@Given("^validate the browser$")
	public void validate_the_browser() throws Throwable {
		System.out.println("deciding the browser to open");
	}

	@When("^Browser is triggered$")
	public void browser_is_triggered() throws Throwable {
		System.out.println("Browser is triggered");
	}

	@Then("^check if browser is displayed$")
	public void check_if_browser_is_started() throws Throwable {
		System.out.println("Browser is displayed");
	}

	@Given("^User is on NetBanking landing page$")
	public void user_is_on_netbanking_landing_page() throws Throwable {
		// code to navigate to url
		System.out.println("Navigated to login url");
	}

	@When("^User login into application with \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_login_into_application_with_user_name_and_password(String strArg1, String strArg2)
			throws Throwable {
		// code to login
		System.out.println(strArg1);
		System.out.println(strArg2);
	}

	@Then("^Home page is populated$")
	public void home_page_is_populated() throws Throwable {
		// home page is populated
		System.out.println("Validated home page");
	}

	@And("^Cards are displayed$")
	public void cards_are_displayed() throws Throwable {
		// validating the cards
		System.out.println("Validated cards");
	}

	@When("^User sign up with following details$")
	public void user_sign_up_with_following_details(DataTable data) throws Throwable {
		List<List<String>> obj = data.raw();
		System.out.println(obj.get(0).get(0));
		System.out.println(obj.get(0).get(1));
		System.out.println(obj.get(0).get(2));
		System.out.println(obj.get(0).get(3));
		System.out.println(obj.get(0).get(4));

	}

	@When("^User login in to application with (.+) and (.+)$")
	public void user_login_into_application_with_and(String username, String password) throws Throwable {
		System.out.println(username);
		System.out.println(password);
	}

}