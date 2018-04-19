package com.springcloud.springwebangular.repository;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mock.http.MockHttpOutputMessage;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import com.springcloud.springwebangular.SpringAngularApplication;
import com.springcloud.springwebangular.pojos.Person;
import com.springcloud.springwebangular.respository.PersonRepository;

/**
 * @author Marcos Luna
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SpringAngularApplication.class)
@WebAppConfiguration
public class PersonRestControllerTest {

    private MediaType CONTENT_TYPE_JSON = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));
    
    private MediaType CONTENT_TYPE_HAL_JSON = new MediaType("application", "hal+json", Charset.forName("UTF-8"));

    private MockMvc mockMvc;

    @SuppressWarnings("rawtypes")
	private HttpMessageConverter mappingJackson2HttpMessageConverter;

    private List<Person> peopleList = new ArrayList<>();

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    void setConverters(HttpMessageConverter<?>[] converters) {

        this.mappingJackson2HttpMessageConverter = Arrays.asList(converters).stream()
            .filter(hmc -> hmc instanceof MappingJackson2HttpMessageConverter)
            .findAny()
            .orElse(null);

        assertNotNull("the JSON message converter must not be null",
                this.mappingJackson2HttpMessageConverter);
    }

    @Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();

        this.personRepository.deleteAll();
        this.peopleList.add(personRepository.save(new Person("Marcos", "Luna")));
        this.peopleList.add(personRepository.save(new Person("Gerardo", "Luna")));
    }
    
    @Test
    public void personNotFound() throws Exception {
    	mockMvc.perform(get("/people/12")
    			.content(this.json(new Person(null, null)))
    			.contentType(CONTENT_TYPE_JSON))
    	.andExpect(status().isNotFound());
    }

    @Test
    public void readSinglePerson() throws Exception {
        mockMvc.perform(get("/people/"+ this.peopleList.get(0).getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName", is(this.peopleList.get(0).getFirstName())))
                .andExpect(jsonPath("$.lastName", is(this.peopleList.get(0).getLastName())));
    }

    @Test
    public void readPeople() throws Exception {
        mockMvc.perform(get("/people"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(CONTENT_TYPE_HAL_JSON))
                .andExpect(jsonPath("$._embedded.people", hasSize(2)))
                .andExpect(jsonPath("$._embedded.people[0].firstName", is(this.peopleList.get(0).getFirstName())))
                .andExpect(jsonPath("$._embedded.people[0].lastName", is(this.peopleList.get(0).getLastName())))
                .andExpect(jsonPath("$._embedded.people[1].firstName", is(this.peopleList.get(1).getFirstName())))
                .andExpect(jsonPath("$._embedded.people[1].lastName", is(this.peopleList.get(1).getLastName())));
    }

    @Test
    public void createPerson() throws Exception {
        String personJson = json(new Person("Marcos", "Luna"));

        this.mockMvc.perform(post("/people")
                .contentType(CONTENT_TYPE_JSON)
                .content(personJson))
                .andExpect(status().isCreated());
    }

    @SuppressWarnings("unchecked")
	protected String json(Object o) throws IOException {
        MockHttpOutputMessage mockHttpOutputMessage = new MockHttpOutputMessage();
        this.mappingJackson2HttpMessageConverter.write(
                o, MediaType.APPLICATION_JSON, mockHttpOutputMessage);
        return mockHttpOutputMessage.getBodyAsString();
    }
}