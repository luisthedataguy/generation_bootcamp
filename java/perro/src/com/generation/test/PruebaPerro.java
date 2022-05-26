package com.generation.test;

import com.generation.model.Perro;

public class PruebaPerro {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Perro pelusa = new Perro("Pelusa", "French", "chico", 4, 0, "Blanco");

//		System.out.println(pelusa);

		
		Perro solovino = new Perro("Solovino", "mestizo",
				"mediano", 2, "cafe");
		
//		pelusa.nombre = "manchas";

		pelusa.comer();
		
		
		System.out.println(pelusa.nombre);
		
	}
	
	
//metodo toString
	
	
	

}
