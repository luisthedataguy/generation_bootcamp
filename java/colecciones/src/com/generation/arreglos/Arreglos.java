package com.generation.arreglos;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Matrices / arreglos /arrays
		//Solo pueden tener un tipo de dato
		//Debemos especificar su tamaño
		
		
		
		/*
		 * numero - 0
		 * String - null
		 * booleanos - false
		 * *
		 */
		int[] arrNumeros = new int[5];
		
		
		arrNumeros[0] = 1;
		arrNumeros[1] = Integer.parseInt("1");
		arrNumeros[2] = 1234;
		arrNumeros[3] = 1234;
		arrNumeros[4] = 1234;

		
		
		System.out.println(Arrays.toString(arrNumeros));
		
		
		for(int i = 0; i < arrNumeros.length; i++) {
		
		System.out.println(arrNumeros[i]);
		}
		
		
		
		int conteo = 0;
		// forEach
		
		for (int elemento : arrNumeros) {
			conteo++;
			System.out.println("Elemento " + conteo + " = " + elemento);
			
			
		}
		
		
		//Arreglo que guarda objetos
		
		Persona persona1 = new Persona("Alex", 33);
		Persona persona2 = new Persona("Luis", 24);
		
		
//		Object arrPersona[] = new Object[3];
		
		Persona arrPersonas[] = new Persona[3];
		
		arrPersonas[0] = persona1;
		
		arrPersonas[1] = persona2;
		
		arrPersonas[2] = new Persona("Juan", 25);
		
		
		
		System.out.println(Arrays.toString(arrPersonas));

		
		for(Persona elemento : arrPersonas) {
			System.out.println(elemento.nombre + " - " + elemento.edad);
			
		}

		
				
		

		
		
		
		
		
		
		
//		System.out.println(arrNumeros);
	}

}
