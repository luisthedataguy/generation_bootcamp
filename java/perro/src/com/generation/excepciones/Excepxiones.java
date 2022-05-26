package com.generation.excepciones;

public class Excepxiones {
    public static void main(String[] args) {
        int a;
        Integer b;
        float division;
        a = 10;
        b = null;
        // try-catch finally
        try {
            // Código a probar
            division = a / b;
        } catch (ArithmeticException ex) { //la excepción a observar
            // Se ejecuta si ocurre alguna excepción
            division = 1;
            System.out.println("Error: " + ex.getMessage());
        }catch (NullPointerException ex){
            division = 0.0f;
            System.out.println("Error: " + ex.getMessage());
        }finally{
            System.out.println("Ya estuvo");
        }
        System.out.println(division);
    }
}

