package com.revature.demo.model;

import java.util.Objects;

public class Recipe {
private int id;
private String name;
private String instructions;
public Recipe() {
	super();
}
public Recipe(int id, String name, String instructions) {
	super();
	this.id = id;
	this.name = name;
	this.instructions = instructions;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getInstructions() {
	return instructions;
}
public void setInstructions(String instructions) {
	this.instructions = instructions;
}
@Override
public int hashCode() {
	return Objects.hash(id, instructions, name);
}
@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Recipe other = (Recipe) obj;
	return id == other.id && Objects.equals(instructions, other.instructions) && Objects.equals(name, other.name);
}


}
