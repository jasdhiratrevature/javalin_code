package com.revature.demo.dao;

import java.util.Arrays;
import java.util.List;

import com.revature.demo.model.Recipe;

public class RecipeDAO {

	static List<Recipe> recipeList=Arrays.asList(new Recipe(1,"carrot soup", "Put carrot in water.  Boil.  Maybe salt."),
			new Recipe(2,"potato soup", "Put potato in water.  Boil.  Maybe salt."),
			new Recipe(3,"tomato soup", "Put tomato in water.  Boil.  Maybe salt."),
			new Recipe(4,"lemon rice soup", "Put lemon and rice in water.  Boil.  Maybe salt."),
			new Recipe(5,"stone soup", "Put stone in water.  Boil.  Maybe salt."));
	
	
	public List<Recipe> getAllRecipe(){
		return recipeList;
	}
}
