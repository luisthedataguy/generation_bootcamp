package com.perritos;

public class Perro {
	
	//atributos o propiedades
	String nombre;
	int edad;
	String raza;
	String tamaño;
	
	//CONSTRUCTOR
	public Perro(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	
	
	//metodos 
	public void ladrar() {
		
		System.out.println("El perro" + nombre + "Guaufff");
	}
	
	public int edadPerruna() {
		
		return edad * 7;
	}
	
	
	//metodos estaticos
	public static void mensaje() {
		System.out.println("Esta es una clase perro");
	}
	
	
	

}
