package com.jasdhir.ers.dao;

import java.util.List;

import com.jasdhir.ers.model.ErsReim;



public interface ErsReimDao {
	
	public boolean addReim(ErsReim er);
	
	public boolean updateReim(ErsReim er);
	
	public boolean deleteReim(ErsReim er);
	
	public List<ErsReim> getAll();
	
	public List<ErsReim> getAllByFalse();
	
	public List<ErsReim> getAllByTrue();
	
	public List <ErsReim> getAllByUserId(int id);
	
	public ErsReim getReimById(int id);
		
}
