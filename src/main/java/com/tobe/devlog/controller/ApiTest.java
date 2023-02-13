package com.tobe.devlog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ApiTest {

    @GetMapping("/api/hello")
    public String Hello(){
        return "hello";
    }

}
