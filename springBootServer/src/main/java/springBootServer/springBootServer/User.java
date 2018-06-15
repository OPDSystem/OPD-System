package springBootServer.springBootServer;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="incomes")
public class User {
	
	private String id;
	private String date;
	private float amount;
	public String getId() {
		return id;
	}
	public void setId(String Id) {
		id = Id;
	}
	
	public String getdate() {
		return date;
	}
	public void setdate(String datee) {
		date = datee;
	}
	public float getamount() {
		return amount;
	}
	public void setamount(float pamount) {
		amount = pamount;
	}

}
