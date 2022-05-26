package com.pokemon;

public class Main {
	
public static void main(String[] args) {	
	Pokemon chikorita = new Pokemon(152,1,20, "Chikoria", false);
	
	//utilizando los metodos de instancia
	chikorita.comer();
	chikorita.atacar();
	chikorita.dormir();
	
	TipoPlanta chikorita2 = new TipoPlanta(152,1,20,"Chikorita",false, 1);
	
	chikorita2.comer();
	chikorita2.dormir();
	chikorita2.atacar();
	chikorita2.envenenar();
	chikorita2.paralizar();
	
	
	Chikorita chikorita3 = new Chikorita(152,1,20,"Chikorita3",false,1,8);
	chikorita3.comer();
	chikorita3.atacar();
	chikorita3.dormir();
	
	
	chikorita3.envenenar();
	chikorita3.paralizar();
	
	
	chikorita.latigo();
	
	
	
	Charmander charmander = new Charmander(4,3,50, "Charmander,", false);
	charmander.comer();
	charmander.atacar();
	charmander.dormir();
	
	charmander.lanzallamas();
	charmander.atacar();
	
	
	
	
	
	
}
}
