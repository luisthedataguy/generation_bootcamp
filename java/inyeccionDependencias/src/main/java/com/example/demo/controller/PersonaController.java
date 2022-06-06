package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.PersonaServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api") 
public class PersonaController {
	
	
	
	private PersonaServiceImpl personaServiceImpl;
	
	@Autowired
	public PersonaController(PersonaServiceImpl personaServiceImpl) {
		this.personaServiceImpl = personaServiceImpl;
	};
	
	@GetMapping("/saludo")
	public String saludo() {
		return "Hola";
	}
	
	@GetMapping("/registro")
	public String registro(@RequestParam(value = "nombre", defaultValue = "Desconocido") String nombre) {
		personaServiceImpl = new PersonaServiceImpl();
		return personaServiceImpl.registro(nombre);
		
		
	}
	
	

}
