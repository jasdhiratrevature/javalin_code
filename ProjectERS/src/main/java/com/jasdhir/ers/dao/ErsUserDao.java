package com.jasdhir.ers.dao;

import java.util.List;

import com.jasdhir.ers.model.ErsUser;



public interface ErsUserDao {
	
	public ErsUser accountByLogin(String username, String level);
	
	public boolean addUser(ErsUser eu);
	
	public boolean deleteUser(ErsUser eu);
	
	

}
