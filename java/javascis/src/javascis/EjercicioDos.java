package javascis;

import java.util.Scanner;

public class EjercicioDos {

	 public static void main(String[] args) {
	        Scanner sc=new Scanner(System.in);
	        
	        double peso,estatura,imc;
	        
	        System.out.println("Cual es su peso en kg ");
	        peso= sc.nextDouble();
	        System.out.println("Cual es tu estatura en m");
	        estatura= sc.nextDouble();
	        
	        imc= peso/(estatura*estatura);
	        System.out.println("SU IMC ES: "+imc);
	           
	        if (imc<18.5) {
	            System.out.println("Your health is not good");
	        } else if (imc>=18.5 && imc<=24.9) {
	            System.out.println("Your weigh ratio is good");
	        } else if (imc>=25) {
	            System.out.println("Your health is not good");
	        }

	        
	        
	    }

	}