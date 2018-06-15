package springBootServer.springBootServer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/income")
public class UserService {
	@Autowired
	private UserRepository repository;
	
	private double total;
	
	@SuppressWarnings("finally")
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value ="/{date}", method = RequestMethod.GET)
	public double getPayments(@PathVariable String date) {
		total = 0;

		try {
			List<User> patientList = repository.findAll();
			for (User patient: patientList) {
				if (patient.getdate().equals(date)) {
					
					total += patient.getamount();
				}
			}
			
 		} catch( Exception e) {
 			e.printStackTrace();
 		} finally {
 			return total;
 		}
	}
}