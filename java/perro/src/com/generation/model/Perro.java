package com.generation.model;

public class Perro {
	//atributos
	private String nombre;
	private String raza;
	private String tamanio;
	private int edad;
	private String color;
	
	//construct
	
	private int id;
	private static int contador = 0;
	
	
	Map

	public Perro(String nombre,String raza, String tamanio, int edad,
			int anios, String color) {
		this.nombre = nombre;
		this.raza = raza;
		this.tamanio = tamanio;
		this.edad = edad;
		this.color = color;
		this.id = ++Perro.contador;

	}
	
	
	
	
	
	
	
	
	//metodos 
	
	
	
	
	private String getNombre() {
		return nombre;
	}








	private void setNombre(String nombre) {
		this.nombre = nombre;
	}








	private String getRaza() {
		return raza;
	}








	private void setRaza(String raza) {
		this.raza = raza;
	}








	private String getTamanio() {
		return tamanio;
	}








	private void setTamanio(String tamanio) {
		this.tamanio = tamanio;
	}








	private int getEdad() {
		return edad;
	}








	private void setEdad(int edad) {
		this.edad = edad;
	}








	private String getColor() {
		return color;
	}








	private void setColor(String color) {
		this.color = color;
	}








	public void dormir() {
		System.out.println(this.nombre + " esta durmiendo.");
		
	}
	
	public void comer() {
		System.out.println(this.nombre + " esta comiendo.");
		
	}

	
	public void sentar() {
		System.out.println(this.nombre + " sé sentó.");
		
	}
	
	public void correr() {
		System.out.println(this.nombre + " que corra.");
		
	}
	
	
	//método toString
	//sobreescritura de métodos
	
	
	@Override
	public String toString() {
		return "Perro [nombre=" + nombre + ", raza=" + raza + ", tamanio=" + tamanio + ", edad=" + edad + ", color="
				+ color + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	

	
	
}
