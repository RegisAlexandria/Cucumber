package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@MobileTest")
	public void beforeValidation()
	{
		System.out.println("Mobile before hook");
	}
	
	@After("@MobileTest")
	public void afterValidation()
	{
		System.out.println("Mobile after hook");
	}
	
	@Before("@WebTest")
	public void beforeWebValidation()
	{
		System.out.println("Web before hook");
	}
	
	@After("@WebTest")
	public void afterWebValidation()
	{
		System.out.println("Web after hook");
	}

}
