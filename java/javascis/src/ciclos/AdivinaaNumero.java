package ciclos;

import javax.swing.JOptionPane;

public class AdivinaaNumero {
    public static void main(String[] args) {

        int adivinar = (int) (Math.random()*(10-1));
        boolean salir = true;
        System.out.println(adivinar);

        while (salir){
            int input= Integer.valueOf(JOptionPane.showInputDialog("Introduce un numero"));
            if(input == adivinar){
                salir = false;
            }
            else{
                System.out.println("Numero incorrecto");
            }
        }
        System.out.println("Felicidades adivinaste el numero!!");
    }
}
