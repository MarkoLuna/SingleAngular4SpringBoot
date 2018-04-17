package com.springcloud.springwebangular.respository;

import com.springcloud.springwebangular.pojos.Person;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {

	/**
	 * Buscar por los links: 
	 * {@code 
	 	http://localhost:8080/people/search
	 	http://localhost:8080/people/search/findByLastName?lastName=Luna }
	 * @see https://spring.io/guides/gs/accessing-data-rest/
	 **/
    List<Person> findByLastName(@Param("lastName") String lastName);

}