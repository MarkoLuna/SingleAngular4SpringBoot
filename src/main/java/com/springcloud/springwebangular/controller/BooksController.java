package com.springcloud.springwebangular.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springcloud.springwebangular.pojos.Book;

@RestController
public class BooksController {

    @GetMapping("book")
    public Book getBook(){
        Book book = new Book();
        book.setId(1l);
        book.setAuthor("Marcos");
        book.setTitle("El codigo da vinci");
        
        return book;
    }
}
