package com.springcloud.springwebangular;

import com.springcloud.springwebangular.pojos.Person;
import com.springcloud.springwebangular.respository.PersonRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(CommandLineAppStartupRunner.class);

    @Autowired
    PersonRepository personRepository;

    public CommandLineAppStartupRunner(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        personRepository.save(new Person("Marcos", "Luna"));
        personRepository.save(new Person("Gerardo", "Luna"));
        personRepository.save(new Person("YO2", "Valdez"));

    }
}
