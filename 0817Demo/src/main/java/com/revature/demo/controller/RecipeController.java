package com.revature.demo.controller;

import java.util.List;

import com.revature.demo.dao.RecipeDAO;
import com.revature.demo.model.Recipe;
import com.revature.demo.service.RecipeService;

import io.javalin.http.Handler;

public class RecipeController {
	private RecipeService recipeService=new RecipeService(new RecipeDAO());
	
	
	public Handler fetchAllRecipes = ctx -> {
		List<Recipe> recList=recipeService.getRecipes();
		ctx.json(recList);
	};
	
}
