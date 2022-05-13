package javascis;

import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
//una sola linea 
		
		//operadores asgnación
		
		int num = 12;
		num =45;
		
		System.out.println("Hola");
		
		
		//operador de comaracion
		
	int num1, num2;
	num1 =10;
	num2 = 20;
	System.out.println("num1: " + num1);
	System.out.println("num2: " + num2);
	
	
	//==operador de compracion
	System.out.println(num1 == num2);
	
	//equals()

	System.out.println(Objects.equals(num1, num2));
	
	//operadores logicos
	
	// <, >, <=, >=
	int num3, num4;
	
	
	num3 = 15;
	num4 = 20;
	
	
//	System.out.println(num3 < num4);
//	System.out.println(num3 > num4);
//	System.out.println(num3 <= num4);
//	System.out.println(num3 >= num4);
	
	if (num3 > num4) {
	
		System.out.println("Numero 3 es menor");
	}else {
		System.out.println("Numero 3 es mayor");
	
	}
	
	
	// !=
	
	System.out.println(num3 != num4);
	
	boolean comparacion = num3 !=  num4;
	System.out.println(comparacion);
	
	//operadores logicos
	//AND = &&
	//OR = ||
	//NOT = !
	
	
	System.out.println(true && true);
	
	System.out.println(true || true);
	
	System.out.println(!true && true);

	
System.out.println(!(false && true));


	
	

	


	
	
	
	
	
	
	}

}
