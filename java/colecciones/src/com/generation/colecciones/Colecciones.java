package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	
	
	public static void main(String[] args) {
		
		//List - ArrayList
		
		List <String> miArray = new ArrayList<String>();
		
		miArray.add("Pedro");
		
		miArray.add("Yair");
		
		miArray.add("Maria");
		
		miArray.add(1, "Raul");
		
//		String elemento = miArray.remove(1);
		
		String elemento = miArray.remove(1);
		
		
		
		System.out.println(miArray);
		
		System.out.println(miArray.size());
		System.out.println(elemento);
		

		
		
		Colecciones.imprimir(miArray);
		
		
//		long ==> Long
//       double ==> double
//				int ==> Integer
//				boolean ==> boolean
//       
    	int num1 = 10;
    	
    	Integer num2 = 10;
    	
    	System.out.println(num1);
		System.out.println(num2 instanceof Integer);
		
		
		System.out.println("\tList ---ArrayList");
		List<Integer> miArray2 = new ArrayList<Integer>();
		
		
		
		miArray2.add(3);
		miArray2.add(322222);
		miArray2.add(3333);
		
		imprimir(miArray2);
		
		
		String miset = "";
		
		System.out.println("\t Set --- HashSet");
		Set<String> miSet = new HashSet<String>();
	
		
		
		miSet.add("Rosa");
		miSet.add("Jorge");
		miSet.add("Manuel");
		miSet.add("Luis");
		
		
		miSet.remove("Manuel");
		
		
		
		imprimir(miSet);
		
		
        System.out.println(miSet.contains("Rosa"));
        
        
        //Map -- hashMap -- Indice
        
        
       System.out.println("\t Map --- Hashmap");
       
       Map<String, Integer> miMap = new HashMap<String, Integer>();
       
       miMap.put("Valor 1", 45 );
       miMap.put("Valor 2", 50 );
       miMap.put("Valor 3", 350 );

       miMap.put("Valor 4", 650 );


       
       System.out.println(miMap);

       System.out.println(miMap.values());
       System.out.println(miMap.keySet());

       
    	for(String llave: miMap.keySet()) {
    		
    		System.out.println(llave + " : " + miMap.get(llave));
    	}
    	   
       
       
       }

        
        
        
        
        

	
	
	
	
	
	
	
	public static void imprimir(Collection coleccion) {
		for(Object elemento: coleccion ) {
			
			System.out.println("Elemento = " +  elemento);
		}
		
		
		
	}
	

}
