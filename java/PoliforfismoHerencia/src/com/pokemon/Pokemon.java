package com.pokemon;

public abstract class Pokemon {
//atributos
	
	private int id;
	private int edad;
	private int nivel;
	String nombre;
	private boolean evolucion;
	
	
	public Pokemon(int id, int edad, int nivel, String nombre, boolean evolucion) {
		this.id = id;
		this.edad = edad;
		this.nivel =nivel;
		this.nombre = nombre;
		this.evolucion = evolucion;
	}
	
	public void comer() {
		System.out.println(nombre + " esta comiendo");
	}
	
	
	
	//metodo abstracto
	public abstract void saludo();
	
	
	
	
	public void atacar() {
		System.out.println(nombre + " esta atacando");
		
		

	}
	
	public void dormir() {
		System.out.println(nombre + "zzzz");
	}

	public void latigo() {
		// TODO Auto-generated method stub
		
	}
}
