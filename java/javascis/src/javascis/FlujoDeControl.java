package javascis;

import java.util.Scanner;

public class FlujoDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("Cuál es tu edad?");
		int edad = sc.nextInt();
//		sc.close();
		
//		int edad = 18;
		
		if(edad >= 18) {
			if(edad >= 30) {
				System.out.println("Eres un adulto mayor");

			}else {
			System.out.println("Eres mayor de edad");
			
		}
		}else {
			System.out.println("Eres menor de edad");
		}
	
		String mensaje = (edad >= 18)? ("Eres mayor de edad"): ("Eeres menor de edad");
		System.out.println(mensaje);
		
		System.out.print("En que dia estamos?");
		
        sc.next();
		String dia = sc.nextLine();
		sc.close();
		
		switch(dia.toLowerCase()) {
		case "lunes":	
				System.out.println("Chelas minutos mas");
				break;
		case "martes":
			System.out.println("No te cases ni te ebarques");
			break;
		case "miercoles":
			System.out.println("Ombligo de la semana");
			break;
		case "jueves":
			System.out.println("Viernes chiquito");
			break;
		case "viernes":	
			System.out.println("Chelas");
			break;
			default:
				System.out.println("Dia invalido");
				break;
		}
	}
	

}
