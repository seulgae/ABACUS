package com.abacus.instagram.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MainController {

    @RequestMapping("/api/main")
    public List<String> MainList(){
        return Arrays.asList("Main", "Main");
    }
}
