package com.jasdhir.ers;



import com.jasdhir.ers.controller.Controller;
import com.jasdhir.ers.controller.ErsUserController;
import com.jasdhir.ers.controller.ReimController;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

import io.javalin.plugin.openapi.OpenApiOptions;
import io.javalin.plugin.openapi.OpenApiPlugin;
import io.javalin.plugin.openapi.ui.SwaggerOptions;
import io.swagger.v3.oas.models.info.Info;

public class Main {
	private static Javalin app;
	public static void main(String[] args) {
		
		app = Javalin.create((config)->{
			config.addStaticFiles("/web", Location.CLASSPATH);
			config.registerPlugin(new OpenApiPlugin(getOpenApiOptions()));
		});
	
		app.before(ctx -> ctx.header("Access-Control-Allow-Methods", "GET, POST"));
		app.before(ctx -> ctx.header("Access-Control-Allow-Headers", "Content-Type, *"));
		
		configure(new ReimController(), new ErsUserController());
		app.start(7000);
	}
	
	public static void configure(Controller...controllers) {
		for(Controller c: controllers) {
			c.addRoutes(app);
		}
	}
	public static OpenApiOptions getOpenApiOptions() {
	    Info applicationInfo = new Info()
	        .version("1.0")
	        .description("My Application");
	    return new OpenApiOptions(applicationInfo).path("/swagger-docs").swagger(new SwaggerOptions("/swagger-ui"));
	}
}
