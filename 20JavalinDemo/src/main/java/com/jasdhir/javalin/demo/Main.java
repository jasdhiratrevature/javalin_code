package com.jasdhir.javalin.demo;

import com.jasdhir.javalin.demo.controller.HelloController;

import io.javalin.Javalin;

public class Main {
public static void main(String[] args) {
	Javalin app=Javalin.create().start(8081); // 8080
	
	app.get("/", ctx->{ctx.result("Hello World");});
	
	app.get("/hello", ctx->ctx.result("Hello World Again"));
	
	app.get("/hello/{name}", ctx->ctx.result("Hello Again " +ctx.pathParam("name")));
		
	app.get("/controller",HelloController.helloController );

	
	app.get("/students", HelloController.getStudent);
	
	
	
	
	
}
}
