package com.generation.testMaven;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class AppTest {
	
	
	@Test  
	public void saludoTest() {
		App saludo  = new App();
		Assertions.assertEquals("Hola mundo!", saludo.saludo());
		
	}
	
	@Test
	public void saludoStaticTest() {
		Assertions.assertEquals("Hola mundo", App.saludoStatic());
		
	}
  
}


