package com.perritos;

public class PruebaPerro {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Perro perro1 = new Perro("Patitas", 3);
//        perro1.nombre  ="Patitas";
//        perro1.edad = 3;
        perro1.raza = "husky";
        perro1.tamaño = "Mediano";
		
        
        //metodos
        perro1.ladrar();
        
        int edadP = perro1.edadPerruna();
        System.out.println(edadP);
        
        
        //metodo estatico
        perro1.mensaje();
        Perro.mensaje();
        
        
        Perro perro2 = new Perro("Cookies", 1);
        
        perro2.edad = 1;
        perro2.raza = "Dalmata";
        perro2.tamaño = "Grande";
        
        perro2.ladrar();
		
	}

}
