package com.pokemon;

public class Charmander implements TipoFuego, TipoVolador{

	public Charmander(int id, int edad, int nivel, String nombre, boolean evolucion) {
		super(id,edad,nivel,nombre,evolucion);
	}
		
	@Override
	public void volar() {
		// TODO Auto-generated method stub
		System.out.println("Volando");
	}

	@Override
	public void lanzallamas() {
		System.out.println("Lnaza llamas");
		// TODO Auto-generated method stub
		
	}

	@Override
	public void araniar(String nombre) {
		// TODO Auto-generated method stub
		System.out.println("Arañanado");
	}

	@Override
	public void saludar() {
		// TODO Auto-generated method stub
		System.out.println("Saludando");
	}


	
	

}
