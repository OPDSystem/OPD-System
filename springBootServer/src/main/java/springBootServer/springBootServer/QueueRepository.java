package springBootServer.springBootServer;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueueRepository extends MongoRepository<Queue, String> {
	List<Queue> findAll();
}

