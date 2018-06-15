package springBootServer.springBootServer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loyality")
public class PatientService {
	
	@Autowired
	private PatientRepository repository;
	
	private String data;
	
	@SuppressWarnings("finally")
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value ="/{Id}", method = RequestMethod.GET)
	public double getPayments(@PathVariable String Id) {
		double total = 0;

		try {
			List<Patient> patientList = repository.findAll();
			for (Patient patient: patientList) {
				if (patient.getName().equals(Id)) {
					
					total += patient.getAmount();
				}
			}

 		} catch( Exception e) {
 			e.printStackTrace();
 		} finally {
 			return total/1000;
 		}
	}
}
