package com.revature.demo;

import com.revature.demo.controller.RecipeController;

import io.javalin.Javalin;

public class Main {
	public static void main(String[] args) {
		/*
		 * Javalin app = Javalin.create(config) .get("/", ctx ->
		 * ctx.result("Hello World")) .start(7070);
		 */
		
		Javalin app=Javalin.create().start(7000);
		
		app.get("/", ctx->ctx.result("Hello World"));
		
		app.get("/hello", ctx->ctx.result("Hello World Again"));
		
		app.get("/hello/{name}", ctx->ctx.result("Hello "+ctx.pathParam("name").toUpperCase()));
		
		app.get("/recipe", new RecipeController().getRecipe);
		
	}
}
