package com.jasdhir.recipe;

import java.sql.Connection;

import com.jasdhir.recipe.utils.ConnectionUtil;

import io.javalin.Javalin;

public class Main {
public static void main(String[] args) {
	Javalin app=Javalin.create().start(8081); 
	app.get("/", ctx->{ctx.result("Hello World");});
}
}
