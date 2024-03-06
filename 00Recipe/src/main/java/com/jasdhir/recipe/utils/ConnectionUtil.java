package com.jasdhir.recipe.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionUtil {

	public static Connection getBDConnection() {
		Connection connection=null;
		try{
			connection=DriverManager.getConnection("jdbc:h2:./h2/recipe_db", "sa", "sa");
			System.out.println("Conneected...");
		}catch(SQLException se) {
			se.printStackTrace();
		}
		return connection;
	}
}
