package com.revature.demo.service;

import java.util.List;

import com.revature.demo.dao.RecipeDAO;
import com.revature.demo.model.Recipe;

public class RecipeService {
	private RecipeDAO recipeDao;

    public RecipeService(RecipeDAO recipeDao) {
        this.recipeDao = recipeDao;
    }
    
    public List<Recipe> getRecipes(){
    	return recipeDao.getAllRecipe();
    }
}
