package springBootServer.springBootServer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/que")
public class QueueService {
	
	@Autowired
	private QueueRepository repository;

	
	@SuppressWarnings("finally")
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value ="/{name}", method = RequestMethod.GET)
	public int getQueue(@PathVariable String name) {
		int count =0;
		try {
			List<Queue> queueList = repository.findAll();
			for (Queue queue: queueList) {
				if (queue.getDoctor().equals(name)) {
					count++;
				}
			}
 		} catch( Exception e) {
 			e.printStackTrace();
 		} finally {
 			return count;
 		}
	}
}
