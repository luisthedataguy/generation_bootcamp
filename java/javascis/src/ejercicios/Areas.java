package ejercicios;

public class Areas {
    public void areaCuadrado(int l) {
        System.out.println("El �rea del cuadrado es: "+ l*l); 
    }
    public void areaTriangulo(int base, int altura) {
        System.out.println("El �rea del tri�ngulo es: "+( base*altura)/2); ;
    }
    public void areaCirculo(int r) {
        double per=Math.PI*(r*r);
        System.out.println("El �rea del c�rculo es "+ String.format("%.2f",per) );
    }
}