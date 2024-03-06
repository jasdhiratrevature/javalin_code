package com.revature.demo.controller;

import com.revature.demo.model.Recipe;

import io.javalin.http.Handler;

public class RecipeController {

	public Handler getRecipe= ctx->{
		// this data can come from a database 
		Recipe recipeOne=new Recipe(1,"Sandwich","Bread");
		ctx.json(recipeOne);
	};
	
}
