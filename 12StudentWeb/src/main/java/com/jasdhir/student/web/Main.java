package com.jasdhir.student.web;

import com.jasdhir.student.web.controller.StudentController;

import io.javalin.Javalin;
import io.javalin.apibuilder.ApiBuilder;
import io.javalin.http.staticfiles.Location;
import io.javalin.plugin.openapi.OpenApiOptions;
import io.javalin.plugin.openapi.OpenApiPlugin;
import io.javalin.plugin.openapi.ui.SwaggerOptions;
import io.swagger.v3.oas.models.info.Info;

import static io.javalin.apibuilder.ApiBuilder.*;

public class Main {
public static void main(String[] args) {
	 Javalin app = Javalin.create(ctx->{
     	ctx.enableCorsForAllOrigins();
     	ctx.addStaticFiles("web", Location.CLASSPATH);
     	//ctx.registerPlugin(new OpenApiPlugin(getOpenApiOptions()));
     	
     }).start(8081);
	 
	
		/*
		 * app.get("/students", StudentController.getAllStudents); 
		 * app.post("/students", * StudentController.addStudent);
		 */
	 
	 app.routes(() -> {
		    ApiBuilder.path("students", () -> {
		        get(StudentController.getAllStudents);
		        post(StudentController.addStudent);
		        });
	 });
		 
}
private static OpenApiOptions getOpenApiOptions() {
    Info applicationInfo = new Info()
        .version("1.0")
        .description("My Application");
    return new OpenApiOptions(applicationInfo).path("/swagger-docs").swagger(new SwaggerOptions("/swagger-ui"));
}

}
