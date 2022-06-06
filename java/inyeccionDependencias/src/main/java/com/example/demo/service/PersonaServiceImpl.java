package com.example.demo.service;
import org.springframework.stereotype.Service;


@Service
public class PersonaServiceImpl implements PersonaService{

	@Override
	public String registro(String nombre) {
		// TODO Auto-generated method stub
		return "El usuario " + nombre + " ha sido registrado";
	}

	
	
	
}
