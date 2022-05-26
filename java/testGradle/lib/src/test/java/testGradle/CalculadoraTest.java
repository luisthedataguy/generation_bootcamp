package testGradle;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Test de la clase Calculadora")
public class CalculadoraTest {
	@Test
	public void sumaTest() {
		
		
		Calculadora sumaCalc = new Calculadora();
		assertEquals(2, sumaCalc.sumar(1,1), "El resultado debería de ser 2");
		
	}
	
	
	@Test
	@DisplayName("Metodo para comprobar una suma")
	public void assertionTest() {
//		boolean valorBoolean = true;
//		assertTrue(valorBoolean);
		
		assertAll(
				"Encabezado",
				()-> assertEquals(2, 1+1, "Deberia ser dos"),
				()-> assertTrue(false, "Debería ser true")				
				);
		
	}
	
//	@Test
//	@DisplayName("Método para comproar assertions");
//public void assertionTest() {
//	
//
	
	
	
	
}
