package com.pokemon;

public class Chikorita extends TipoPlanta extends TipoFuego{
	
	int numeroCuernitos;
	
	
	public Chikorita(int id, int edad, int nivel,String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) {
	super(id,edad,nivel,nombre,evolucion,numeroHojas);
	this.numeroCuernitos = 1;

}



public void latigo() {
	System.out.println(getNombre() + "uso latigo");
}



private String getNombre() {
	// TODO Auto-generated method stub
	return null;
}



@Override
public String toString() {
	return "Chikorita [numeroCuernitos=" + numeroCuernitos + "]";
}




}