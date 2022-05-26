package com.pokemon;

public class TipoPlanta extends Pokemon{

	


	int numeroHojas;
	
	//constructor
	public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
		super(152,1,20,"chikorita", false);
		this.numeroHojas =numeroHojas;
	}
	
	public void paralizar() {
		System.out.println(nombre + "esta paralizando");
	}

	
	public void envenenar() {
		System.out.println(nombre + "esta envenenando");
	}
	
	public void latigo() {
		System.out.println(nombre + "latigazo");
	}

	public int getNumeroHojas() {
		return numeroHojas;
	}

	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}
	
	
	

}
