package javascis;

public class Calificador {
	
	public static void main(String[] args) {
	
	int calificacion = 45; 
	
		
	if(calificacion <= 3){
		System.out.println("Failed!");
		return;
	}else if(calificacion <= 5){
		System.out.println("Insuficient!");
		return;
	}else if(calificacion <= 9){
		System.out.println("Good!");
		return;
	}else if (calificacion == 10){
		System.out.println("Excellent ");
		return;
	}else if(calificacion > 10) {
		System.out.println("Grade outside range supported!");
		return;
	}

}
	
}
	
