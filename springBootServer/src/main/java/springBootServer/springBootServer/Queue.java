package springBootServer.springBootServer;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="appointments")
public class Queue {
	
	private String id;
	private String description;
	private String doctor;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
}