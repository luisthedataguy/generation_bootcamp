package ciclos;

import javax.swing.JOptionPane;

public class CicloWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		int condicion = 0;
//		
//		while(condicion < 5) {//mientras que 
//			System.out.println("Hola");	
//			
//			condicion++;
//		}
		
		//verificar contrase�a
		
		String clave = "Pedro";
		String comparacion = "";
//		
		while(clave.equals(comparacion) == false) {
			
			comparacion = JOptionPane.showInputDialog("Introduce la contrase�a, por favor");
			
			if(clave.equals(comparacion)== false) {
				System.out.println("La contrase�a es incorrecta");
			}


		}
		
		System.out.println(clave.equals(comparacion));
	}

}
