package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Saludo {
	
	//Peticiones web
	//GET, POST, DELETE, PUT
	
	@GetMapping("/saludo")
	public String saludo() {
		return "Hola a todos";
		
	}
	
	
	@GetMapping("/holaSpring")
	public String holaSpring() {
		return "Hola mundo desde Spring";
	}
	
	
	@PostMapping("/login")
	public String login() {
		return "Te registraste";
		
	}
	
}
