package springBootServer.springBootServer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/apppay")
public class AppointmentService {
	
	@Autowired
	private AppointmentRepository repository;

	
	@SuppressWarnings("finally")
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value ="/{name}", method = RequestMethod.GET)
	public int getAppointments(@PathVariable String name) {
		int count =0;
		try {
			List<Appointment> appointmentList = repository.findAll();
			for (Appointment appointment: appointmentList) {
				if (appointment.getDoctor().equals(name)) {
					count++;
				}
			}
 		} catch( Exception e) {
 			e.printStackTrace();
 		} finally {
 			return count*1000;
 		}
	}
}
