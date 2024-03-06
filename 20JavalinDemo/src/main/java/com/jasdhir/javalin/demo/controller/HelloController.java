package com.jasdhir.javalin.demo.controller;

import com.jasdhir.javalin.demo.model.Student;

import io.javalin.http.Handler;

public class HelloController {
	
	public static Handler helloController =ctx->{
		ctx.result("Hello From Controller");
		
	};
	
	public static Handler getStudent=ctx->{
		Student s=new Student(1,"Jasdhir",42);
		// make a DB connection and fetch the data froma table 
		// convert to json
		// and display in HTML using fetch(http://localhost:8080/students)
		ctx.json(s);
		
	};
	
}
