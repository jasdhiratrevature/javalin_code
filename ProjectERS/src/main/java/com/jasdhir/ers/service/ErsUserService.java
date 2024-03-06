package com.jasdhir.ers.service;

import com.jasdhir.ers.dao.ErsUserDao;
import com.jasdhir.ers.dao.ErsUserDaoImpl;
import com.jasdhir.ers.model.ErsUser;
import com.jasdhir.ers.model.UserDTO;

public class ErsUserService {
	
	private static ErsUserDao eud = new ErsUserDaoImpl();
	
	public boolean addUserServ(ErsUser eu) {
		return eud.addUser(eu);
	}
	
	public boolean deleteUserServ(ErsUser eu) {
		return eud.deleteUser(eu);
	}
	
	public boolean loginServ(UserDTO ud) {
	ErsUser eu = eud.accountByLogin(ud.username, ud.level);
	
		int password = ud.password.hashCode();
		String password1 = String.valueOf(password);
		System.err.print(password+"  "+password1 +"    "+eu.getPassword());
	
		//if( eu!=null && password1.equals(eu.getPassword())) {
		if( eu!=null && ud.getPassword().equals(eu.getPassword())) { 
			System.err.println("Returning True");
			return true;
		}
		System.err.println("End User "+eu.toString());
		return false;
		
	}
	
	public ErsUser getUserServ(UserDTO ud) {
		ErsUser eu = eud.accountByLogin(ud.username, ud.level);
		return eu;
	}

}
